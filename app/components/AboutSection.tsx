'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="bg-slate-950 pt-24 pb-28 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <Image
          src="/images/about/illustration-blue2.svg"
          alt=""
          width={600}
          height={600}
          className="absolute right-0 top-0 object-cover"
          style={{ height: '600px' }}
        />

        <div className="relative z-50">
          <h1 className="font-heading text-white text-5xl md:text-6xl font-semibold max-w-3xl mb-56">
            We&apos;re a committed collective driving digital transformation across Africa
          </h1>

          <div className="border-b border-slate-400 pb-9 mb-32">
            <div className="bg-slate-950">
              <div className="flex flex-wrap items-stretch -m-4">
                <div className="w-full md:w-1/3 lg:w-1/2 p-4">
                  <div className="border-r border-transparent md:border-white md:border-opacity-10 flex flex-col justify-center h-full">
                    <p className="text-white text-center md:text-left text-opacity-50 mb-2">Sponsored by</p>
                    <p className="text-white text-center md:text-left mx-auto md:mx-0 text-2xl font-semibold max-w-xs">
                      Believe Consortia — Tech Solutions for Impact
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                  <div className="border-r border-transparent md:border-white md:border-opacity-10 flex flex-col justify-center h-full">
                    <p className="text-white text-opacity-50 mb-2 text-center">Team Members</p>
                    <p className="text-white text-5xl font-bold text-center">50+</p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                  <div className="flex flex-col justify-center h-full">
                    <p className="text-white text-opacity-50 mb-2 text-center">Founded in</p>
                    <p className="text-white text-5xl font-bold text-center">2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4 mb-48">
            <div className="w-full lg:w-1/2 p-4">
              <div className="flex flex-col justify-end h-full">
                <p className="text-white text-xl font-medium mb-10">Our Supporters</p>
                <div className="flex flex-wrap gap-8 mb-10">
                  <Image src="/images/logos/believe-logo.svg" alt="Believe Consortia" width={100} height={24} className="h-6 w-auto" />
                  <Image src="/images/logos/karentrust-logo.svg" alt="Karen Community Trust" width={100} height={24} className="h-6 w-auto" />
                  {/* Add more logos as needed */}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-4">
              <h2 className="font-heading text-white text-4xl font-semibold mb-12">Our Story</h2>
              <p className="text-white text-lg max-w-xl mb-8">
                Founded in 2022, the Karen Community Trust was established with a vision to empower underserved communities through digital
                inclusion and skill-building. As a growing initiative, we continue to develop our technical capacity and expand outreach.
              </p>
              <p className="text-white text-lg max-w-xl">
                With strong backing from Believe Consortia, we leverage cutting-edge technology to drive social impact, equip local
                entrepreneurs, and build a digitally fluent workforce across Kenya. Our journey is just beginning — and the future is full of promise.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
