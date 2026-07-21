'use client';

import SectionHeader from './SectionHeader';
import ScrollPop from './ScrollPop';
import { Shield, Globe, Award, Warehouse, Headphones, Zap } from 'lucide-react';

const CARDS = [
  {
    title: 'Immense Sourcing Expertise',
    description: 'Established in May 2004, Royale Industries has spent over 20 years developing a trusted sourcing network of global polymer producers.',
    icon: Award,
  },
  {
    title: 'Bulk Supply Capability',
    description: 'We specialize in bulk shipments, maintaining consistent inventory levels to support uninterrupted operations for our B2B clients.',
    icon: Warehouse,
  },
  {
    title: 'Premium Quality Materials',
    description: 'We supply a wide variety of polymer grades from leading global producers, ensuring standard supplier documentation and traceabilities.',
    icon: Shield,
  },
  {
    title: 'Custom Grade Sourcing',
    description: 'Can\'t find the exact grade? Our extensive network allows us to identify and source customized grades tailored to specific processing requirements.',
    icon: Globe,
  },
  {
    title: 'Global Sourcing & Fast Delivery',
    description: 'We import from almost every part of the world and coordinate nationwide transport, ensuring contingency delivery within 24 hours to support your operations.',
    icon: Zap,
  },
  {
    title: 'Responsive B2B Service',
    description: 'Driven by a team of approximately 15 employees, we offer personal support, technical understanding, and fast RFQ turnarounds.',
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <ScrollPop>
    <section className="py-24 lg:py-16 bg-white border-b border-gray-100 snap-align-start" id="why-choose-us">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <SectionHeader
          tag="Why Partner With Us"
          title="The Royale Industry Advantage"
          description="Industrial buyers and manufacturing firms partner with Royale Industries for our sourcing expertise, bulk supply consistency, and PAN India delivery support."
          lightBg={false}
        />

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group bg-white border border-gray-200 p-8 rounded-sm shadow-sm hover:shadow-md hover:border-brand-blue transition-all duration-300 flex flex-col space-y-4"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-sm bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
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
    </ScrollPop>
  );
}
