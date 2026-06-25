'use client';

import SectionHeader from './SectionHeader';
import { Shield, Globe, Award, Warehouse, Headphones, Zap } from 'lucide-react';

const CARDS = [
  {
    title: 'Immense Sourcing Expertise',
    description: 'Established in 2004, India Royale Industries has spent over 20 years developing a trusted network of global polymer manufacturers.',
    icon: Award,
  },
  {
    title: 'Bulk Supply Capability',
    description: 'We specialize in bulk shipments, maintaining consistent inventory levels to support uninterrupted production runs for our clients.',
    icon: Warehouse,
  },
  {
    title: 'Premium Quality Materials',
    description: 'Every batch of PVC, PE, and EVA granules is imported from leading global producers and verified for physical and chemical consistency.',
    icon: Shield,
  },
  {
    title: 'Strategic Import Sourcing',
    description: 'Our strong relationships with petrochemical refineries allow us to import specialized polymer grades directly to India.',
    icon: Globe,
  },
  {
    title: 'Delhi-Based Supply Hub',
    description: 'Located in Delhi, Delhi, our central storage warehouse ensures efficient local logistics and fast transport coordination.',
    icon: Zap,
  },
  {
    title: 'Specialized Customer Service',
    description: 'With a dedicated expert team of two, we offer highly personalized support, ensuring direct communication and rapid response times.',
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white border-b border-gray-100" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="Why Partner With Us"
          title="The Royale Industry Advantage"
          description="Industrial buyers and manufacturing firms select India Royale Industries for our exceptional service, bulk supply consistency, and verified polymer quality."
          lightBg={false}
        />

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group bg-white border border-gray-200 p-8 rounded-sm shadow-sm hover:shadow-md hover:border-brand-red transition-all duration-300 flex flex-col space-y-4"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-sm bg-brand-red/5 flex items-center justify-center text-brand-red group-hover:bg-brand-red group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
