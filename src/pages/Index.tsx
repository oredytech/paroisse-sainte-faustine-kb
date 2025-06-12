
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewsSection from '@/components/NewsSection';
import VaticanNewsSection from '@/components/VaticanNewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <NewsSection />
      <VaticanNewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
