'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import ScrollPop from './ScrollPop';
import { Award, Target, Users, MapPin } from 'lucide-react';

const STATS = [
  { label: 'Years of Experience', value: 21, suffix: '+', icon: Award },
  { label: 'Delivered Annually', value: 35000, suffix: '+ MT', icon: Target },
  { label: 'Customers Served', value: 600, suffix: '+', icon: Users },
  { label: 'Supply & Delivery', value: 100, suffix: '', icon: MapPin, textValue: 'PAN India' },
];

export default function AboutSection() {
  const [counts, setCounts] = useState(STATS.map(() => 0));
  const [isInView, setIsInView] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
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
    <>
      {/* 1. Narrative Section */}
      <ScrollPop>
        <section className="py-32 lg:py-28 bg-[#E1EDFA] border-b border-gray-100 snap-align-start" id="about">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

              {/* Left: Image Block */}
              <div className="lg:col-span-6 relative w-full h-[300px] lg:h-[480px] overflow-hidden bg-charcoal rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.08)]">
                <Image
                  src="/images/about_polymer_facility.png"
                  alt="Polymer processing facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover zoom-on-hover"
                  priority
                />
              </div>

              {/* Right: Content Block wrapped in a styled card */}
              <div className="lg:col-span-6 bg-white border border-[#C4DBF5] border-l-4 border-l-brand-blue p-8 lg:p-10 rounded-2xl flex flex-col justify-center h-auto lg:h-[480px] shadow-[0_10px_25px_rgba(0,0,0,0.08)] relative overflow-hidden">
                {/* Subtle decorative background pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,58,110,0.04),transparent_65%)] pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal tracking-tight leading-tight">
                    More than Two Decades of Polymer Sourcing Expertise
                  </h2>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    Established in May 2004, Royale Industries Pvt. Ltd. is a New Delhi-based importer, trader and supplier of polymer and plastic raw materials. With more than two decades of industry experience, we provide customers with access to a wide variety of polymer grades, including grades sourced to meet specific application requirements.
                  </p>
                  <p className="text-gray-600 font-sans leading-relaxed text-sm sm:text-base">
                    Today, Royale Industries delivers approximately 35,000 MT of material annually and serves more than 600 customers across India. Our portfolio supports applications across packaging, healthcare, foaming, BOPP, CPP and automotive segments, backed by responsive logistics and PAN-India delivery capabilities.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </ScrollPop>

      {/* 2. Scroll Snapping Statistics Section */}
      <section ref={statsRef} className="py-20 lg:py-24 bg-brand-blue snap-align-start" id="about-stats">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl flex flex-col justify-center items-center text-center shadow-[0_12px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.22)] transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-3 bg-brand-blue/5 rounded-sm text-brand-blue mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-charcoal tracking-tight whitespace-nowrap">
                      {stat.textValue ? stat.textValue : counts[idx].toLocaleString()}
                      <span className="text-brand-blue">{stat.suffix}</span>
                    </div>
                    <div className="text-sm font-bold text-black uppercase tracking-widest mt-2 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
