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
        <div className="container mx-auto px-4 py-8">
          {/* Bouton retour */}
          <div className="mb-6">
            <Link to="/actualites">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux actualités
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2">
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

                <div className="p-6 md:p-8">
                  {/* Métadonnées */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="bg-sacred/10 text-sacred px-3 py-1 rounded-full font-medium">
                      {getCategoryName(post)}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {getAuthorName(post)}
                    </div>
                  </div>

                  {/* Titre */}
                  <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground leading-tight">
                    {stripHtml(post.title.rendered)}
                  </h1>

                  {/* Contenu */}
                  <div 
                    className="prose prose-lg max-w-none text-foreground mb-8"
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  />

                  {/* Boutons de partage */}
                  <div className="border-t border-border pt-6 mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-foreground">Partager cet article</h3>
                      <SocialShare 
                        url={`/article/${post.slug}`}
                        title={stripHtml(post.title.rendered)}
                      />
                    </div>
                  </div>

                  {/* Section commentaires */}
                  <div className="border-t border-border pt-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-foreground">
                        Commentaires ({comments.length})
                      </h3>
                      <Button 
                        onClick={() => setShowCommentForm(!showCommentForm)}
                        variant="outline"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Laisser un commentaire
                      </Button>
                    </div>

                    {/* Formulaire de commentaire */}
                    {showCommentForm && (
                      <div className="mb-8">
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
                    <div className="space-y-6">
                      {comments.map((comment) => (
                        <div key={comment.id} className="bg-muted/30 rounded-lg p-4">
                          <div className="flex items-center gap-3 mb-3">
                            <img 
                              src={comment.author_avatar_urls?.['48'] || '/placeholder.svg'}
                              alt={comment.author_name}
                              className="w-8 h-8 rounded-full"
                            />
                            <div>
                              <p className="font-semibold text-foreground">{comment.author_name}</p>
                              <p className="text-sm text-muted-foreground">{formatDate(comment.date)}</p>
                            </div>
                          </div>
                          <div 
                            className="text-foreground"
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
            <div className="lg:col-span-1">
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
