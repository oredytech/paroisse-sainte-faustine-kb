
import { Church, Users, Heart, Crown } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const features = [
    {
      icon: Church,
      title: "5 Succursales",
      description: "Une communauté étendue avec cinq lieux de culte dans la région"
    },
    {
      icon: Users,
      title: "Communauté Vivante",
      description: "CEV, chorales, groupes de jeunes et nombreuses associations"
    },
    {
      icon: Heart,
      title: "Action Sociale",
      description: "Assistance aux plus démunis et œuvres caritatives"
    },
    {
      icon: Crown,
      title: "Tradition & Modernité",
      description: "Fidèle à la tradition tout en s'adaptant aux enjeux actuels"
    }
  ];

  return (
    <section id="paroisse" className="py-16 bg-gradient-to-br from-muted/30 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Notre <span className="text-sacred">Paroisse</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Située dans le diocèse de Butembo-Beni, la Paroisse Sainte Faustine de Buturande 
            est une communauté chrétienne dynamique qui témoigne de la miséricorde divine 
            à travers la dévotion à Sainte Faustine Kowalska.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-sacred/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-sacred" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Histoire et Mission</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                La Paroisse Sainte Faustine de Buturande trouve son origine dans le désir profond 
                de la communauté chrétienne locale de vivre pleinement la miséricorde divine 
                enseignée par sainte Faustine Kowalska.
              </p>
              <p>
                Notre mission est de rassembler tous les fidèles autour du Christ miséricordieux, 
                en proposant une vie sacramentelle riche, une formation chrétienne solide et 
                un engagement social concret auprès des plus démunis.
              </p>
              <p>
                Avec nos cinq succursales, nous touchons une large communauté et œuvrons 
                ensemble pour l'évangélisation et le développement intégral de notre région.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2074"
                alt="Architecture religieuse"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sacred rounded-full flex items-center justify-center shadow-lg">
              <Church className="w-12 h-12 text-sacred-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
