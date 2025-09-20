
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { wordpressApi } from '@/services/wordpressApi';

const NewsSection = () => {
  const { data: posts = [], isLoading } = useQuery({
    queryKey: ['homepage-posts'],
    queryFn: () => wordpressApi.getPosts(1, 3), // Récupérer les 3 derniers articles
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
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2073';
  };

  const getAuthorName = (post: any) => {
    if (post._embedded?.author?.[0]) {
      return post._embedded.author[0].name;
    }
    return 'Paroisse Sainte Faustine';
  };

  const getCategoryName = (post: any) => {
    if (post._embedded?.['wp:term']?.[0]?.[0]) {
      return post._embedded['wp:term'][0][0].name;
    }
    return 'Actualité';
  };

  if (isLoading) {
    return (
      <section id="actualites" className="py-16 bg-gradient-to-br from-accent/20 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Actualités & <span className="text-divine">Événements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Restez informés de la vie de notre paroisse et des événements à venir.
            </p>
          </div>
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-divine border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement des actualités...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="actualites" className="py-16 bg-gradient-to-br from-accent/20 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Actualités & <span className="text-divine">Événements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Restez informés de la vie de notre paroisse et des événements à venir.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={getFeaturedImageUrl(post)}
                  alt={stripHtml(post.title.rendered)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2073';
                  }}
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className="bg-divine/10 text-divine px-2 py-1 rounded-full text-xs font-medium">
                    {getCategoryName(post)}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(post.date)}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-divine transition-colors line-clamp-2">
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
                    <Button variant="ghost" size="sm" className="text-divine hover:text-divine/80">
                      Lire plus
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/actualites">
            <Button size="lg" variant="outline" className="border-divine text-divine hover:bg-divine hover:text-divine-foreground">
              Voir toutes les actualités
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
