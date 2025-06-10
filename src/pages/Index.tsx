
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';
import VaticanNewsSection from '@/components/VaticanNewsSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <NewsSection />
      <VaticanNewsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
