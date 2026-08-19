'use client';

import { useState, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import ScrollPop from './ScrollPop';
import { ClipboardList, Search, Users, Globe, Warehouse, Truck } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Requirement Understanding',
    subtitle: 'Client Alignment',
    description: 'We align closely with your team to understand specific polymer material requirements, grade parameters, application parameters, volume needs, and target delivery windows.',
    icon: ClipboardList,
  },
  {
    step: '02',
    title: 'Grade Identification',
    subtitle: 'Expert Sourcing',
    description: 'Using our extensive polymer product database and technical experience, we identify the exact polymer grades that fit your processing machinery and structural parameters.',
    icon: Search,
  },
  {
    step: '03',
    title: 'Commercial Proposal',
    subtitle: 'Wholesale Offer',
    description: 'We submit structured commercial pricing and transport logistics timelines matching your volume forecasts, accompanied by manufacturer Certificate of Analysis certifications.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Global Sourcing & Import',
    subtitle: 'Supply Chain Sourcing',
    description: 'Royale coordinates global purchasing paths, custom clearances, and ocean transport lines to import plastic granules directly from reliable chemical producers.',
    icon: Globe,
  },
  {
    step: '05',
    title: 'Warehousing & Quality',
    subtitle: 'Batch Testing',
    description: 'Imported granules are cataloged and stored inside dry, climate-appropriate regional warehouses. We execute batch number recording and visual inspections for quality security.',
    icon: Warehouse,
  },
  {
    step: '06',
    title: 'Logistics & Delivery',
    subtitle: 'PAN-India Transport',
    description: 'Our logistics fleet coordinates secure regional freight dispatch to deliver raw materials straight to your factory floor, backed by transparent transit tracking.',
    icon: Truck,
  },
];

export default function SupplyWorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % STEPS.length);
    }, 2500);

    return () => clearTimeout(timer);
  }, [activeStep, isAutoPlaying]);

  return (
    <ScrollPop>
    <section className="py-24 lg:py-16 bg-white border-b border-gray-100 snap-align-start" id="workflow">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        
        <SectionHeader
          tag="Our Workflow"
          title="Sourcing & Supply Workflow"
          description="From initial requirement alignment to nationwide B2B delivery, Royale manages a secure, professional procurement process to ensure material consistency."
          lightBg={false}
        />

        {/* Desktop Process Timeline (Horizontal) */}
        <div className="hidden lg:block relative mt-16">
          {/* Connector Line */}
          <div className="absolute top-[48px] left-10 right-10 h-0.5 bg-gray-200 z-0">
            <div
              className="h-full bg-brand-blue transition-all duration-500 ease-out"
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
                        ? 'bg-brand-blue border-brand-blue text-white scale-105 shadow-md'
                        : isPassed
                        ? 'bg-white border-brand-blue text-brand-blue'
                        : 'bg-white border-gray-200 text-gray-400 hover:border-gray-400 hover:text-charcoal'
                    }`}
                    aria-label={`Go to step ${step.step}: ${step.title}`}
                  >
                    <Icon className="w-8 h-8" />
                  </button>
                  
                  <span className={`text-[10px] uppercase font-extrabold tracking-widest mt-4 transition-colors duration-200 ${
                    isActive ? 'text-brand-blue' : 'text-gray-400'
                  }`}>
                    Stage {step.step}
                  </span>
                  
                  <h3 className={`font-heading font-extrabold text-xs text-center tracking-tight mt-1 max-w-[120px] leading-tight ${
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
            className="mt-16 bg-white border border-gray-200 p-10 rounded-sm shadow-sm transition-all duration-300 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8"
          >
            <div className="w-20 h-20 bg-white rounded-sm flex items-center justify-center border border-gray-200 shadow-sm flex-shrink-0 text-brand-blue">
              {(() => {
                const ActiveIcon = STEPS[activeStep].icon;
                return <ActiveIcon className="w-10 h-10" />;
              })()}
            </div>
            <div className="flex-grow space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">
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
                <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 shadow-sm flex items-center justify-center flex-shrink-0 text-brand-blue z-10">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content Panel */}
                <div className="bg-white border border-gray-200 p-6 rounded-sm shadow-sm flex-grow space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">
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
    </ScrollPop>
  );
}
