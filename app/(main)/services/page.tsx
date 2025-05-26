import ServiceCard from '@components/ServiceCard';
import PageHeader from '@components/PageHeader';
import { getServices } from '@data/services';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        title="Explore Our Technology Solutions"
        subtitle="Discover how we empower businesses with cutting-edge systems and integrations."
      />

      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-sm text-gray-600">
          <nav className="flex items-center space-x-2">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-gray-800 font-medium">Solutions</span>

          </nav>
          <Link href="/services" className="text-blue-600 font-semibold hover:underline max-sm:hidden">
            ← Back Home
          </Link>
        </div>

        <div className="bg-white">

          <div className="max-w-7xl mx-auto p-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                slug={service.slug}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </div>

    </>
  );
}
