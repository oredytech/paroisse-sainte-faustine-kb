
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { wordpressApi } from '@/services/wordpressApi';

interface CommentFormProps {
  postId: number;
  parentId?: number;
  onSuccess?: () => void;
}

const CommentForm = ({ postId, parentId, onSuccess }: CommentFormProps) => {
  const [formData, setFormData] = useState({
    content: '',
    authorName: '',
    authorEmail: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await wordpressApi.submitComment(
        postId,
        formData.content,
        formData.authorName,
        formData.authorEmail,
        parentId
      );
      
      setSuccess(true);
      setFormData({ content: '', authorName: '', authorEmail: '' });
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setError('Erreur lors de l\'envoi du commentaire. Veuillez réessayer.');
      console.error('Comment submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="pt-6">
          <p className="text-green-800">
            Votre commentaire a été envoyé avec succès ! Il sera publié après modération.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          {parentId ? 'Répondre au commentaire' : 'Laisser un commentaire'}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="authorName">Nom *</Label>
              <Input
                id="authorName"
                type="text"
                value={formData.authorName}
                onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                required
                placeholder="Votre nom"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="authorEmail">Email *</Label>
              <Input
                id="authorEmail"
                type="email"
                value={formData.authorEmail}
                onChange={(e) => setFormData({ ...formData, authorEmail: e.target.value })}
                required
                placeholder="votre@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Commentaire *</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
              placeholder="Votre commentaire..."
              rows={4}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-sacred hover:bg-sacred/90 text-sacred-foreground"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Publier le commentaire'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CommentForm;
