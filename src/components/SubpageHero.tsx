'use client';

import Link from 'next/link';

interface SubpageHeroProps {
  title: string;
  parentLink?: { name: string; href: string };
  bgImage?: string;
}

export default function SubpageHero({
  title,
  parentLink = { name: 'Home', href: '/' },
  bgImage = '/images/hero_industrial_plant.png',
}: SubpageHeroProps) {
  return (
    <div className="relative w-full h-60 bg-charcoal flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('${bgImage}')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/60 z-0" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-5 z-0"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="space-y-3">
          
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400">
            <Link href={parentLink.href} className="hover:text-brand-red transition-colors">
              {parentLink.name}
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-brand-red">{title}</span>
          </div>

          {/* Title */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-none">
            {title}
          </h1>

          <div className="w-12 h-1 bg-brand-red"></div>

        </div>
      </div>

      {/* Bottom border line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
    </div>
  );
}
