import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { wordpressApi } from '@/services/wordpressApi';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Layout from '@/components/Layout';
import CategoriesDropdown from '@/components/CategoriesDropdown';

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const perPage = 9;

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['posts', currentPage, selectedCategory],
    queryFn: () => wordpressApi.getPosts(currentPage, perPage, selectedCategory),
  });

  // Récupérer les 5 derniers articles pour le slider
  const { data: latestPosts } = useQuery({
    queryKey: ['latestPostsSlider'],
    queryFn: () => wordpressApi.getPosts(1, 5),
  });

  const stripHtml = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getFeaturedImageUrl = (post: any) => {
    // Vérifier d'abord si l'image est dans les données embedded
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    
    // Si pas d'image mise en avant, retourner une image par défaut
    return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop';
  };

  const getAuthorName = (post: any) => {
    if (post._embedded?.author?.[0]) {
      return post._embedded.author[0].name;
    }
    return 'Auteur inconnu';
  };

  const getCategoryName = (post: any) => {
    if (post._embedded?.['wp:term']?.[0]?.[0]) {
      return post._embedded['wp:term'][0][0].name;
    }
    return 'Non catégorisé';
  };

  // Gérer le slider d'images des articles
  const backgroundImages = latestPosts?.map(post => getFeaturedImageUrl(post)) || [];

  useEffect(() => {
    if (backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [backgroundImages.length]);

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-sacred border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement des articles...</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header avec slider d'images */}
        <div className="relative bg-gradient-to-br from-sacred/10 to-divine/10 py-16 overflow-hidden">
          {/* Images de fond défilantes */}
          {backgroundImages.length > 0 && backgroundImages.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-20' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url('${image}')`
              }}
            />
          ))}
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Actualités de la <span className="text-sacred">Paroisse</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Suivez les dernières nouvelles et événements de notre communauté paroissiale.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {/* Filtre par catégorie avec dropdown */}
          <div className="mb-8 flex justify-center">
            <CategoriesDropdown
              selectedCategory={selectedCategory}
              onCategoryChange={(categoryId) => {
                setSelectedCategory(categoryId);
                setCurrentPage(1);
              }}
            />
          </div>

          {/* Grille d'articles */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={getFeaturedImageUrl(post)}
                    alt={stripHtml(post.title.rendered)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // En cas d'erreur de chargement, utiliser l'image par défaut
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop';
                    }}
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span className="bg-sacred/10 text-sacred px-2 py-1 rounded-full text-xs font-medium">
                      {getCategoryName(post)}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-sacred transition-colors line-clamp-2">
                    {stripHtml(post.title.rendered)}
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {stripHtml(post.excerpt.rendered)}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <User className="w-4 h-4 mr-1" />
                      {getAuthorName(post)}
                    </div>
                    <Link to={`/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="text-sacred hover:text-sacred/80">
                        Lire la suite
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {posts.length === perPage && (
            <Pagination className="mt-8">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
                  </PaginationItem>
                )}
                
                <PaginationItem>
                  <PaginationLink isActive>{currentPage}</PaginationLink>
                </PaginationItem>
                
                {posts.length === perPage && (
                  <PaginationItem>
                    <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ArticlesPage;
