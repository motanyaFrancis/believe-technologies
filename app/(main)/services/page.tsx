import ServiceCard from '@components/ServiceCard';
import PageHeader from '@components/PageHeader';
import { getServices } from '@data/services';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHeader
        title="Explore Our Technology Solutions"
        subtitle="Discover how we empower businesses with cutting-edge systems and integrations."
      />

      <nav className="bg-white border-b border-gray-200 botton px-6 py-3 max-w-7xl mx-auto flex items-center gap-4 text-sm text-gray-600">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>/</span>
        <span className="font-semibold text-gray-900">Solutions</span>
      </nav>

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
    </>
  );
}
