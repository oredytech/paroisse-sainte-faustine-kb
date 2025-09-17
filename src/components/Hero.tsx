import { Newspaper, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { wordpressApi } from '@/services/wordpressApi';
import { useEffect, useState } from 'react';
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images par défaut de la paroisse uniquement
  const backgroundImages = ['/paroisse-images/ceremonie-1.jpg', '/paroisse-images/ceremonie-2.jpg', '/paroisse-images/batiment-paroisse.jpg', '/paroisse-images/celebration-exterieure.jpg', '/paroisse-images/nouveau-batiment.jpg'];
  useEffect(() => {
    if (backgroundImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prev => (prev + 1) % backgroundImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [backgroundImages.length]);
  return <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Images de fond défilantes */}
      {backgroundImages.map((image, index) => <div key={index} className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${image}')`
    }} />)}
      
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
          
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">"Jésus, j'ai confiance en toi" - Une communauté de foi, d'espérance et de charité dans le diocèse de Goma.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/actualites">
              <Button size="lg" className="bg-sacred hover:bg-sacred/90 text-sacred-foreground px-8 py-3">
                <Newspaper className="w-5 h-5 mr-2" />
                Actualités
              </Button>
            </Link>
            <Link to="/historique">
              <Button size="lg" variant="ghost" className="border border-white/30 text-white hover:bg-white/20 hover:text-white px-8 py-3 bg-white/10 backdrop-blur-sm">
                <BookOpen className="w-5 h-5 mr-2" />
                Historique
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default Hero;