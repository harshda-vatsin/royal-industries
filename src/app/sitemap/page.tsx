import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubpageHero from '@/components/SubpageHero';
import { getAllCategories } from '@/data/chemicals';
import { getAllIndustries } from '@/data/industries';
import { ArrowRight } from 'lucide-react';

const SITE_LINKS = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Responsibility & Impact', href: '/responsibility' },
      { label: 'Contact & RFQ', href: '/contact' },
    ],
  },
  {
    section: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
];

export default function SitemapPage() {
  const categories = getAllCategories();
  const industries = getAllIndustries();

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-charcoal">
      <Navbar />

      <main className="flex-grow">
        <SubpageHero
          title="Sitemap"
          subtitle="A complete overview of every page on the Royale website."
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Sitemap', href: '/sitemap' },
          ]}
        />

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
            {SITE_LINKS.map((group) => (
              <div key={group.section} className="space-y-4">
                <h2 className="font-heading font-extrabold text-lg text-charcoal tracking-tight border-b border-gray-100 pb-3">
                  {group.section}
                </h2>
                <ul className="space-y-2.5 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="flex items-center group text-gray-600 hover:text-brand-blue transition-colors">
                        <ArrowRight className="w-3.5 h-3.5 mr-2 text-brand-blue" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-lg text-charcoal tracking-tight border-b border-gray-100 pb-3">
                Products
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/chemical-types" className="flex items-center group text-gray-600 hover:text-brand-blue transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-brand-blue" />
                    <span>All Products</span>
                  </Link>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link href={`/chemical-types/${category.id}`} className="flex items-center group text-gray-600 hover:text-brand-blue transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 mr-2 text-brand-blue" />
                      <span>{category.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-lg text-charcoal tracking-tight border-b border-gray-100 pb-3">
                Applications
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/applications" className="flex items-center group text-gray-600 hover:text-brand-blue transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 mr-2 text-brand-blue" />
                    <span>All Applications</span>
                  </Link>
                </li>
                {industries.map((industry) => (
                  <li key={industry.id}>
                    <Link href={`/applications/${industry.id}`} className="flex items-center group text-gray-600 hover:text-brand-blue transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 mr-2 text-brand-blue" />
                      <span>{industry.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
