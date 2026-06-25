import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import IndustriesSection from '@/components/IndustriesSection';
import ProductsSection from '@/components/ProductsSection';
import ManufacturingSection from '@/components/ManufacturingSection';
import QASection from '@/components/QASection';
import WhyChooseUs from '@/components/WhyChooseUs';
import RFQSection from '@/components/RFQSection';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header & Navigation */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. About Royale Section */}
        <AboutSection />

        {/* 4. Materials We Supply Cards */}
        <IndustriesSection />

        {/* 5. Material Details Showcase */}
        <ProductsSection />

        {/* 6. Sourcing & Supply Workflow */}
        <ManufacturingSection />

        {/* 7. Quality & Sourcing Standards */}
        <QASection />

        {/* 8. Why Choose Royale */}
        <WhyChooseUs />

        {/* 9. RFQ Form Section */}
        <RFQSection />

        {/* 10. Contact CTA */}
        <ContactCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
