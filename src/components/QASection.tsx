'use client';

import Image from 'next/image';
import SectionHeader from './SectionHeader';
import { Award, ShieldCheck, CheckCircle2, ClipboardCheck } from 'lucide-react';

const STANDARDS = [
  {
    id: 'certified-sourcing',
    title: 'Certified Global Producers',
    authority: 'Manufacturer Audits',
    description: 'We source PVC, PE, and EVA granules only from petrochemical giants with ISO 9001 and ISO 14001 certifications.',
  },
  {
    id: 'coa-verification',
    title: 'COA Verification',
    authority: 'Certificate of Analysis',
    description: 'Every shipment is accompanied by a manufacturer Certificate of Analysis (COA) to guarantee physical, thermal, and mechanical consistency.',
  },
  {
    id: 'compliance-standards',
    title: 'REACH & RoHS Compliance',
    authority: 'Chemical Regulatory Safety',
    description: 'We ensure that imported polymer grades strictly comply with chemical safety regulations, guaranteeing they are free from restricted substances.',
  },
  {
    id: 'warehouse-control',
    title: 'Contamination-Free Storage',
    authority: 'Delhi Warehouse Protocols',
    description: 'Our storage facilities maintain dry, dust-free warehousing environments to prevent polymer degradation and moisture absorption.',
  },
];

const TESTS = [
  'Melt Flow Index (MFI) Checks',
  'Density & Specific Gravity',
  'VA Content Verification (EVA)',
  'K-Value Calibration (PVC)',
  'Moisture & Volatiles Content',
  'Contamination Batch Auditing',
];

export default function QASection() {
  return (
    <section className="py-24 bg-lightgrey border-b border-gray-200" id="quality">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="Zero-Defect Commitment"
          title="Quality Assurance & Sourcing Standards"
          description="As a trusted importer and supplier, Royale Industries ensures that every shipment of PVC, PE, and EVA granules meets strict quality controls and chemical safety standards."
          lightBg={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-12">
          
          {/* Left: Sourcing Cards */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-heading font-extrabold text-xl text-charcoal tracking-tight mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-red" />
              Sourcing & Warehousing Standards
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {STANDARDS.map((std) => (
                <div
                  key={std.id}
                  className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:border-brand-red transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-extrabold text-base text-charcoal tracking-tight">
                      {std.title}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                  </div>
                  <div className="text-[10px] uppercase font-bold text-brand-red tracking-wider">
                    {std.authority}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans">
                    {std.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image & Test List */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group">
              <div className="absolute -top-3 -right-3 w-full h-full border-2 border-brand-red z-0 rounded-sm"></div>
              <div className="relative z-10 overflow-hidden bg-charcoal aspect-[4/3] shadow-md rounded-sm border border-gray-200">
                <Image
                  src="/images/quality_assurance_lab.png"
                  alt="Royale Industries material quality control"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Quality Checks List */}
            <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm space-y-4">
              <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-charcoal border-b border-gray-100 pb-2.5 flex items-center gap-2">
                <ClipboardCheck className="w-4.5 h-4.5 text-brand-red" />
                Verified Sourcing Audit Checkpoints
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TESTS.map((test, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-brand-red flex-shrink-0" />
                    <span className="leading-normal">{test}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
