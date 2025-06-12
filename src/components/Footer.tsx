
import { Cross, Facebook, MessageCircle, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/c40889c9-fd40-4604-8a20-4b4d772dc3ed.png"
                alt="Logo Paroisse Sainte Faustine"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Paroisse Sainte Faustine</h3>
                <p className="text-sm text-muted">Buturande</p>
              </div>
            </div>
            <p className="text-muted leading-relaxed mb-4 max-w-md">
              "Jésus, j'ai confiance en Vous" - Notre paroisse témoigne de la miséricorde divine 
              et accompagne chaque fidèle dans son cheminement spirituel.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-sacred transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-sacred transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-sacred transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2 text-muted">
              <li><Link to="/" className="hover:text-sacred transition-colors">Accueil</Link></li>
              <li><Link to="/actualites" className="hover:text-sacred transition-colors">Actualités</Link></li>
              <li><Link to="/historique" className="hover:text-sacred transition-colors">Historique</Link></li>
              <li><a href="/#vatican-news" className="hover:text-sacred transition-colors">Vatican News</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-muted">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-sacred" />
                <div className="text-sm">
                  <p>Avenue de la Paix</p>
                  <p>Buturande, Butembo</p>
                  <p>Nord-Kivu, RDC</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-sacred" />
                <span className="text-sm">+243 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-sacred" />
                <span className="text-sm">contact@paroissesteaustine.cd</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-muted">
          <p className="flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} Paroisse Sainte Faustine de Buturande.</span>
          </p>
          <p className="text-sm mt-2">
            Fièrement conçu par <a href="https://oredytech.com" target="_blank" rel="noopener noreferrer" className="text-sacred hover:text-sacred/80 transition-colors">Oredy TECHNOLOGIES</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
