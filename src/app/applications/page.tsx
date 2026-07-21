import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import { getAllIndustries } from '@/data/industries';
import { getCategoryById } from '@/data/chemicals';
import { ArrowRight, Factory } from 'lucide-react';
import React from 'react';

export default function ApplicationsPage() {
  const industries = getAllIndustries();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-charcoal">
      <Navbar />

      <main className="flex-grow">
        <SubpageHero 
          title="Applications"
          subtitle="Specialty chemical solutions designed for industry-specific manufacturing challenges."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Applications', href: '/applications' }
          ]}
        />

        {/* Industries Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {industries.map((industry) => (
                <div
                  key={industry.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                >
                  <div className="p-8 border-b border-gray-100 flex-grow space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-brand-blue-light/10 flex items-center justify-center flex-shrink-0">
                        <Factory className="w-6 h-6 text-brand-blue-light" />
                      </div>
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-charcoal">
                        {industry.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-base leading-relaxed">
                      {industry.description}
                    </p>

                    <div>
                      <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-blue-light mb-3">
                        Primary Use Cases
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {industry.useCases.map((useCase, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full border border-gray-200"
                          >
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions / Relevant Chemicals preview */}
                  <div className="bg-gray-50/50 p-6 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-4">
                    <Link
                      href={`/applications/${industry.id}`}
                      className="inline-flex items-center space-x-2 text-brand-blue-light font-bold text-sm uppercase tracking-wider hover:text-brand-blue transition-colors group"
                    >
                      <span>Explore Solutions</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
