import { getServiceBySlug } from '@data/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params;
  const service = await getServiceBySlug(awaitedParams.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'No matching service was found.',
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const awaitedParams = await params;
  const service = await getServiceBySlug(awaitedParams.slug);

  if (!service) return notFound();

  return (
    <div className="bg-gray-50">
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
        <Link href="/services" className="text-blue-600 font-semibold hover:underline max-sm:hidden">
          ← Back to Solutions
        </Link>
      </div>

      <section className="py-10 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="mt-4 text-xl leading-relaxed text-gray-600">
              {service.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
            {service.features.map(({ title, description }, i) => (
              <div key={i} className="transition-all duration-200 bg-white hover:shadow-xl rounded-lg p-6 flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-black">{title}</h3>
                  <p className="mt-1 text-base text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
