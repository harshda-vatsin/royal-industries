'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import ScrollPop from './ScrollPop';
import { ArrowRight } from 'lucide-react';

const MATERIALS = [
  {
    id: 'pvc',
    title: 'PVC Resins',
    description: 'Polyvinyl Chloride raw materials sourced from leading global producers. Offering high-quality suspension and emulsion grades suitable for electrical wire cabling, industrial pipes, and flexible profile extrusion.',
    image: '/images/about_manufacturing_floor.png',
    link: '/segments?type=pvc',
  },
  {
    id: 'pe',
    title: 'PE Granules',
    description: 'Polyethylene granules including LDPE, LLDPE, and HDPE grades. These materials feature high chemical resistance, excellent puncture strength, and structural versatility, making them ideal for packaging films and molding.',
    image: '/images/industry_packaging.png',
    link: '/segments?type=pe',
  },
  {
    id: 'eva',
    title: 'EVA Granules',
    description: 'Ethylene-Vinyl Acetate copolymers offering superior flexibility, low-temperature toughness, and stress-crack resistance. Extremely well-suited for footwear midsoles, foam insulation sheets, and hot-melt adhesives.',
    image: '/images/industry_automotive.png',
    link: '/segments?type=eva',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Polymers',
    description: 'Medical-grade polymer resins and copolymers sourced for pharmaceutical and healthcare manufacturing. Our grades support IV bottles, surgical mask meltblown filters, CPAP components, and sterilizable device housings.',
    image: '/images/industry_healthcare.png',
    link: '/segments?type=healthcare',
  },
];

export default function IndustriesSection() {
  return (
    <ScrollPop>
      <section className="py-24 lg:py-16 bg-lightgrey-light border-b border-gray-100 snap-align-start" id="materials">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">

          <SectionHeader
            tag="Our Portfolio"
            title="Polymer & Raw Materials We Supply"
            description="Sourcing and distributing a wide variety of premium polymer categories and custom grades in bulk from established global producers."
            lightBg={true}
          />

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {MATERIALS.map((mat) => (
              <div
                key={mat.id}
                className="group bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal">
                    <Image
                      src={mat.image}
                      alt={`${mat.title} raw materials supply`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover zoom-on-hover"
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-blue group-hover:w-full transition-all duration-300 z-10"></div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-2">
                    <h4 className="font-heading font-extrabold text-lg text-charcoal tracking-tight">
                      {mat.title}
                    </h4>
                    <p className="text-gray-500 font-sans leading-relaxed text-xs text-justify">
                      {mat.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="p-6 pt-0 border-t border-gray-50 mt-auto">
                  <Link
                    href={mat.link}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-blue hover:text-brand-blue-dark group/link pt-4"
                  >
                    <span>Learn Technical Specs</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </ScrollPop>
  );
}
