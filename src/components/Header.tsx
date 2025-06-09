
import { useState } from 'react';
import { Menu, X, Cross, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Actualités', href: '/actualites' },
    { name: 'Historique', href: '/#historique' },
    { name: 'Vatican News', href: '/#vatican-news' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/c40889c9-fd40-4604-8a20-4b4d772dc3ed.png"
              alt="Logo Paroisse Sainte Faustine"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-sacred">Paroisse Sainte Faustine</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Buturande</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-foreground hover:text-sacred transition-colors duration-300 text-sm font-medium ${
                  isActiveLink(item.href) ? 'text-sacred' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="text-marian border-marian hover:bg-marian hover:text-marian-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              Messes
            </Button>
            <Button size="sm" className="bg-sacred hover:bg-sacred/90 text-sacred-foreground">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-foreground hover:text-sacred transition-colors px-2 py-1 rounded-md hover:bg-accent ${
                    isActiveLink(item.href) ? 'text-sacred' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="text-marian border-marian hover:bg-marian hover:text-marian-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  Messes
                </Button>
                <Button size="sm" className="bg-sacred hover:bg-sacred/90 text-sacred-foreground">
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
