
import { Play, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2070')`
        }}
      />
      
      {/* Contenu */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Paroisse 
            <span className="block text-sacred"> Sainte Faustine</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2">
              de Buturande
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            "Jésus, j'ai confiance en Vous" - Une communauté de foi, d'espérance et de charité 
            dans le diocèse de Butembo-Beni
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-sacred hover:bg-sacred/90 text-sacred-foreground px-8 py-3">
              <Calendar className="w-5 h-5 mr-2" />
              Horaires des Messes
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
              <Play className="w-5 h-5 mr-2" />
              Dernière Homélie
            </Button>
          </div>

          {/* Prochaine messe */}
          <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
            <h3 className="text-foreground font-semibold mb-3">Prochaine Messe</h3>
            <div className="flex items-center justify-between text-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-marian" />
                <span className="text-sm">Dimanche 10h00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-earth" />
                <span className="text-sm">Église Principale</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
