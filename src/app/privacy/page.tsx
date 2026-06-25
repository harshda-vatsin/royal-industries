import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <SubpageHero
        title="Privacy Policy"
        bgImage="/images/hero_industrial_plant.png"
      />

      <main className="flex-grow py-20 font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            <p className="font-semibold text-charcoal">Effective Date: June 25, 2026</p>
            
            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal tracking-tight pt-4">
              1. Information Collection and Use
            </h2>
            <p>
              Royale Industries collects contact details, corporate designations, and technical specifications submitted via our bulk RFQ forms. This data is utilized solely to process your material requests, formulate supply quotes, and coordinate freight shipments.
            </p>

            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal tracking-tight pt-4">
              2. Data Protection & Chemical Disclosures
            </h2>
            <p>
              We maintain physical, electronic, and procedural safeguards to protect proprietary specifications, volume requirements, and drawings. We do not sell, distribute, or lease corporate data to third-party marketers.
            </p>

            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal tracking-tight pt-4">
              3. Regulatory Compliance
            </h2>
            <p>
              Our data-retention policies conform with international commerce regulations, including REACH and RoHS chemical disclosures, ensuring complete transparency in chemicals and material sourcing records.
            </p>

            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal tracking-tight pt-4">
              4. Contact Us
            </h2>
            <p>
              For inquiries regarding material compliance records or data requests, please contact our Delhi offices at <a href="mailto:info@indiaroyale.com" className="text-brand-red hover:underline font-semibold">info@indiaroyale.com</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
