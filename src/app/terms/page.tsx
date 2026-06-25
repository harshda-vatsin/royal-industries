import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <SubpageHero
        title="Terms of Service"
        bgImage="/images/hero_industrial_plant.png"
      />

      <main className="flex-grow py-20 font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            <p className="font-semibold text-charcoal">Effective Date: June 25, 2026</p>

            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal tracking-tight pt-4">
              1. Commercial Supply Agreements
            </h2>
            <p>
              All quotations, bulk material supply contracts, and shipments coordinated by Royale Industries are subject to our standard commercial terms. Specific billing terms, freight coordinates, and bulk discount schedules are finalized via signed sales agreements.
            </p>

            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal tracking-tight pt-4">
              2. Material Quality and Tolerances
            </h2>
            <p>
              Our polymer raw materials are guaranteed to conform to the physical, thermal, and mechanical ranges specified in our official Technical Datasheets (TDS) and manufacturer specifications. Royale Industries is not liable for material failures resulting from improper processing on the client's manufacturing floor.
            </p>

            <h2 className="font-heading font-extrabold text-lg sm:text-xl text-charcoal tracking-tight pt-4">
              3. Jurisdictional & Dispute Resolution
            </h2>
            <p>
              Any disputes or legal inquiries arising from material supplies are governed by the laws of the National Capital Territory of Delhi, India, under the exclusive jurisdiction of the Delhi courts.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
