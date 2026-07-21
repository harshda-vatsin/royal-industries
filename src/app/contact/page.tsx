import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import RFQSection from '@/components/RFQSection';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <SubpageHero
        title="Contact & RFQ Center"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' }
        ]}
      />

      <main className="flex-grow">
        <RFQSection />
      </main>

      <Footer />
    </div>
  );
}
