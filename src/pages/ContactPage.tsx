import { SEO } from '@/components/SEO';
import Layout from '@/components/Layout';
import ContactSection from '@/components/ContactSection';

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact - Paroisse Sainte Faustine de Buturande"
        description="Contactez la Paroisse Sainte Faustine de Buturande. Adresse, téléphone, email, horaires d'accueil et informations sur nos 5 succursales."
        keywords="contact, paroisse, Sainte Faustine, Buturande, adresse, téléphone, email"
      />
      <Layout>
        <main className="pt-16">
          <ContactSection />
        </main>
      </Layout>
    </>
  );
};

export default ContactPage;