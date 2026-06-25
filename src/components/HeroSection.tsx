'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-[37.5rem] overflow-hidden bg-charcoal flex items-center">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero_industrial_plant.png')",
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Grid Pattern Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-5"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          
          {/* Subtitle / Tag */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="h-[2px] w-8 bg-brand-red"></span>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-red">
              Established 2004 • Importer & Supplier
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            Premium Plastic <span className="text-brand-red">Raw Materials</span> in Bulk
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl font-sans font-light">
            Supplying and trading high-quality PVC granules, PE granules, EVA granules, and more. Backed by over 20 years of market expertise and exceptional service based in Delhi, Delhi.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/#rfq"
              className="bg-brand-red hover:bg-brand-red-dark text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center space-x-2 transition-colors duration-200 shadow-lg rounded-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/segments"
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-8 py-4 flex items-center justify-center space-x-2 transition-all duration-200 rounded-sm"
            >
              <FileText className="w-4 h-4 text-gray-300" />
              <span>Explore Materials</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom subtle divider line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
    </section>
  );
}
