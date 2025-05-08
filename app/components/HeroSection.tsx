'use client';

import Link from 'next/link';
import Image from 'next/image';
import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-darkBlue-900 via-blue-700 to-blue-400">
      <Navbar />

      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="relative pt-24 pb-14">
          <Image
            className="absolute left-1/2 top-0 transform -translate-x-1/2"
            src="/images/hero/lines.svg"
            alt=""
            width={500}
            height={100}
          />
          <Image
            className="hidden lg:block absolute left-4 xl:left-36 2xl:left-56 3xl:left-96 top-80 xl:top-64"
            src="/images/hero/cursor-blue1.png"
            alt=""
            width={100}
            height={100}
          />
          <Image
            className="hidden lg:block absolute right-4 xl:right-36 2xl:right-56 3xl:right-96 top-80"
            src="/images/hero/cursor-blue2.png"
            alt=""
            width={100}
            height={100}
          />

          <div className="relative z-50">
            <h1 className="font-heading text-white text-center text-4xl sm:text-5xl md:text-7xl font-bold max-w-sm sm:max-w-xl md:max-w-3xl mx-auto mb-6">
              Bookkeeping tools tailored for business owners
            </h1>
            <p className="text-center text-white text-lg mb-12">
              Daily bookkeeping for the modern business owner.
            </p>
            <div className="mb-20 text-center">
              <Link
                href="#"
                className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 opacity-40 group-focus:opacity-20 rounded-full"></div>
                <div className="relative z-50 flex items-center py-2 px-4 bg-white hover:bg-opacity-80 focus:bg-opacity-80 rounded-full transition duration-200">
                  <p className="mr-2 text-darkBlue-900">Get started</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M9.43032 8.28857L9.42602 8.29284L6.45312 11.2657V8.20662V4.7275L8.11268 6.38706L9.42602 7.70039C9.59121 7.86558 9.58501 8.13574 9.43032 8.28857Z"
                      fill="black"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </Link>
            </div>

            <Image
              className="w-full object-cover"
              src="/images/hero/dashboard-blue1.png"
              alt=""
              width={1200}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
