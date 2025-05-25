import services from '@data/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = services.find(s => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {service.image && (
        <div className="relative w-full h-[400px] bg-black/40">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-xl">
              {service.title}
            </h1>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-sm text-gray-600">
        <nav className="flex items-center space-x-2">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:underline">Solutions</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">{service.title}</span>
        </nav>
        <Link href="/services" className="text-blue-600 font-semibold hover:underline">← Back to Solutions</Link>
      </div>

      {/* Service details and features */}
      <section className="py-10 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="mt-4 text-xl leading-relaxed text-gray-600">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
            {service.features.map(({ title, description }, i) => (
              <div key={i} className="transition-all duration-200 bg-white hover:shadow-xl">
                <div className="py-10 px-9">
                  <svg
                    className="w-16 h-16 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <h3 className="mt-8 text-lg font-semibold text-black">{title}</h3>
                  <p className="mt-4 text-base text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
