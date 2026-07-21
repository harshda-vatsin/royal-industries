'use client';

import Link from 'next/link';
import { Hexagon, Share2, Activity, ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface SubpageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  tags?: string[];
  bgImage?: string;
}

export default function SubpageHero({
  title,
  subtitle,
  breadcrumbs = [],
  tags = [],
  bgImage,
}: SubpageHeroProps) {
  return (
    <div 
      className="relative w-full min-h-[340px] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #132235 0%, #18324D 40%, #1E5FAF 100%)'
      }}
    >
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 animate-fade-in">
        {/* Soft Radial Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue-light/30 rounded-full blur-[100px] -translate-y-1/4 translate-x-1/4" />
        
        {/* Hexagon Pattern Placeholder (CSS Grid) */}
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0' stroke='%23ffffff' stroke-width='1' stroke-opacity='0.15'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 100px'
          }}
        />

        {/* Abstract lines */}
        <div className="absolute inset-0 border-t border-white/5 top-1/3 w-full" />
        <div className="absolute inset-0 border-t border-white/5 top-2/3 w-full" />
      </div>

      {/* Desktop Chemical Illustration */}
      <div className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 z-0 opacity-10 space-x-16 pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}>
        <Hexagon className="w-48 h-48 text-white rotate-12" strokeWidth={0.5} />
        <Activity className="w-32 h-32 text-white -rotate-12 absolute -top-16 -left-20" strokeWidth={1} />
        <Share2 className="w-40 h-40 text-white absolute top-16 -left-40" strokeWidth={0.5} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-none px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col space-y-5">
          
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-white/60 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              {breadcrumbs.map((crumb, idx) => (
                <div key={idx} className="flex items-center">
                  {idx > 0 && <ChevronRight className="w-3.5 h-3.5 mx-1.5 opacity-50" />}
                  {idx === breadcrumbs.length - 1 ? (
                    <span className="text-white opacity-90">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-brand-interactive transition-colors duration-200">
                      {crumb.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Title */}
          <h1 
            className="text-5xl md:text-6xl font-heading font-extrabold tracking-tighter text-white"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p 
              className="text-xl text-white/85 max-w-[700px] leading-relaxed"
            >
              {subtitle}
            </p>
          )}

          {/* Tags / Chips */}
          {tags.length > 0 && (
            <div 
              className="flex flex-wrap gap-2 pt-2 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              {tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-1.5 bg-white/10 border border-white/20 text-white/90 text-sm font-semibold rounded-full backdrop-blur-sm shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
