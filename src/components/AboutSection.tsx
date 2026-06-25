'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Award, Target, Users } from 'lucide-react';

const STATS = [
  { label: 'Years of Expertise', value: 22, suffix: '', icon: Award },
  { label: 'Core Material Classes', value: 3, suffix: '+', icon: Target },
  { label: 'Team Specialists', value: 2, suffix: '', icon: Users },
];

export default function AboutSection() {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const duration = 1000;
    const steps = 20;
    const stepTime = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCounts(
        STATS.map((stat) => {
          const progress = currentStep / steps;
          return Math.min(Math.floor(stat.value * progress), stat.value);
        })
      );

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={sectionRef} className="py-24 bg-white border-b border-gray-100" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Image Block */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-red z-0 rounded-sm"></div>
            <div className="relative z-10 overflow-hidden bg-charcoal aspect-[4/5] shadow-xl rounded-sm border border-gray-100">
              <Image
                src="/images/about_manufacturing_floor.png"
                alt="Royale Industries warehouse operations"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover zoom-on-hover"
                priority
              />
            </div>
            
            {/* Experience Tag overlay */}
            <div className="absolute bottom-6 right-6 bg-brand-red text-white p-6 z-20 shadow-lg rounded-sm max-w-[200px]">
              <span className="block font-heading font-extrabold text-3xl tracking-tight leading-none mb-1">2004</span>
              <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-200">Established & Supplying Since</span>
            </div>
          </div>

          {/* Right: Content Block */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red block border-l-2 border-brand-red pl-2.5">
                Corporate Profile
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
                Immense Expertise in Plastic Raw Materials
              </h2>
              <p className="text-gray-500 font-sans leading-relaxed text-base">
                Established in 2004, Royale Industries has gained immense expertise in supplying and trading high-quality plastic raw materials: PVC granules, PE granules, EVA granules, and more. Located in Delhi, Delhi, we are recognized as one of the leading sellers of listed polymer products.
              </p>
              <p className="text-gray-500 font-sans leading-relaxed text-base">
                Our business operates as a trusted Importer and Supplier, focused on delivering the best quality products and services to manufacturers who buy plastic raw materials in bulk. With a specialized team of two industry experts, we provide reliable, personalized, and efficient long-term supply partnerships.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-gray-100">
              {STATS.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-lightgrey-light border border-gray-200/60 p-5 rounded-sm flex flex-col justify-center items-center text-center">
                    <div className="p-2 bg-brand-red/5 rounded-sm text-brand-red mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-heading font-extrabold text-xl sm:text-2xl text-charcoal tracking-tight">
                        {counts[idx]}
                        <span className="text-brand-red">{stat.suffix}</span>
                      </div>
                      <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Delhi Base Card */}
              <div className="bg-lightgrey-light border border-gray-200/60 p-5 rounded-sm flex flex-col justify-center items-center text-center">
                <div className="p-2 bg-brand-red/5 rounded-sm text-brand-red mb-3">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="font-heading font-extrabold text-base sm:text-lg text-charcoal tracking-tight">
                    Delhi, DL
                  </div>
                  <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mt-1 leading-tight">
                    Corporate Hub
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-brand-red hover:text-brand-red-dark text-xs sm:text-sm font-bold uppercase tracking-widest group"
              >
                <span>Read Our Corporate Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
