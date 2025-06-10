
import { ExternalLink, Calendar, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const VaticanNewsSection = () => {
  const vaticanNews = [
    {
      title: "Message du Pape François pour la Journée Mondiale de la Paix",
      excerpt: "Le Saint-Père nous invite à réfléchir sur l'intelligence artificielle et la paix dans le monde moderne.",
      date: "1er Janvier 2024",
      source: "Vatican News",
      link: "#",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070"
    },
    {
      title: "Synode sur la Synodalité : les dernières décisions",
      excerpt: "Les conclusions du Synode et leur impact sur l'Église universelle et les Églises locales.",
      date: "28 Octobre 2024",
      source: "Vatican News",
      link: "#",
      image: "https://images.unsplash.com/photo-1548193667-8fc4838c7ae3?q=80&w=2070"
    },
    {
      title: "Encyclique sur la Miséricorde Divine",
      excerpt: "Réflexion du Pape sur la dévotion à la Miséricorde Divine selon Sainte Faustine.",
      date: "15 Septembre 2024",
      source: "Vatican News",
      link: "#",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2070"
    }
  ];

  return (
    <section id="vatican-news" className="py-16 bg-gradient-to-br from-sacred/5 to-marian/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Vatican <span className="text-sacred">News</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suivez les dernières nouvelles du Saint-Siège et les enseignements du Pape François, 
            particulièrement en lien avec la dévotion à la Miséricorde Divine.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {vaticanNews.map((news, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className="bg-sacred/10 text-sacred px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <Globe className="w-3 h-3 mr-1" />
                    {news.source}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {news.date}
                  </div>
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-sacred transition-colors">
                  {news.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {news.excerpt}
                </p>
                <Button variant="ghost" size="sm" className="text-sacred hover:text-sacred/80 p-0">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Lire sur Vatican News
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background/80 backdrop-blur-sm rounded-lg p-8 border border-sacred/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Restez Connectés au Vatican</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Suivez les enseignements du Pape François et les nouvelles de l'Église universelle 
              pour nourrir votre foi et votre engagement chrétien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-sacred hover:bg-sacred/90 text-sacred-foreground">
                <ExternalLink className="w-4 h-4 mr-2" />
                Vatican News
              </Button>
              <Button variant="outline" className="border-sacred text-sacred hover:bg-sacred hover:text-sacred-foreground">
                <Globe className="w-4 h-4 mr-2" />
                Radio Vatican
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaticanNewsSection;
