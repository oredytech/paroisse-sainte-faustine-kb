
import { Calendar, User, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Célébration de la Fête de Sainte Faustine",
      excerpt: "Rejoignez-nous pour une journée spéciale de prière et de célébration en l'honneur de notre sainte patronne.",
      date: "5 Octobre 2024",
      author: "Père Jean-Baptiste",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2073",
      category: "Événement"
    },
    {
      id: 2,
      title: "Nouvelle Session de Catéchèse",
      excerpt: "Inscription ouverte pour la préparation à la première communion. Places limitées.",
      date: "28 Septembre 2024",
      author: "Sœur Marie-Claire",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070",
      category: "Formation"
    },
    {
      id: 3,
      title: "Collecte pour les Familles en Difficulté",
      excerpt: "Notre action caritative continue. Votre générosité fait la différence dans notre communauté.",
      date: "25 Septembre 2024",
      author: "Comité Social",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=2073",
      category: "Solidarité"
    }
  ];

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
          {news.map((article) => (
            <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-border/50">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                  <span className="bg-divine/10 text-divine px-2 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {article.date}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-divine transition-colors">
                  {article.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <Button variant="ghost" size="sm" className="text-divine hover:text-divine/80">
                    Lire plus
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
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
