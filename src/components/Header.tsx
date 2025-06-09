
import { useState } from 'react';
import { Menu, X, Cross, Church, Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'La Paroisse', href: '#paroisse' },
    { name: 'Sacrements', href: '#sacrements' },
    { name: 'Actualités', href: '#actualites' },
    { name: 'Médias', href: '#medias' },
    { name: 'Communautés', href: '#communautes' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sacred rounded-full flex items-center justify-center">
              <Cross className="w-6 h-6 text-sacred-foreground" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-sacred">Paroisse Sainte Faustine</h1>
              <p className="text-xs text-muted-foreground hidden sm:block">Buturande</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-sacred transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-sacred transition-colors px-2 py-1 rounded-md hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
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
