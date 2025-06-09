
import { Cross, Facebook, MessageCircle, Youtube, MapPin, Phone, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-sacred rounded-full flex items-center justify-center">
                <Cross className="w-6 h-6 text-sacred-foreground" />
              </div>
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
              <li><a href="#paroisse" className="hover:text-sacred transition-colors">Histoire</a></li>
              <li><a href="#sacrements" className="hover:text-sacred transition-colors">Sacrements</a></li>
              <li><a href="#actualites" className="hover:text-sacred transition-colors">Actualités</a></li>
              <li><a href="#communautes" className="hover:text-sacred transition-colors">Communautés</a></li>
              <li><a href="#medias" className="hover:text-sacred transition-colors">Médias</a></li>
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

        {/* Horaires des messes */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4 text-center">Horaires des Messes</h4>
          <div className="grid md:grid-cols-3 gap-6 text-center text-muted">
            <div>
              <h5 className="font-medium text-background mb-2">Dimanche</h5>
              <p className="text-sm">7h00 • 10h00 • 17h00</p>
            </div>
            <div>
              <h5 className="font-medium text-background mb-2">Semaine</h5>
              <p className="text-sm">6h30 (Lun-Ven) • 18h00 (Mar/Jeu)</p>
            </div>
            <div>
              <h5 className="font-medium text-background mb-2">Samedi</h5>
              <p className="text-sm">6h30 • 18h00 (anticipée)</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-muted">
          <p className="flex items-center justify-center space-x-2">
            <span>&copy; {currentYear} Paroisse Sainte Faustine de Buturande.</span>
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-sacred" />
            <span>pour la gloire de Dieu</span>
          </p>
          <p className="text-sm mt-2">Diocèse de Butembo-Beni • République Démocratique du Congo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
