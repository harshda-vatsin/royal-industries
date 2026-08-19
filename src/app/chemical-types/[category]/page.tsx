import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import { getCategoryById, getAllCategories } from '@/data/chemicals';
import { getIndustryById } from '@/data/industries';
import { Download, Mail, CheckCircle, ArrowRight } from 'lucide-react';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: categoryId } = await params;
  const category = getCategoryById(categoryId);
  
  if (!category) {
    notFound();
  }

  const allCategories = getAllCategories();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-charcoal">
      <Navbar />

      <main className="flex-grow">
        <SubpageHero 
          title={category.name}
          subtitle={category.description}
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/chemical-types' },
            { label: category.name, href: `/chemical-types/${category.id}` }
          ]}
        />

        {/* Layout with Sidebar */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="w-full flex flex-col lg:flex-row gap-12">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:w-1/4 flex-shrink-0">
              <div className="sticky top-32 space-y-2">
                <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-gray-400 mb-4 px-4">
                  Product Categories
                </h3>
                <div className="flex flex-col space-y-1">
                  {allCategories.map((c) => (
                    <Link
                      key={c.id}
                      href={`/chemical-types/${c.id}`}
                      className={`px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-between group ${
                        c.id === category.id
                          ? 'bg-brand-blue-light text-white shadow-md'
                          : 'text-gray-500 hover:bg-gray-100 hover:text-charcoal'
                      }`}
                    >
                      <span>{c.name}</span>
                      {c.id === category.id && (
                        <ArrowRight className="w-4 h-4 text-white" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* Product Cards */}
            <div className="lg:w-3/4 space-y-8">
              {category.products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 space-y-8"
                >
                  <div className="border-b border-gray-100 pb-6">
                    <h2 className="text-2xl sm:text-3xl font-heading font-bold text-charcoal tracking-tight mb-3">
                      {product.name}
                    </h2>
                    <p className="text-gray-600 text-lg">
                      <span className="font-semibold text-charcoal mr-2">Purpose:</span>
                      {product.purpose}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Benefits & Applications */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-brand-blue-light mb-3">
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-brand-blue-light mt-0.5 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-brand-blue-light mb-3">
                          Specific Applications
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {product.applications.map((app, idx) => (
                            <li key={idx}>{app}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Used In Industries (Two-Way Nav) & Actions */}
                    <div className="space-y-8 bg-gray-50 p-6 rounded-lg border border-gray-100 flex flex-col justify-between">
                      <div>
                        <h4 className="font-heading font-bold text-sm uppercase tracking-widest text-charcoal mb-4">
                          Used In Industries
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.usedInIndustries.map((indId) => {
                            const industry = getIndustryById(indId);
                            if (!industry) return null;
                            return (
                              <Link 
                                key={indId} 
                                href={`/applications/${indId}`}
                                className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 text-xs font-semibold text-gray-600 rounded-full hover:border-brand-blue-light hover:text-brand-blue-light transition-colors shadow-sm"
                              >
                                {industry.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                        <Link 
                          href="/contact?rfq=true" 
                          className="flex-1 inline-flex items-center justify-center space-x-2 bg-brand-blue-light hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-md transition-colors shadow-sm"
                        >
                          <Mail className="w-4 h-4" />
                          <span>Request Quote</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
