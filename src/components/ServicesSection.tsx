
import { Baby, Heart, BookOpen, Cross, HandHeart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Baby,
      title: "Baptême",
      description: "Accueil des nouveaux membres dans la famille chrétienne",
      details: "Préparation des parents et parrains/marraines"
    },
    {
      icon: Heart,
      title: "Mariage",
      description: "Célébration de l'union sacrée devant Dieu",
      details: "Préparation au mariage chrétien"
    },
    {
      icon: BookOpen,
      title: "Catéchèse",
      description: "Formation religieuse pour tous les âges",
      details: "Préparation aux sacrements et formation continue"
    },
    {
      icon: Cross,
      title: "Confession",
      description: "Sacrement de réconciliation et de pardon",
      details: "Disponible selon les horaires affichés"
    },
    {
      icon: HandHeart,
      title: "Assistance Sociale",
      description: "Aide aux familles en difficulté",
      details: "Soutien matériel et spirituel"
    },
    {
      icon: Users,
      title: "Groupes de Prière",
      description: "Communautés de foi et de partage",
      details: "CEV, Légion de Marie, groupes de jeunes"
    }
  ];

  return (
    <section id="sacrements" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Sacrements & <span className="text-marian">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La paroisse accompagne chaque fidèle dans son cheminement spirituel 
            à travers les sacrements et divers services pastoraux.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-marian/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-marian/20 transition-colors">
                  <service.icon className="w-8 h-8 text-marian" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-3">{service.description}</p>
                <p className="text-sm text-earth font-medium">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-sacred/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Horaires des Messes</h3>
          <div className="grid md:grid-cols-3 gap-6 text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Dimanche</h4>
              <p>7h00 - Messe matinale</p>
              <p>10h00 - Messe principale</p>
              <p>17h00 - Messe du soir</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Semaine</h4>
              <p>6h30 - Messe quotidienne</p>
              <p>18h00 - Vêpres (Mar/Jeu)</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Samedi</h4>
              <p>6h30 - Messe matinale</p>
              <p>18h00 - Messe anticipée</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
