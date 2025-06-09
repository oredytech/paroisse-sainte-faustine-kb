
import { Users, Music, Sparkles, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CommunitySection = () => {
  const communities = [
    {
      icon: Users,
      name: "CEV",
      fullName: "Communautés Ecclésiales Vivantes",
      description: "Petites communautés de base pour le partage de la foi et l'entraide fraternelle",
      members: "12 communautés actives",
      activities: ["Partage biblique", "Prière communautaire", "Solidarité"],
      color: "sacred"
    },
    {
      icon: Music,
      name: "Chorales",
      fullName: "Groupes de Chant Liturgique",
      description: "Animation musicale des célébrations et formation aux chants sacrés",
      members: "3 chorales paroissiales",
      activities: ["Messes dominicales", "Fêtes liturgiques", "Concerts spirituels"],
      color: "marian"
    },
    {
      icon: Sparkles,
      name: "Jeunes",
      fullName: "Mouvements de Jeunesse",
      description: "Formation humaine et spirituelle des jeunes de la paroisse",
      members: "80+ jeunes engagés",
      activities: ["Catéchèse", "Activités sportives", "Camps spirituels"],
      color: "divine"
    },
    {
      icon: Heart,
      name: "Légion de Marie & Xaveri",
      fullName: "Associations Mariales",
      description: "Dévotion mariale et évangélisation dans l'esprit de saint François Xavier",
      members: "45 membres dévoués",
      activities: ["Rosaire quotidien", "Visites aux malades", "Évangélisation"],
      color: "earth"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      sacred: {
        bg: "bg-sacred/10",
        text: "text-sacred",
        border: "border-sacred/20"
      },
      marian: {
        bg: "bg-marian/10",
        text: "text-marian",
        border: "border-marian/20"
      },
      divine: {
        bg: "bg-divine/10",
        text: "text-divine",
        border: "border-divine/20"
      },
      earth: {
        bg: "bg-earth/10",
        text: "text-earth",
        border: "border-earth/20"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.sacred;
  };

  return (
    <section id="communautes" className="py-16 bg-gradient-to-br from-muted/20 to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Nos <span className="text-sacred">Communautés</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La richesse de notre paroisse réside dans la diversité et la vitalité 
            de nos communautés qui vivent et témoignent de l'Évangile.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {communities.map((community, index) => {
            const colors = getColorClasses(community.color);
            const IconComponent = community.icon;
            
            return (
              <Card key={index} className={`hover:shadow-xl transition-all duration-300 border ${colors.border}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div>
                      <CardTitle className={`text-xl ${colors.text}`}>{community.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{community.fullName}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {community.description}
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Membres:</span>
                      <span className={`text-sm font-semibold ${colors.text}`}>{community.members}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground mb-2 block">Activités principales:</span>
                      <div className="flex flex-wrap gap-2">
                        {community.activities.map((activity, idx) => (
                          <span key={idx} className={`text-xs px-3 py-1 ${colors.bg} ${colors.text} rounded-full`}>
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Section rejoindre une communauté */}
        <div className="bg-sacred/5 rounded-lg p-8 text-center border border-sacred/20">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Rejoignez une Communauté</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Chaque baptisé est appelé à vivre sa foi en communauté. Découvrez le groupe 
            qui correspond à votre état de vie et à vos aspirations spirituelles.
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="text-center p-4">
              <h4 className="font-semibold text-foreground mb-2">Pour les Familles</h4>
              <p className="text-sm text-muted-foreground">CEV et groupes de couples</p>
            </div>
            <div className="text-center p-4">
              <h4 className="font-semibold text-foreground mb-2">Pour les Jeunes</h4>
              <p className="text-sm text-muted-foreground">Mouvements de jeunesse et aumônerie</p>
            </div>
            <div className="text-center p-4">
              <h4 className="font-semibold text-foreground mb-2">Pour les Aînés</h4>
              <p className="text-sm text-muted-foreground">Légion de Marie et groupes de prière</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
