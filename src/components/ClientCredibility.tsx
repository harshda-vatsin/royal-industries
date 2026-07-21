'use client';

import React from 'react';
import Image from 'next/image';

const LOGOS = [
  {
    name: 'Maruti',
    logoSrc: '/images/logo_maruti.png'
  },
  {
    name: 'Toyota',
    logoSrc: '/images/logo_toyota.jpg'
  },
  {
    name: 'BMW',
    logoSrc: '/images/logo_bmw.webp'
  },
  {
    name: 'Volvo',
    logoSrc: '/images/logo_volvo.jpg'
  },
  {
    name: 'Henkel',
    logoSrc: '/images/logo_henkel.jpg'
  },
  {
    name: 'Toppan',
    logoSrc: '/images/logo_toppan.png'
  },
  {
    name: 'Jindal Poly Films',
    logoSrc: '/images/logo_jindal.jpg'
  },
  {
    name: 'KLJ',
    logoSrc: '/images/logo_klj.webp'
  }
];

export default function ClientCredibility() {
  return (
    <section className="py-12 bg-brand-blue overflow-hidden snap-align-start" id="credibility">
      
      {/* Infinite Logo Scroll Animation CSS */}
      <style jsx global>{`
        @keyframes scrollTicker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: scrollTicker 15s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-white/70 mb-3 block">
          Enterprise Supply History & Credentials
        </span>
        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
          Supplying Raw Materials For Leading B2B Applications
        </h2>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative w-full overflow-hidden flex items-center py-6 px-4 sm:px-6 mt-8">
        {/* Left/Right blur vignettes for premium visual depth */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-blue via-brand-blue/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-blue via-brand-blue/80 to-transparent z-10 pointer-events-none"></div>

        {/* Double mapped track for infinite loop */}
        <div className="ticker-track flex items-center space-x-8 sm:space-x-12">
          {/* First Set */}
          {LOGOS.map((item, idx) => (
            <div
              key={`set1-${idx}`}
              className="group flex items-center justify-center h-32 w-64 bg-white px-6 flex-shrink-0 relative hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={item.logoSrc}
                alt={item.name}
                fill
                sizes="256px"
                className="object-contain p-2"
              />
            </div>
          ))}
          {/* Second Set (Duplicate) */}
          {LOGOS.map((item, idx) => (
            <div
              key={`set2-${idx}`}
              className="group flex items-center justify-center h-32 w-64 bg-white px-6 flex-shrink-0 relative hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <Image
                src={item.logoSrc}
                alt={item.name}
                fill
                sizes="256px"
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
