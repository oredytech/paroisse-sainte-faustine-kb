import { useQuery } from '@tanstack/react-query';
import { useParams, Link } from 'react-router-dom';
import { wordpressApi } from '@/services/wordpressApi';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Share2, MessageCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import CommentForm from '@/components/CommentForm';
import SocialShare from '@/components/SocialShare';
import ArticleSidebar from '@/components/ArticleSidebar';
import Layout from '@/components/Layout';

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showCommentForm, setShowCommentForm] = useState(false);

  const { data: post, isLoading } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => wordpressApi.getPostBySlug(slug!),
    enabled: !!slug,
  });

  const { data: comments = [] } = useQuery({
    queryKey: ['comments', post?.id],
    queryFn: () => wordpressApi.getComments(post!.id),
    enabled: !!post?.id,
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
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getFeaturedImageUrl = (post: any) => {
    if (post._embedded?.['wp:featuredmedia']?.[0]) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return null;
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

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-sacred border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Chargement de l'article...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-foreground">Article non trouvé</h1>
            <p className="text-muted-foreground mb-6">L'article que vous cherchez n'existe pas ou a été supprimé.</p>
            <Link to="/actualites">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux actualités
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const featuredImage = getFeaturedImageUrl(post);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-2 sm:px-4 py-4 sm:py-8 max-w-7xl">
          {/* Bouton retour */}
          <div className="mb-4 sm:mb-6">
            <Link to="/actualites">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux actualités
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2 min-w-0">
              <article className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
                {/* Image mise en avant */}
                {featuredImage && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={featuredImage}
                      alt={stripHtml(post.title.rendered)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-3 sm:p-6 md:p-8">
                  {/* Métadonnées */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-sacred/10 text-sacred px-2 sm:px-3 py-1 rounded-full font-medium text-xs sm:text-sm">
                      {getCategoryName(post)}
                    </span>
                    <div className="flex items-center text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      <span className="hidden sm:inline">{formatDate(post.date)}</span>
                      <span className="sm:hidden">{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center text-xs sm:text-sm">
                      <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {getAuthorName(post)}
                    </div>
                  </div>

                  {/* Titre */}
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground leading-tight break-words">
                    {stripHtml(post.title.rendered)}
                  </h1>

                  {/* Contenu */}
                  <div 
                    className="prose prose-sm sm:prose-base lg:prose-lg max-w-none text-foreground mb-6 sm:mb-8 overflow-hidden break-words"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />

                  {/* Boutons de partage */}
                  <div className="border-t border-border pt-4 sm:pt-6 mb-4 sm:mb-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground">Partager cet article</h3>
                      <div className="overflow-x-auto w-full sm:w-auto">
                        <SocialShare 
                          url={`/${post.slug}`}
                          title={stripHtml(post.title.rendered)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section commentaires */}
                  <div className="border-t border-border pt-4 sm:pt-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                        Commentaires ({comments.length})
                      </h3>
                      <Button 
                        onClick={() => setShowCommentForm(!showCommentForm)}
                        variant="outline"
                        size="sm"
                        className="w-full sm:w-auto"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Laisser un commentaire
                      </Button>
                    </div>

                    {/* Formulaire de commentaire */}
                    {showCommentForm && (
                      <div className="mb-6 sm:mb-8">
                        <CommentForm 
                          postId={post.id}
                          onSuccess={() => {
                            setShowCommentForm(false);
                            // Refresh comments
                            window.location.reload();
                          }}
                        />
                      </div>
                    )}

                    {/* Liste des commentaires */}
                    <div className="space-y-4 sm:space-y-6">
                      {comments.map((comment) => (
                        <div key={comment.id} className="bg-muted/30 rounded-lg p-3 sm:p-4 break-words">
                          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                            <img 
                              src={comment.author_avatar_urls?.['48'] || '/placeholder.svg'}
                              alt={comment.author_name}
                              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-foreground text-sm sm:text-base truncate">{comment.author_name}</p>
                              <p className="text-xs sm:text-sm text-muted-foreground">{formatDate(comment.date)}</p>
                            </div>
                          </div>
                          <div 
                            className="text-foreground text-sm sm:text-base break-words overflow-wrap-anywhere"
                            dangerouslySetInnerHTML={{ __html: comment.content.rendered }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 min-w-0">
              <ArticleSidebar 
                currentPostId={post.id}
                categoryIds={post.categories}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ArticlePage;
