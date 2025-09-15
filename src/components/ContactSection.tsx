
import { MapPin, Phone, Mail, Clock, Facebook, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const succursales = [
    {
      name: "Église Principale",
      location: "Buturande Centre",
      responsable: "Père Jean-Baptiste KASINDI"
    },
    {
      name: "Succursale Notre-Dame",
      location: "Quartier Matonge",
      responsable: "Père Michel MUHINDO"
    },
    {
      name: "Succursale Saint-Joseph",
      location: "Quartier Kimisagara",
      responsable: "Père Emmanuel KAMBALE"
    },
    {
      name: "Succursale Sainte-Thérèse",
      location: "Quartier Bujovu",
      responsable: "Père Augustin PALUKU"
    },
    {
      name: "Succursale Saint-Charles",
      location: "Quartier Muhongozi",
      responsable: "Père Dieudonné MBUSA"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Contact & <span className="text-marian">Localisation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute information 
            ou demande spirituelle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Informations de contact */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MapPin className="w-5 h-5 mr-2 text-marian" />
                  Adresse Principale
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Paroisse Sainte Faustine<br />
                  Avenue MWANGAZA, Quartier de BUTURANDE N° 001<br />
                  Territoire de Rutshuru, Province du Nord-Kivu<br />
                  République Démocratique du Congo
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Clock className="w-5 h-5 mr-2 text-sacred" />
                  Horaires d'Accueil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Lundi - Vendredi:</strong> 8h00 - 17h00</p>
                  <p><strong>Samedi:</strong> 8h00 - 12h00</p>
                  <p><strong>Dimanche:</strong> Après les messes</p>
                  <p className="text-sm text-earth mt-2">
                    *Urgences pastorales: 24h/24
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Phone className="w-5 h-5 mr-2 text-divine" />
                  Contacts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">+243 970 929 807</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">+243 993 770 719</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">contact@saintefaustinekb.org</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">WhatsApp: +243 970 929 807</span>
                </div>
                <div className="flex items-center">
                  <Facebook className="w-4 h-4 mr-2 text-muted-foreground" />
                  <span className="text-muted-foreground">Paroisse Sainte Faustine Buturande</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulaire de contact */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-foreground">Envoyez-nous un Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Nom</label>
                    <Input placeholder="Votre nom" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input type="email" placeholder="votre@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Sujet</label>
                  <Input placeholder="Objet de votre message" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Votre message..."
                    rows={5}
                  />
                </div>
                <Button className="w-full bg-sacred hover:bg-sacred/90 text-sacred-foreground">
                  Envoyer le Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Les 5 succursales */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Nos 5 Succursales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {succursales.map((succursale, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-border/50">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground mb-2">{succursale.name}</h4>
                  <p className="text-muted-foreground text-sm mb-2">{succursale.location}</p>
                  <p className="text-earth font-medium text-sm">{succursale.responsable}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section faire un don */}
        <div className="mt-16 bg-sacred/10 rounded-lg p-8 text-center border border-sacred/20">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Soutenir Notre Mission</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Votre générosité nous permet de continuer notre mission d'évangélisation 
            et d'aide aux plus démunis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sacred hover:bg-sacred/90 text-sacred-foreground">
              Faire un Don
            </Button>
            <Button size="lg" variant="outline" className="border-sacred text-sacred hover:bg-sacred hover:text-sacred-foreground">
              Soutenir un Projet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
