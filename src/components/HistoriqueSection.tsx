
import { Calendar, Church, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HistoriqueSection = () => {
  const highlightEvents = [
    { date: "1956", evenement: "Création de la chapelle-école Buturande" },
    { date: "1971", evenement: "Première messe célébrée par le Père Louis INDESTEIGEN" },
    { date: "1989", evenement: "Bénédiction de l'Eglise dédiée à la Sainte Vierge Marie" },
    { date: "2019", evenement: "Érection canonique de la Paroisse Sainte Faustine" }
  ];

  return (
    <section id="historique" className="py-16 bg-gradient-to-br from-muted/30 to-accent/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Notre <span className="text-sacred">Histoire</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Découvrez l'histoire riche et inspirante de la Paroisse Sainte Faustine Kowalska de Buturande, 
            depuis ses humbles débuts en 1956 jusqu'à son érection canonique en 2019.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Description */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">Des Racines Profondes</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                La Paroisse Sainte Faustine Kowalska de Buturande trouve ses origines dans le désir profond 
                de la communauté chrétienne locale de vivre pleinement la foi catholique. Située en Chefferie 
                de Bwisha, Territoire de Rutshuru, Province du Nord-Kivu, notre paroisse a une histoire 
                riche qui s'étend sur plus de 60 ans.
              </p>
              <p>
                Depuis la création de la première chapelle-école en 1956 jusqu'à l'érection canonique en 2019, 
                chaque étape de notre parcours témoigne de la fidélité de nos communautés et de la grâce divine 
                qui nous accompagne.
              </p>
              <p>
                Avec nos cinq succursales (Buturande, Ruhura, Kibututu, Kahunga, et Punga-Nyundo), 
                nous servons une large communauté unie dans la foi et l'amour du Christ miséricordieux.
              </p>
            </div>
            
            <div className="mt-8">
              <Button asChild className="bg-sacred hover:bg-sacred/90">
                <Link to="/historique">
                  <Calendar className="w-4 h-4 mr-2" />
                  Découvrir notre Histoire Complète
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
          
          {/* Timeline des événements marquants */}
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-sacred mb-6">Moments Clés</h4>
                <div className="space-y-4">
                  {highlightEvents.map((evt, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-sacred/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Church className="w-4 h-4 text-sacred" />
                      </div>
                      <div>
                        <div className="font-semibold text-sacred text-sm">{evt.date}</div>
                        <div className="text-muted-foreground text-sm leading-relaxed">{evt.evenement}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoriqueSection;
