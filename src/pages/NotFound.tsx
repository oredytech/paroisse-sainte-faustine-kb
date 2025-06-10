
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import Layout from '@/components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-sacred mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4 text-foreground">Page non trouvée</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            La page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link to="/">
            <Button className="bg-sacred hover:bg-sacred/90">
              <Home className="w-4 h-4 mr-2" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
