
import { Button } from '@/components/ui/button';
import { Share2, MessageCircle } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare = ({ url, title }: SocialShareProps) => {
  // Utiliser le domaine personnalisé au lieu du domaine actuel
  const fullUrl = url.startsWith('http') ? url : `https://saintefaustinekb.org${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      name: 'Facebook',
      icon: Share2,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Twitter',
      icon: Share2,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'bg-sky-500 hover:bg-sky-600',
    },
    {
      name: 'LinkedIn',
      icon: Share2,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'bg-blue-700 hover:bg-blue-800',
    },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {shareLinks.map((link) => (
        <Button
          key={link.name}
          size="sm"
          className={`${link.color} text-white`}
          onClick={() => window.open(link.url, '_blank', 'width=600,height=400')}
        >
          <link.icon className="w-4 h-4 mr-2" />
          {link.name}
        </Button>
      ))}
    </div>
  );
};

export default SocialShare;
