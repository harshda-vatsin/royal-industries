'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
import ScrollPop from './ScrollPop';
import { ArrowRight, FileDown, Layers, Activity, ShieldAlert } from 'lucide-react';

const PRODUCTS = [
  {
    id: 'pvc-granules',
    name: 'PVC Granules (Polyvinyl Chloride)',
    tagline: 'High-purity suspension & compounding grades.',
    description: 'We import and supply premium Polyvinyl Chloride (PVC) granules in bulk. Sourced from leading petrochemical producers, our PVC grades offer exceptional chemical resistance, high mechanical strength, and physical batch consistency.',
    features: [
      'Suspension grades (K-values: K-57, K-67, K-70)',
      'Emulsion & compounding grades for flexible and rigid designs',
      'Ideal for wire cabling, industrial hose, and profiles',
      'Direct import distribution with manufacturer Certificate of Analysis (COA) verification',
    ],
    image: '/pvc_resins.jpg',
    icon: Layers,
    technicalLink: '/segments?type=pvc',
  },
  {
    id: 'pe-granules',
    name: 'PE Granules (Polyethylene)',
    tagline: 'LDPE, LLDPE, and HDPE polymer raw materials.',
    description: 'Our Polyethylene (PE) raw materials support bulk manufacturing operations across packing, molding, and industrial extrusion. We provide consistent access to prime grade granules sourced to meet precise melt flow rate and density parameters.',
    features: [
      'LDPE (Low Density Polyethylene) for high-clarity films & packaging',
      'LLDPE (Linear Low Density Polyethylene) for strong stretch/cling films',
      'HDPE (High Density Polyethylene) for rigid blow molding and pipes',
      'Curated wholesale supply paths matching international quality standards',
    ],
    image: '/pe_granules.jpg',
    icon: Activity,
    technicalLink: '/segments?type=pe',
  },
  {
    id: 'eva-granules',
    name: 'EVA Granules (Ethylene-Vinyl Acetate)',
    tagline: 'Premium copolymers for flexible & foaming segments.',
    description: 'Specialty Ethylene-Vinyl Acetate (EVA) granules curated for manufacturing segments that require high flexibility, low-temperature toughness, and stress-crack resistance. Ideal for footwear, foam sheets, and adhesive sectors.',
    features: [
      'VA content grades tailored to specific processing requirements',
      'Excellent elasticity and stress-crack resistance properties',
      'Perfect for shoes midsoles, toys, insulation sheets, and solar encapsulation',
      'PAN India transport logistics and bulk warehousing support',
    ],
    image: '/eva_granules.webp',
    icon: ShieldAlert,
    technicalLink: '/segments?type=eva',
  },
];

export default function ProductsSection() {
  return (
    <ScrollPop>
    <section className="py-24 lg:py-16 bg-lightgrey-light border-b border-gray-200 snap-align-start" id="products">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <SectionHeader
          tag="Material Portfolio"
          title="Imported Bulk Polymer Raw Materials"
          description="Sourcing premium PVC, PE, and EVA granules in bulk from established global producers. We guarantee batch consistency, competitive wholesale pricing, and verified manufacturer certification support."
          lightBg={true}
        />

        {/* Alternating Layout */}
        <div className="space-y-24 mt-12 lg:space-y-16">
          {PRODUCTS.map((prod, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={prod.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative group`}>
                  <div className="absolute -inset-2 bg-gradient-to-r from-brand-blue/10 to-charcoal/10 rounded-sm blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative overflow-hidden bg-charcoal aspect-[4/3] rounded-sm border border-gray-200/60 shadow-md">
                    <Image
                      src={prod.image}
                      alt={`${prod.name} polymer raw materials supply`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover zoom-on-hover"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} flex flex-col space-y-5`}>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="p-2 bg-brand-blue/5 rounded-sm text-brand-blue">
                        <prod.icon className="w-5 h-5" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        {prod.tagline}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl text-charcoal tracking-tight">
                      {prod.name}
                    </h3>
                    <p className="text-gray-500 font-sans leading-relaxed text-xs text-justify">
                      {prod.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-2.5 pt-2">
                    {prod.features.map((feat, fidx) => (
                      <li key={fidx} className="flex items-start space-x-2.5 text-xs text-gray-600 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 flex-shrink-0"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Links */}
                  <div className="pt-4 flex flex-wrap gap-4 items-center">
                    <Link
                      href={prod.technicalLink}
                      className="inline-flex items-center space-x-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-sm shadow-sm transition-all duration-200"
                    >
                      <span>View Technical Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="/contact?rfq=true"
                      className="inline-flex items-center space-x-2 border border-gray-300 hover:border-brand-blue text-charcoal hover:text-brand-blue text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm transition-all"
                    >
                      <FileDown className="w-4 h-4 text-gray-400 group-hover:text-brand-blue" />
                      <span>Request Material TDS</span>
                    </a>
                  </div>

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
