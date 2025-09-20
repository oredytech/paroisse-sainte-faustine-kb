
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import HistoriqueSection from '@/components/HistoriqueSection';
import InstitutionsSection from '@/components/InstitutionsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <NewsSection />
      <HistoriqueSection />
      <InstitutionsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
