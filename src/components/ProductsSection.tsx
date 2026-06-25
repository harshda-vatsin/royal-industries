'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './SectionHeader';
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
      'Direct import distribution with certified compliance records',
    ],
    image: '/images/about_manufacturing_floor.png',
    icon: Layers,
    technicalLink: '/segments?type=pvc',
  },
  {
    id: 'pe-granules',
    name: 'PE Granules (Polyethylene)',
    tagline: 'Blown film, injection, and blow molding grades.',
    description: 'We supply high-grade Polyethylene (PE) granules in bulk, covering Linear Low Density (LLDPE), Low Density (LDPE), and High Density (HDPE) variants. Engineered for optimal processing and mechanical properties.',
    features: [
      'LLDPE film grades with high tensile & puncture strength',
      'LDPE grades for general-purpose flexible film extrusion',
      'HDPE grades for high-stiffness blow and injection molding',
      'FDA-compliant food contact and packaging materials',
    ],
    image: '/images/industry_packaging.png',
    icon: Activity,
    technicalLink: '/segments?type=pe',
  },
  {
    id: 'eva-granules',
    name: 'EVA Granules (Ethylene-Vinyl Acetate)',
    tagline: 'High-flexibility copolymers for footwear and adhesives.',
    description: 'Imported Ethylene-Vinyl Acetate (EVA) copolymer granules designed for advanced foaming and adhesive formulations. Features outstanding stress-crack resistance, low-temperature flexibility, and excellent elasticity.',
    features: [
      'Copolymer grades with varying VA content (9% to 28%)',
      'Exceptional mechanical cushioning and impact absorption',
      'Preferred by footwear midsoles and foam sheet manufacturers',
      'Excellent compatibility for hot-melt adhesive formulations',
    ],
    image: '/images/industry_automotive.png',
    icon: ShieldAlert,
    technicalLink: '/segments?type=eva',
  },
];

export default function ProductsSection() {
  return (
    <section className="py-24 bg-lightgrey-light border-b border-gray-200" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="Material Portfolio"
          title="Imported Bulk Plastic Raw Materials"
          description="Buy premium PVC, PE, and EVA granules in bulk from Royale Industries. We guarantee batch consistency, competitive pricing, and certified quality grades."
          lightBg={true}
        />

        {/* Alternating Layout */}
        <div className="space-y-24 mt-12">
          {PRODUCTS.map((prod, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = prod.icon;
            return (
              <div
                key={prod.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'} relative group`}>
                  <div className="absolute -inset-2 bg-gradient-to-r from-brand-red/10 to-charcoal/10 rounded-sm blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative overflow-hidden aspect-[4/3] bg-charcoal rounded-sm border border-gray-200 shadow-sm">
                    <Image
                      src={prod.image}
                      alt={prod.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover zoom-on-hover"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                  
                  {/* Icon + Title Block */}
                  <div className="space-y-2">
                    <div className="inline-flex items-center space-x-2 text-brand-red">
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-wider">Granules Category {idx + 1}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal tracking-tight leading-tight">
                      {prod.name}
                    </h3>
                    <p className="text-sm font-semibold text-brand-red tracking-wide">
                      {prod.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans">
                    {prod.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-3.5 pt-2">
                    {prod.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-gray-500">
                        <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-gray-100">
                    <Link
                      href={prod.technicalLink}
                      className="inline-flex items-center space-x-2 bg-brand-red hover:bg-brand-red-dark text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm transition-colors shadow-sm"
                    >
                      <span>Technical Specs</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href="/contact?rfq=true"
                      className="inline-flex items-center space-x-2 border border-gray-300 hover:border-brand-red text-charcoal hover:text-brand-red text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm transition-all"
                    >
                      <FileDown className="w-4 h-4 text-gray-400 group-hover:text-brand-red" />
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
  );
}
