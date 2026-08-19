import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import { getIndustryById, getAllIndustries } from '@/data/industries';
import { getProductById } from '@/data/chemicals';
import { Factory, ArrowRight, Settings, CheckCircle, Mail } from 'lucide-react';
import ContactCTA from '@/components/ContactCTA';

export default async function IndustryPage({ params }: { params: Promise<{ industry: string }> }) {
  const { industry: industryId } = await params;
  const industry = getIndustryById(industryId);
  
  if (!industry) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-charcoal">
      <Navbar />

      <main className="flex-grow">
        <SubpageHero 
          title={industry.name}
          subtitle={industry.description}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Applications', href: '/applications' },
            { label: industry.name, href: `/applications/${industry.id}` }
          ]}
          tags={industry.useCases.slice(0, 4)}
        />

        {/* Content Layout */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content (2/3) */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Overview & Challenges */}
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal tracking-tight">
                  Industry Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  The {industry.name.toLowerCase()} sector demands high-performance polymers and specialty additives to meet stringent safety, regulatory, and mechanical requirements. Royale supplies a comprehensive portfolio of chemicals tailored specifically to enhance production efficiency and end-product quality in these environments.
                </p>
                <div className="bg-brand-soft-bg p-8 rounded-xl border border-brand-blue-light/20">
                  <h3 className="font-heading font-bold text-charcoal mb-4 flex items-center">
                    <Settings className="w-5 h-5 text-brand-blue-light mr-2" />
                    Common Manufacturing Use Cases
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {industry.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 text-brand-blue-light mt-1 mr-2 flex-shrink-0" />
                        <span>{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recommended Chemicals */}
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal tracking-tight">
                  Recommended Chemical Solutions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {industry.relevantChemicalIds.map((chemRef, idx) => {
                    const product = getProductById(chemRef.categoryId, chemRef.productId);
                    if (!product) return null;
                    return (
                      <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col h-full">
                        <div className="flex-grow space-y-3">
                          <h3 className="font-heading font-bold text-lg text-charcoal">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {product.purpose}
                          </p>
                        </div>
                        <Link
                          href={`/chemical-types/${chemRef.categoryId}#${product.id}`}
                          className="mt-6 inline-flex items-center text-brand-blue-light text-sm font-bold uppercase tracking-wider hover:text-brand-blue group transition-colors"
                        >
                          <span>View Product</span>
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sidebar (1/3) */}
            <aside className="space-y-8">
              {/* Contact Inquiry */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 space-y-6">
                <h3 className="font-heading font-bold text-xl text-charcoal tracking-tight">
                  Speak with an Expert
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Need custom formulations or bulk supply coordination for your manufacturing line? Our specialists are ready to help.
                </p>
                <Link
                  href={`/contact?industry=${industry.id}`}
                  className="w-full inline-flex items-center justify-center bg-white border-2 border-brand-blue-light text-brand-blue-light hover:bg-brand-blue-light hover:text-white font-bold text-sm uppercase tracking-wider py-3 rounded-md transition-all shadow-sm"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  <span>Send Inquiry</span>
                </Link>
              </div>
            </aside>
          </div>
        </section>
        
        {/* Bottom CTA */}
        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
}
