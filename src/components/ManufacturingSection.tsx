'use client';

import { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import { Database, ShieldCheck, Ship, Warehouse, Package, Truck } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Global Sourcing',
    subtitle: 'Premium Petrochemicals',
    description: 'We source high-grade PVC, PE, and EVA raw materials from Fortune 500 petrochemical manufacturers across East Asia, Europe, and the Middle East, ensuring superior product baselines.',
    icon: Database,
  },
  {
    step: '02',
    title: 'Quality Verification',
    subtitle: 'Strict Inspection',
    description: 'We require a Certificate of Analysis (COA) for every polymer batch and run independent inspections to ensure physical and chemical properties conform to international standards.',
    icon: ShieldCheck,
  },
  {
    step: '03',
    title: 'Import & Customs',
    subtitle: 'Logistics Coordination',
    description: 'Our experienced logistics channels manage container shipping, import documentation, and fast customs clearances at Indian ports to prevent supply chain bottlenecks.',
    icon: Ship,
  },
  {
    step: '04',
    title: 'Delhi Warehousing',
    subtitle: 'Central Hub Storage',
    description: 'Bulk materials are stored in our secure, dry, and dust-free warehouse in Delhi, maintaining product integrity and preserving raw material quality.',
    icon: Warehouse,
  },
  {
    step: '05',
    title: 'Bulk Packaging',
    subtitle: 'Secure Dispatch',
    description: 'Resins are dispatched in heavy-duty, moisture-proof, industrial bags and securely palletized to guarantee zero contamination or moisture absorption during local transport.',
    icon: Package,
  },
  {
    step: '06',
    title: 'Direct Delivery',
    subtitle: 'On-Time Supply',
    description: 'We coordinate direct fleet delivery to manufacturing facilities in Delhi and across India, ensuring consistent, long-term supply cycles for our bulk partners.',
    icon: Truck,
  },
];

export default function ManufacturingSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 4500); // Elegant, slow 4.5-second time lapse

    return () => clearTimeout(timer);
  }, [activeStep, isAutoPlaying]);

  return (
    <section className="py-24 bg-white border-b border-gray-100" id="workflow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          tag="Our Workflow"
          title="Supply Chain & Import Sourcing Workflow"
          description="From global petrochemical sourcing to local bulk delivery in Delhi, India Royale Industries manages a secure, professional supply chain to ensure product quality."
          lightBg={false}
        />

        {/* Desktop Process Timeline (Horizontal) */}
        <div className="hidden lg:block relative mt-16">
          {/* Connector Line */}
          <div className="absolute top-[48px] left-10 right-10 h-0.5 bg-gray-200 z-0">
            <div
              className="h-full bg-brand-red transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Stepper Buttons */}
          <div 
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="grid grid-cols-6 relative z-10"
          >
            {STEPS.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              const isPassed = activeStep > idx;

              return (
                <div key={idx} className="flex flex-col items-center group">
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`w-24 h-24 rounded-full flex items-center justify-center border-2 shadow-sm transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-red border-brand-red text-white scale-105 shadow-md'
                        : isPassed
                        ? 'bg-white border-brand-red text-brand-red'
                        : 'bg-white border-gray-200 text-gray-400 hover:border-gray-400 hover:text-charcoal'
                    }`}
                    aria-label={`Go to step ${step.step}: ${step.title}`}
                  >
                    <Icon className="w-8 h-8" />
                  </button>
                  
                  <span className={`text-[10px] uppercase font-extrabold tracking-widest mt-4 transition-colors duration-200 ${
                    isActive ? 'text-brand-red' : 'text-gray-400'
                  }`}>
                    Stage {step.step}
                  </span>
                  
                  <h3 className={`font-heading font-extrabold text-sm text-center tracking-tight mt-1 max-w-[120px] leading-tight ${
                    isActive ? 'text-charcoal' : 'text-gray-500 group-hover:text-charcoal'
                  }`}>
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>

          {/* Active Step Details Panel */}
          <div 
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="mt-16 bg-lightgrey border border-gray-200 p-10 rounded-sm shadow-sm transition-all duration-300 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-20 h-20 bg-white rounded-sm flex items-center justify-center border border-gray-200 shadow-sm flex-shrink-0 text-brand-red">
              {(() => {
                const ActiveIcon = STEPS[activeStep].icon;
                return <ActiveIcon className="w-10 h-10" />;
              })()}
            </div>
            <div className="flex-grow space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Stage {STEPS[activeStep].step}
                </span>
                <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                  {STEPS[activeStep].subtitle}
                </span>
              </div>
              <h4 className="font-heading font-extrabold text-xl text-charcoal tracking-tight">
                {STEPS[activeStep].title}
              </h4>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                {STEPS[activeStep].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden mt-12 space-y-6 relative before:absolute before:inset-y-0 before:left-[27px] before:w-0.5 before:bg-gray-200">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex gap-6 relative">
                
                {/* Vertical Step Node */}
                <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0 text-brand-red z-10">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content Panel */}
                <div className="bg-lightgrey-light border border-gray-200 p-6 rounded-sm shadow-sm flex-grow space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">
                      Stage {step.step}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      {step.subtitle}
                    </span>
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-charcoal tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
                    {step.description}
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
