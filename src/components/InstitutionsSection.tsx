import { GraduationCap, Building2, Heart, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const InstitutionsSection = () => {
  const ecolesPrivmaires = [
    "EP Bukoma",
    "EP Kachemu", 
    "EP Kahunga",
    "EP Katoro1",
    "EP Kibututu",
    "EP Kinyandonyi"
  ];

  const ecolesSecondaires = [
    "Institut Jikaze",
    "Institut Saint Jean Paul II",
    "Institut Kinyandonyi"
  ];

  const projetsEnCours = [
    {
      title: "Garderie Sainte Thérèse",
      description: "École maternelle en développement",
      type: "Maternelle"
    },
    {
      title: "École Primaire et Secondaire",
      description: "Extension de nos capacités éducatives",
      type: "Primaire & Secondaire"
    }
  ];

  return (
    <section id="institutions" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Nos <span className="text-marian">Institutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La Paroisse Sainte Faustine s'engage dans l'éducation et le développement 
            de la communauté à travers ses nombreuses institutions éducatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Écoles Primaires */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <GraduationCap className="w-5 h-5 mr-2 text-sacred" />
                Écoles Primaires
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {ecolesPrivmaires.map((ecole, index) => (
                  <li key={index} className="text-muted-foreground text-sm flex items-center">
                    <div className="w-2 h-2 bg-sacred rounded-full mr-3 flex-shrink-0"></div>
                    {ecole}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Écoles Secondaires */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Building2 className="w-5 h-5 mr-2 text-divine" />
                Écoles Secondaires
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {ecolesSecondaires.map((ecole, index) => (
                  <li key={index} className="text-muted-foreground text-sm flex items-center">
                    <div className="w-2 h-2 bg-divine rounded-full mr-3 flex-shrink-0"></div>
                    {ecole}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Soeurs de Sainte Chrétienne */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center text-foreground">
                <Heart className="w-5 h-5 mr-2 text-marian" />
                Soeurs de Sainte Chrétienne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-muted-foreground text-sm">
                <p className="font-medium mb-2">Complexe scolaire Sainte Chrétienne</p>
                <ul className="space-y-1 ml-4">
                  <li>• Maternelle</li>
                  <li>• Primaire</li>
                  <li>• Secondaire</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projets en cours */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Nos Projets <span className="text-sacred">en Cours</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projetsEnCours.map((projet, index) => (
              <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-earth rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{projet.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{projet.description}</p>
                      <span className="inline-block px-2 py-1 bg-earth/10 text-earth text-xs rounded-full">
                        {projet.type}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Projet des Pères Pallottins */}
        <div className="bg-sacred/10 rounded-lg p-8 border border-sacred/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Projet des <span className="text-sacred">Pères Pallottins</span>
            </h3>
            <Card className="max-w-2xl mx-auto border-sacred/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-sacred mr-2" />
                  <h4 className="font-bold text-foreground text-lg">
                    Sanctuaire de la Miséricorde Divine
                  </h4>
                </div>
                <p className="text-muted-foreground mb-2">
                  Un lieu de pèlerinage et de recueillement dédié à la Miséricorde Divine
                </p>
                <div className="flex items-center justify-center text-sm text-sacred">
                  <MapPin className="w-4 h-4 mr-1" />
                  Buhunda, Kiwanja
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutionsSection;