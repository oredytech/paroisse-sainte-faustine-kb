
import { useQuery } from '@tanstack/react-query';
import { wordpressApi } from '@/services/wordpressApi';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MessageCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ArticleSidebarProps {
  currentPostId: number;
  categoryIds: number[];
}

const ArticleSidebar = ({ currentPostId, categoryIds }: ArticleSidebarProps) => {
  const { data: relatedPosts = [] } = useQuery({
    queryKey: ['relatedPosts', currentPostId, categoryIds],
    queryFn: () => wordpressApi.getRelatedPosts(categoryIds, currentPostId),
  });

  const { data: latestComments = [] } = useQuery({
    queryKey: ['latestComments'],
    queryFn: () => wordpressApi.getLatestComments(),
  });

  const stripHtml = (html: string) => {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.textContent || div.innerText || '';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'short',
    });
  };

  const getFeaturedImageUrl = (post: any) => {
    if (post._embedded?.['wp:featuredmedia']?.[0]) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop';
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <div className="space-y-6">
      {/* Logo de la paroisse */}
      <Card>
        <CardContent className="p-6 text-center">
          <img 
            src="/lovable-uploads/c40889c9-fd40-4604-8a20-4b4d772dc3ed.png" 
            alt="Logo Paroisse Sainte Faustine"
            className="w-32 h-32 mx-auto mb-4 rounded-full object-cover"
          />
          <h3 className="font-bold text-foreground mb-2">Paroisse Sainte Faustine</h3>
          <p className="text-sm text-muted-foreground">Buturande</p>
        </CardContent>
      </Card>

      {/* Articles similaires */}
      {relatedPosts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Articles similaires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {relatedPosts.map((post) => (
              <div key={post.id} className="flex gap-3 pb-4 border-b border-border last:border-b-0 last:pb-0">
                <img 
                  src={getFeaturedImageUrl(post)}
                  alt={stripHtml(post.title.rendered)}
                  className="w-16 h-16 rounded object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <Link to={`/${post.slug}`}>
                    <h4 className="font-medium text-sm text-foreground hover:text-sacred transition-colors line-clamp-2 mb-1">
                      {stripHtml(post.title.rendered)}
                    </h4>
                  </Link>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(post.date)}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Derniers commentaires */}
      {latestComments.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg text-foreground">Derniers commentaires</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {latestComments.map((comment) => (
              <div key={comment.id} className="pb-4 border-b border-border last:border-b-0 last:pb-0">
                <div className="flex items-center gap-2 mb-2">
                  <img 
                    src={comment.author_avatar_urls?.['24'] || '/placeholder.svg'}
                    alt={comment.author_name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium text-sm text-foreground">{comment.author_name}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">
                  {truncateText(stripHtml(comment.content.rendered), 80)}
                </p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <MessageCircle className="w-3 h-3 mr-1" />
                  {formatDate(comment.date)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Bouton vers toutes les actualités */}
      <Card>
        <CardContent className="p-6 text-center">
          <Link to="/actualites">
            <Button variant="outline" className="w-full">
              Voir toutes les actualités
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleSidebar;
