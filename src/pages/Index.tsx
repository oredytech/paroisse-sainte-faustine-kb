
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import NewsSection from '@/components/NewsSection';
import MediaSection from '@/components/MediaSection';
import CommunitySection from '@/components/CommunitySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <NewsSection />
      <MediaSection />
      <CommunitySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
