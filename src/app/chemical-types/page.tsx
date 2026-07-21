import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import { getAllCategories } from '@/data/chemicals';
import { Layers, Box, Heart, Cloud, Film, FileText, ArrowRight } from 'lucide-react';
import React from 'react';

const iconMap: Record<string, React.ReactNode> = {
  layers: <Layers className="w-8 h-8 text-brand-blue-light" />,
  box: <Box className="w-8 h-8 text-brand-blue-light" />,
  heart: <Heart className="w-8 h-8 text-brand-blue-light" />,
  cloud: <Cloud className="w-8 h-8 text-brand-blue-light" />,
  film: <Film className="w-8 h-8 text-brand-blue-light" />,
  file: <FileText className="w-8 h-8 text-brand-blue-light" />,
};

export default function ChemicalTypesPage() {
  const categories = getAllCategories();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-charcoal">
      <Navbar />

      <main className="flex-grow">
        <SubpageHero 
          title="Chemical Types"
          subtitle="High-performance specialty chemicals engineered for packaging, healthcare, coatings, foaming, and polymer applications."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Chemical Types', href: '/chemical-types' }
          ]}
        />

        {/* Categories Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link
                  href={`/chemical-types/${category.id}`}
                  key={category.id}
                  className="group block bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md hover:border-brand-blue-light transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-brand-blue-light/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue-light/20 transition-colors">
                      {iconMap[category.iconType] || <Layers className="w-8 h-8 text-brand-blue-light" />}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-charcoal">
                        {category.name}
                      </h3>
                      <p className="text-sm font-semibold text-brand-blue-light uppercase tracking-wider mt-1">
                        {category.products.length} Products
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 min-h-[4rem]">
                    {category.description}
                  </p>
                  <div className="flex items-center text-brand-blue-light font-bold text-sm uppercase tracking-wider group-hover:text-brand-blue transition-colors">
                    <span>View Chemicals</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
