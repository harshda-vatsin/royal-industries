'use client';

import { useState, useEffect, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import SectionHeader from '@/components/SectionHeader';
import { Layers, CheckCircle2, Table, Info, FileSpreadsheet } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface SegmentData {
  id: string;
  name: string;
  image: string;
  description: string;
  applications: string[];
  specs: {
    property: string;
    method: string;
    value: string;
  }[];
}

const SEGMENTS: SegmentData[] = [
  {
    id: 'pvc',
    name: 'PVC Granules (Polyvinyl Chloride)',
    image: '/images/about_manufacturing_floor.png',
    description: 'We import and supply high-quality PVC granules in bulk. Sourced from leading international producers, our PVC raw materials include suspension and emulsion grades, delivering outstanding physical properties, thermal stability, and mechanical strength.',
    applications: [
      'Electrical wire and cable insulation cladding',
      'Flexible and rigid profile extrusion',
      'Industrial hoses, agricultural piping, and fittings',
      'Medical tubing and flexible sheeting products',
    ],
    specs: [
      { property: 'Melt Flow Index (190°C/2.16kg)', method: 'ASTM D1238', value: '1.2 - 2.5 g/10 min' },
      { property: 'Density', method: 'ASTM D792', value: '1.35 - 1.45 g/cm³' },
      { property: 'K-Value Range', method: 'ISO 1628-2', value: 'K-57 to K-70' },
      { property: 'Tensile Strength at Yield', method: 'ASTM D638', value: '35 - 45 MPa' },
      { property: 'Hardness (Shore A)', method: 'ASTM D2240', value: '60 - 90' },
    ],
  },
  {
    id: 'pe',
    name: 'PE Granules (Polyethylene)',
    image: '/images/industry_packaging.png',
    description: 'Our Polyethylene (PE) granules portfolio includes premium LDPE, LLDPE, and HDPE grades. These imported materials provide excellent processability, superior tensile strength, chemical resistance, and high puncture resistance for diverse bulk requirements.',
    applications: [
      'High-speed blown and cast packaging films',
      'Industrial stretch wraps, liners, and heavy-duty bags',
      'Blow-molded containers, drums, and hollow parts',
      'Injection-molded housewares, caps, and closures',
    ],
    specs: [
      { property: 'Melt Flow Index (190°C/2.16kg)', method: 'ASTM D1238', value: '0.8 - 4.0 g/10 min' },
      { property: 'Density Range', method: 'ASTM D792', value: '0.918 - 0.965 g/cm³' },
      { property: 'Tensile Strength at Break', method: 'ASTM D638', value: '12 - 28 MPa' },
      { property: 'Elongation at Break', method: 'ASTM D638', value: '500% - 800%' },
      { property: 'Flexural Modulus', method: 'ASTM D790', value: '150 - 1200 MPa' },
    ],
  },
  {
    id: 'eva',
    name: 'EVA Granules (Ethylene-Vinyl Acetate)',
    image: '/images/industry_automotive.png',
    description: 'We import and supply high-grade Ethylene-Vinyl Acetate (EVA) copolymer granules in bulk. Featuring exceptional flexibility, low-temperature toughness, and superior stress-crack resistance, these copolymers are highly sought after by foaming and adhesive manufacturers.',
    applications: [
      'Footwear midsoles, insoles, and outsoles foaming',
      'Expanded foam sheets and protective cushioning pads',
      'Premium hot-melt adhesive formulations',
      'Solar cell encapsulation sheets and technical coatings',
    ],
    specs: [
      { property: 'Melt Flow Index (190°C/2.16kg)', method: 'ASTM D1238', value: '2.0 - 20 g/10 min' },
      { property: 'Density', method: 'ASTM D792', value: '0.920 - 0.950 g/cm³' },
      { property: 'Vinyl Acetate (VA) Content', method: 'FTIR', value: '9% to 28%' },
      { property: 'Tensile Strength at Break', method: 'ASTM D638', value: '10 - 20 MPa' },
      { property: 'Elongation at Break', method: 'ASTM D638', value: '700% - 850%' },
    ],
  },
];

function SegmentsContent() {
  const [activeTab, setActiveTab] = useState('pvc');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && SEGMENTS.some(s => s.id === type)) {
      setActiveTab(type);
      setIsAutoPlaying(false); // Pause auto-rotation if user deep-linked to a specific material
    }
  }, [searchParams]);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      setActiveTab((prev) => {
        const idx = SEGMENTS.findIndex((s) => s.id === prev);
        const nextIdx = (idx + 1) % SEGMENTS.length;
        return SEGMENTS[nextIdx].id;
      });
    }, 5000); // Slow, readable 5-second time lapse

    return () => clearTimeout(timer);
  }, [activeTab, isAutoPlaying]);

  const activeSegment = SEGMENTS.find(s => s.id === activeTab) || SEGMENTS[0];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <SubpageHero
        title="Plastic Raw Materials"
        bgImage="/images/industry_packaging.png"
      />

      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            tag="Technical Specifications"
            title="Typical Properties of Our Granules"
            description="Explore typical specifications for our imported PVC, PE, and EVA granules. Sourced globally, these materials are available in bulk to ensure the best quality and performance."
            lightBg={false}
          />

          {/* Tabbed Navigation */}
          <div 
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="flex flex-wrap justify-center border-b border-gray-200 mb-12 gap-2 sm:gap-0"
          >
            {SEGMENTS.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveTab(s.id);
                  setIsAutoPlaying(false); // Pause auto-rotation on click
                }}
                className={`px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider border-b-2 transition-all duration-200 ${
                  activeTab === s.id
                    ? 'border-brand-red text-brand-red'
                    : 'border-transparent text-gray-400 hover:text-charcoal hover:border-gray-300'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {/* Segment Content Panel */}
          <div 
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
          >
            
            {/* Left: General Info & Applications */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 text-brand-red">
                  <Layers className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">Materials Overview</span>
                </div>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal tracking-tight leading-tight">
                  {activeSegment.name}
                </h2>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans">
                  {activeSegment.description}
                </p>
              </div>

              {/* Applications List */}
              <div className="space-y-4">
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-charcoal uppercase tracking-wider border-b border-gray-100 pb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4.5 h-4.5 text-brand-red" />
                  Core Applications & Bulk Buyers
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSegment.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-brand-red rounded-full mt-2 flex-shrink-0"></span>
                      <span className="leading-relaxed">{app}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Technical Spec Table & Image */}
            <div className="lg:col-span-6 space-y-8">
              
              {/* Aspect Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-charcoal rounded-sm border border-gray-200 shadow-sm">
                <Image
                  src={activeSegment.image}
                  alt={activeSegment.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>

              {/* Technical Specifications Table */}
              <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-hidden">
                <div className="bg-charcoal px-6 py-4 flex justify-between items-center text-white border-b border-charcoal-light">
                  <span className="font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                    <Table className="w-4.5 h-4.5 text-brand-red" />
                    Physical & Mechanical Properties
                  </span>
                  <FileSpreadsheet className="w-4.5 h-4.5 text-gray-500" />
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-lightgrey text-gray-500 border-b border-gray-200">
                        <th className="px-6 py-3 font-semibold uppercase">Property</th>
                        <th className="px-6 py-3 font-semibold uppercase">Test Method</th>
                        <th className="px-6 py-3 font-semibold uppercase text-right">Typical Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-sans text-gray-600">
                      {activeSegment.specs.map((spec, idx) => (
                        <tr key={idx} className="hover:bg-gray-50/50">
                          <td className="px-6 py-3.5 font-semibold text-charcoal">{spec.property}</td>
                          <td className="px-6 py-3.5 text-gray-400">{spec.method}</td>
                          <td className="px-6 py-3.5 text-right font-bold text-brand-red">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-gray-50 px-6 py-3 text-[10px] text-gray-400 leading-normal border-t border-gray-100">
                  * Note: Values shown are typical ranges for our imported polymer grades. Technical Datasheets (TDS) and Material Safety Datasheets (MSDS) are available on request.
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function SegmentsPage() {
  return (
    <Suspense fallback={
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <div className="flex-grow flex items-center justify-center py-40 text-gray-400 font-semibold uppercase tracking-wider font-heading">
          Loading raw material specifications...
        </div>
        <Footer />
      </div>
    }>
      <SegmentsContent />
    </Suspense>
  );
}
