'use client';

import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgIllustration?: string;
}

export default function PageHeader({ title, subtitle, bgIllustration = '/images/about/illustration-blue2.svg' }: PageHeaderProps) {
  return (
    <section className="bg-slate-950 pt-24 pb-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {bgIllustration && (
          <Image
            src={bgIllustration}
            alt="Background Illustration"
            width={600}
            height={600}
            className="absolute right-0 top-0 object-cover"
            style={{ height: '600px' }}
          />
        )}

        <div className="relative z-10 mb-56 max-md:32 max-sm:mb-24">
          <h1 className="font-heading text-white text-5xl md:text-6xl font-normal max-w-3xl mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white text-opacity-70 text-lg max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
