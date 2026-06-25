import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import SectionHeader from '@/components/SectionHeader';
import { Target, Eye, ShieldAlert, Warehouse, Award, Beaker } from 'lucide-react';
import Image from 'next/image';

const TIMELINE = [
  {
    year: '2004',
    title: 'Company Foundation',
    description: 'Royale Industries was established in Delhi, Delhi, focusing on high-quality supplying and trading of plastic raw materials including PVC, PE, and EVA granules.',
  },
  {
    year: '2012',
    title: 'Import Sourcing Expansion',
    description: 'Established direct import channels with international petrochemical refineries, expanding our product portfolio to offer certified bulk polymer grades to domestic manufacturers.',
  },
  {
    year: '2019',
    title: 'Delhi Warehouse Optimization',
    description: 'Upgraded our central warehousing hub in Delhi with advanced dry-air ventilation and dust-control systems, preserving imported raw material purity.',
  },
  {
    year: '2026',
    title: 'Polymer Portfolio Diversification',
    description: 'Expanded our bulk supply capabilities, offering specialized high-flexibility EVA, suspension PVC, and multi-grade PE resins to meet modern industrial standards.',
  },
];

const INFRASTRUCTURE = [
  {
    title: 'Global Sourcing Network',
    description: 'Direct procurement pipelines with leading international chemical refineries, ensuring consistent quality and volume availability.',
    icon: SourcingIcon,
  },
  {
    title: 'Delhi Storage Warehouse',
    description: 'A secure, dust-free warehousing facility in Delhi, maintaining strict humidity controls to protect raw material granules from degradation.',
    icon: Warehouse,
  },
  {
    title: 'Quality Verification Station',
    description: 'Rigorous inspection protocols to verify manufacturer Certificates of Analysis (COA) and perform batch audits before dispatch.',
    icon: Beaker,
  },
];

function SourcingIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <SubpageHero
        title="About Our Corporation"
        bgImage="/images/about_manufacturing_floor.png"
      />

      <main className="flex-grow">
        
        {/* Section 1: Vision, Mission, Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Mission */}
              <div className="bg-lightgrey border border-gray-200 p-8 rounded-sm hover:border-brand-red transition-all duration-300 space-y-4">
                <div className="w-12 h-12 bg-brand-red/5 text-brand-red flex items-center justify-center rounded-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">Our Mission</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  To supply and trade high-quality plastic raw materials at competitive bulk pricing, providing Indian manufacturers with a reliable, long-term importing partner.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-lightgrey border border-gray-200 p-8 rounded-sm hover:border-brand-red transition-all duration-300 space-y-4">
                <div className="w-12 h-12 bg-brand-red/5 text-brand-red flex items-center justify-center rounded-sm">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">Our Vision</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  To be recognized as the premier polymer supply hub in Delhi, noted for our sourcing integrity, volume consistency, and contamination-free material warehousing.
                </p>
              </div>

              {/* Values */}
              <div className="bg-lightgrey border border-gray-200 p-8 rounded-sm hover:border-brand-red transition-all duration-300 space-y-4">
                <div className="w-12 h-12 bg-brand-red/5 text-brand-red flex items-center justify-center rounded-sm">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">Our Core Values</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-sans">
                  Honest sourcing, strict batch verification, operational efficiency, and personalized customer relationships driven by our expert team.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Historical Timeline */}
        <section className="py-20 bg-lightgrey-light border-t border-b border-gray-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="Milestones & History"
              title="Our Journey of Trust"
              description="Since 2004, Royale Industries has supplied plastic raw materials to manufacturers in Delhi and across India. Explore our key milestones."
              lightBg={false}
            />

            <div className="relative border-l border-gray-300 ml-4 md:ml-32 space-y-12 max-w-3xl md:mx-auto">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative pl-8 md:pl-12 group">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-white border-2 border-brand-red rounded-full group-hover:bg-brand-red transition-colors duration-200"></div>
                  
                  <div className="hidden md:block absolute -left-28 top-1 font-heading font-extrabold text-lg text-brand-red text-right w-20">
                    {item.year}
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm">
                    <span className="md:hidden block font-heading font-extrabold text-base text-brand-red mb-1">
                      {item.year}
                    </span>
                    <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 3: Specialized Team */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3 block border-l-2 border-brand-red pl-2.5 inline-block">
              Our Staff
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-charcoal tracking-tight leading-tight mb-6">
              A Highly Specialized Team of 2
            </h2>
            <p className="text-gray-600 leading-relaxed font-sans mt-4 text-sm sm:text-base">
              Royale Industries maintains a lean, highly focused team of two polymer supply specialists. This allows us to maintain direct communication channels, eliminating administrative overhead and ensuring our clients receive immediate, personalized service for their bulk raw material orders.
            </p>
          </div>
        </section>

        {/* Section 4: Infrastructure */}
        <section className="py-20 bg-lightgrey border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
              tag="Our Assets"
              title="Supply Infrastructure & Warehousing"
              description="We manage bulk distribution channels based in Delhi, maintaining pristine quality controls and secure logistics."
              lightBg={true}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
              {INFRASTRUCTURE.map((infra, idx) => {
                const Icon = infra.icon;
                return (
                  <div key={idx} className="bg-white border border-gray-200 p-8 rounded-sm shadow-sm space-y-4">
                    <div className="p-3 bg-brand-red/5 text-brand-red rounded-sm inline-block">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">
                      {infra.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">
                      {infra.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
