
import Layout from '@/components/Layout';
import { Download, MapPin, Calendar, Church } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HistoriquePage = () => {
  const succursales = [
    { nom: "Buturande", position: "Centre", annee: "1956" },
    { nom: "Ruhura", position: "Nord", annee: "1964" },
    { nom: "Kibututu", position: "Nord", annee: "1956" },
    { nom: "Kahunga", position: "Ouest", annee: "1969" },
    { nom: "Punga-Nyundo", position: "", annee: "1956" }
  ];

  const evenements = [
    { date: "1956", evenement: "Création de la chapelle-école Buturande (actuelle EP Bukoma)" },
    { date: "1969", evenement: "Début des prières en commun, formation des Communautés Ecclésiales Vivantes (CEV)" },
    { date: "08 Avril 1971", evenement: "Première messe célébrée par le Père Louis INDESTEIGEN" },
    { date: "14 Mai 1971", evenement: "Bénédiction de 8 chapelles de prière (SHIRIKA)" },
    { date: "17 novembre 1973", evenement: "Première réunion préparatoire pour la construction d'une Eglise en pisé" },
    { date: "18 décembre 1973", evenement: "Bénédiction de la première Eglise en pisé par le Père Louis INDESTEIGEN" },
    { date: "05 Juillet 1981", evenement: "Réunion préparatoire pour la construction d'une église en matériaux durables" },
    { date: "02 Mai 1983", evenement: "Début des travaux de construction de l'Eglise en matériaux durables" },
    { date: "08 Octobre 1989", evenement: "Bénédiction de la nouvelle Eglise dédiée à la Sainte Vierge Marie Reine des Apôtres" },
    { date: "2002", evenement: "Expression du désir d'obtenir une Paroisse lors de l'ordination de l'Abbé Faustin MUGHUMALEWA" },
    { date: "21 Avril 2019", evenement: "Monseigneur Théophile KABOY annonce l'érection de la nouvelle paroisse" },
    { date: "28 Avril 2019", evenement: "Messe solennelle d'inauguration de la Paroisse Sainte Faustine de Buturande" }
  ];

  return (
    <Layout>
      <div className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              <span className="text-sacred">Historique</span> de la Paroisse
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Découvrez l'histoire riche et inspirante de la Paroisse Sainte Faustine Kowalska de Buturande, 
              depuis ses humbles débuts en 1956 jusqu'à son érection canonique en 2019.
            </p>
          </div>

          {/* Situation géographique */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-sacred">
                <MapPin className="w-6 h-6 mr-3" />
                Situation Géographique
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                La Paroisse Sainte Faustine Kowalska de Buturande est l'une des Paroisses du Diocèse de Goma. 
                Elle est située en Chefferie de Bwisha, Territoire de Rutshuru, Province du Nord-Kivu, 
                en République Démocratique du Congo.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Succursales de la Paroisse</h4>
                  <div className="space-y-3">
                    {succursales.map((succursale, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-accent/50 rounded-lg">
                        <div>
                          <span className="font-medium text-foreground">{succursale.nom}</span>
                          {succursale.position && (
                            <span className="text-sm text-muted-foreground ml-2">({succursale.position})</span>
                          )}
                        </div>
                        <span className="text-sm font-medium text-sacred">{succursale.annee}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Limites Territoriales</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <strong>Nord :</strong> Paroisse Saint François Caracciolo de Nyamilima (rivière Nkwenda)
                    </div>
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <strong>Sud :</strong> Paroisse Saint Aloys de Rutshuru
                    </div>
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <strong>Est :</strong> Paroisse Saints Pierre et Paul de Karambi
                    </div>
                    <div className="p-3 bg-accent/50 rounded-lg">
                      <strong>Ouest :</strong> Parc National des Virunga
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photo du Père Pierre KALINOWSKI */}
          <Card className="mb-12">
            <CardContent className="text-center p-8">
              <img 
                src="/lovable-uploads/a505d620-b30a-4843-9c7d-5543ba4a1c6f.png"
                alt="Curé - Père Pierre KALINOWSKI (SAC) - Juillet 2003 - Avril 2007"
                className="w-64 h-auto mx-auto rounded-lg shadow-lg mb-4"
              />
              <p className="text-muted-foreground">
                Curé - Père Pierre KALINOWSKI (SAC)<br />
                Juillet 2003 - Avril 2007
              </p>
            </CardContent>
          </Card>

          {/* Chronologie des événements */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl text-sacred">
                <Calendar className="w-6 h-6 mr-3" />
                Chronologie des Événements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed mb-8">
                  La Paroisse de Buturande a commencé à pousser ses bourgeons de chrétienté à l'époque coloniale en 1956, 
                  avec la création de la chapelle-école Buturande, l'actuelle EP Bukoma. Les premiers enseignants (Moniteurs) 
                  étaient d'office les premiers catéchistes à savoir : Kambere Bruno, Kasika Ferdinand, Karamba Théodore, 
                  Kambale Guillaume et Kiyenge Albert.
                </p>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-sacred/30"></div>
                  <div className="space-y-8">
                    {evenements.map((evt, index) => (
                      <div key={index} className="relative flex items-start">
                        <div className="absolute left-0 w-8 h-8 bg-sacred rounded-full flex items-center justify-center z-10">
                          <Church className="w-4 h-4 text-sacred-foreground" />
                        </div>
                        <div className="ml-12">
                          <div className="bg-card border rounded-lg p-4 shadow-sm">
                            <h4 className="font-semibold text-sacred mb-2">{evt.date}</h4>
                            <p className="text-muted-foreground">{evt.evenement}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Érection canonique */}
          <Card className="mb-12 bg-gradient-to-br from-sacred/10 to-divine/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-sacred mb-6 text-center">Érection Canonique - 2019</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  C'est ainsi que, le <strong>21 Avril 2019</strong>, Son Excellence Monseigneur Théophile KABOY envoie 
                  le Révérend Père Curé Gilbert KAZINGUFU, annoncer l'érection de la nouvelle paroisse Sainte Faustine 
                  KOWALSKA de Buturande, datée du 01/04/2019 selon l'acte canonique n° 515.
                </p>
                <p>
                  Le <strong>28 Avril 2019</strong>, Dimanche de la Miséricorde Divine, une messe solennelle est présidée 
                  par Son Excellence Monseigneur Théophile KABOY, et concélébrée par le Père EUGENE NIYONZIMA, Provincial 
                  des Pères Pallottins, et de nombreux autres prêtres. En présence d'une foule immense estimée à plus de 
                  <strong> 10 000 fidèles</strong> venus de toutes les succursales et de la Paroisse Mère de Rutshuru, 
                  que Son Excellence Monseigneur l'Evêque a annoncé solennellement la création de la Paroisse Sainte Faustine 
                  de Buturande. Cette nouvelle Paroisse a été confiée à la SAC (Pères Pallottins).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Document PDF */}
          <div className="text-center">
            <Card className="inline-block">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Document Complet</h4>
                <p className="text-muted-foreground mb-4">
                  Téléchargez l'historique complet de la Paroisse Sainte Faustine Kowalska
                </p>
                <Button asChild className="bg-sacred hover:bg-sacred/90">
                  <a 
                    href="https://saintefaustinekb.org/wp-content/uploads/2021/11/HISTORIQUE-PAROISSE-SAINTE-FAUSTINE-KOWALSKA.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger l'Historique (PDF)
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HistoriquePage;
