'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import { ArrowRight } from 'lucide-react';

const MATERIALS = [
  {
    id: 'pvc',
    title: 'PVC Granules',
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
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white border-b border-gray-100" id="materials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="Our Portfolio"
          title="Plastic Raw Materials We Supply"
          description="Buy premium-grade PVC, PE, and EVA granules in bulk from India Royale Industries for the best quality products and service."
          lightBg={false}
        />

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 max-w-5xl mx-auto">
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover zoom-on-hover"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-red group-hover:w-full transition-all duration-300 z-10"></div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-3">
                  <h3 className="font-heading font-extrabold text-lg text-charcoal tracking-tight group-hover:text-brand-red transition-colors duration-200">
                    {mat.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans line-clamp-3">
                    {mat.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0 border-t border-gray-50 mt-auto">
                <Link
                  href={mat.link}
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-red hover:text-brand-red-dark group/link pt-4"
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
  );
}
