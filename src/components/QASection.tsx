'use client';

import Image from 'next/image';
import SectionHeader from './SectionHeader';
import ScrollPop from './ScrollPop';
import { Award, ShieldCheck, CheckCircle2, ClipboardCheck } from 'lucide-react';

const STANDARDS = [
  {
    id: 'established-producers',
    title: 'Reputable Producers',
    authority: 'Sourced from Leaders',
    description: 'We source polymer raw materials from established petrochemical producers, such as LyondellBasell, ensuring standardized product baselines and batch consistency.',
  },
  {
    id: 'coa-verification',
    title: 'COA Verification',
    authority: 'Batch-wise Certs',
    description: 'Every consignment is accompanied by manufacturer-issued Certificate of Analysis logs, verifying key mechanical parameters and raw purity properties.',
  },
  {
    id: 'traceability',
    title: 'Batch Traceability',
    authority: 'Complete Audit Log',
    description: 'We track batch numbers and manufacturing dates from overseas container clearance to regional warehouse dispatch, offering transparent sourcing visibility.',
  },
];

const TESTS = [
  'Manufacturer COA Checks',
  'Melt Flow Index Parameter Matching',
  'Batch-to-Batch Traceability Logs',
  'Supplier Document Verification',
  'MSDS & TDS Documentation Coordination',
  'Compliance & Safety Disclosures',
];

export default function QASection() {
  return (
    <ScrollPop>
    <section className="py-24 lg:py-16 bg-lightgrey border-b border-gray-100 snap-align-start" id="quality">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <SectionHeader
          tag="Zero-Defect Commitment"
          title="Quality Assurance & Sourcing Standards"
          description="Royale Industries ensures that bulk polymer raw materials are sourced from reputable producers under strict documentation and batch verification standards."
          lightBg={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch mt-12">

          {/* Left: Sourcing Cards */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="font-heading font-extrabold text-xl text-charcoal tracking-tight mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-blue" />
              Sourcing & Quality Protocols
            </h3>

            <div className="flex-1 grid grid-cols-1 gap-4">
              {STANDARDS.map((std) => (
                <div
                  key={std.id}
                  className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm hover:border-brand-blue transition-all duration-300 space-y-3 flex flex-col justify-center"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-extrabold text-base text-charcoal tracking-tight">
                      {std.title}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div className="text-[10px] uppercase font-bold text-brand-blue tracking-wider">
                    {std.authority}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed font-sans">
                    {std.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Test List & Image */}
          <div className="lg:col-span-5 flex flex-col gap-8">

            {/* Quality Checks List */}
            <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm space-y-4">
              <h4 className="font-heading font-extrabold text-sm uppercase tracking-wider text-charcoal border-b border-gray-100 pb-2.5 flex items-center gap-2">
                <ClipboardCheck className="w-4.5 h-4.5 text-brand-blue" />
                Verified Sourcing Audit Checkpoints
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TESTS.map((test, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <span className="leading-normal">{test}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group overflow-hidden bg-charcoal aspect-[4/3] shadow-md rounded-sm">
              <Image
                src="/polymer_testing.jpg"
                alt="Royale Industries material supply operations"
                fill
                sizes="(max-width: 1024px) 100vw, 35vw"
                className="object-cover zoom-on-hover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
    </ScrollPop>
  );
}
