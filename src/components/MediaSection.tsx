
import { Play, Image, Mic, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const MediaSection = () => {
  const mediaItems = [
    {
      type: 'video',
      title: 'Homélie du Dimanche - La Miséricorde Divine',
      description: 'Réflexion sur la miséricorde de Dieu selon Sainte Faustine',
      thumbnail: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2070',
      duration: '15 min',
      date: '1er Octobre 2024'
    },
    {
      type: 'audio',
      title: 'Chapelet de la Miséricorde Divine',
      description: 'Prière guidée du chapelet enseigné par Sainte Faustine',
      thumbnail: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2074',
      duration: '22 min',
      date: '28 Septembre 2024'
    },
    {
      type: 'gallery',
      title: 'Fête Patronale 2024',
      description: 'Photos de la célébration de Sainte Faustine',
      thumbnail: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2073',
      count: '48 photos',
      date: '5 Octobre 2024'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Play;
      case 'audio':
        return Mic;
      case 'gallery':
        return Image;
      default:
        return Play;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'video':
        return 'Vidéo';
      case 'audio':
        return 'Audio';
      case 'gallery':
        return 'Galerie';
      default:
        return 'Média';
    }
  };

  return (
    <section id="medias" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Médias & <span className="text-earth">Ressources</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos homélies, prières guidées et souvenirs de notre vie paroissiale.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {mediaItems.map((item, index) => {
            const IconComponent = getIcon(item.type);
            
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-earth rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-earth-foreground" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-earth text-earth-foreground px-2 py-1 rounded-full text-xs font-medium">
                      {getTypeLabel(item.type)}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {item.type === 'gallery' ? item.count : item.duration}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-earth transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                    <Button size="sm" variant="ghost" className="text-earth hover:text-earth/80">
                      <IconComponent className="w-4 h-4 mr-2" />
                      {item.type === 'gallery' ? 'Voir' : 'Écouter'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Section ressources spirituelles */}
        <div className="bg-muted/30 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Ressources Spirituelles</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-sacred/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-sacred" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Livret de Prières</h4>
              <p className="text-sm text-muted-foreground mb-3">Prières de Sainte Faustine</p>
              <Button size="sm" variant="outline" className="text-sacred border-sacred hover:bg-sacred hover:text-sacred-foreground">
                Télécharger
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-marian/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mic className="w-8 h-8 text-marian" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Podcasts</h4>
              <p className="text-sm text-muted-foreground mb-3">Homélies hebdomadaires</p>
              <Button size="sm" variant="outline" className="text-marian border-marian hover:bg-marian hover:text-marian-foreground">
                Écouter
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-divine/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8 text-divine" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Messes en Live</h4>
              <p className="text-sm text-muted-foreground mb-3">Diffusion en direct</p>
              <Button size="sm" variant="outline" className="text-divine border-divine hover:bg-divine hover:text-divine-foreground">
                Regarder
              </Button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-earth/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image className="w-8 h-8 text-earth" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground">Archives Photos</h4>
              <p className="text-sm text-muted-foreground mb-3">Histoire de la paroisse</p>
              <Button size="sm" variant="outline" className="text-earth border-earth hover:bg-earth hover:text-earth-foreground">
                Explorer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
