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
          <h1 className="font-heading text-white text-5xl md:text-6xl font-semibold max-w-2xl mb-56">
            We&apos;re a passionate team building the future of bookkeeping
          </h1>

          <div className="border-b border-slate-400 pb-9 mb-32">
            <div className="bg-slate-950">
              <div className="flex flex-wrap items-stretch -m-4">
                <div className="w-full md:w-1/3 lg:w-1/2 p-4">
                  <div className="border-r border-transparent md:border-white md:border-opacity-10 flex flex-col justify-center h-full">
                    <p className="text-white text-center md:text-left text-opacity-50 mb-2">Investors</p>
                    <p className="text-white text-center md:text-left mx-auto md:mx-0 text-2xl font-semibold max-w-xs">
                      Funded by industry-leading investors
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                  <div className="border-r border-transparent md:border-white md:border-opacity-10 flex flex-col justify-center h-full">
                    <p className="text-white text-opacity-50 mb-2 text-center">Team members</p>
                    <p className="text-white text-5xl font-bold text-center">110</p>
                  </div>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4 p-4">
                  <div className="flex flex-col justify-center h-full">
                    <p className="text-white text-opacity-50 mb-2 text-center">Founded in</p>
                    <p className="text-white text-5xl font-bold text-center">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap -m-4 mb-48">
            <div className="w-full lg:w-1/2 p-4">
              <div className="flex flex-col justify-end h-full">
                <p className="text-white text-xl font-medium mb-10">Our investors</p>
                <div className="flex flex-wrap gap-8 mb-10">
                  <Image src="/images/logos/aurevo-logo.svg" alt="Aurevo" width={100} height={24} className="h-6 w-auto" />
                  <Image src="/images/logos/syra-logo-light.svg" alt="Syra" width={100} height={24} className="h-6 w-auto" />
                  <Image src="/images/logos/lume-logo.svg" alt="Lume" width={100} height={24} className="h-6 w-auto" />
                </div>
                <div className="flex flex-wrap gap-8">
                  <Image src="/images/logos/acme-logo.svg" alt="Acme" width={100} height={24} className="h-6 w-auto" />
                  <Image src="/images/logos/cronix-logo.svg" alt="Cronix" width={100} height={24} className="h-6 w-auto" />
                  <Image src="/images/logos/axiomatic-logo.svg" alt="Axiomatic" width={100} height={24} className="h-6 w-auto" />
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-4">
              <h2 className="font-heading text-white text-4xl font-semibold mb-12">Our Story</h2>
              <p className="text-white text-lg max-w-xl mb-8">
                We emerged on the scene in 2024, a visionary solution born from the collective expertise of its founders. United by a shared
                passion for redefining the bookkeeping landscape, they embarked on a journey to create a cutting-edge SaaS platform.
              </p>
              <p className="text-white text-lg max-w-xl">
                Four Points is more than a software; it&apos;s the culmination of years of industry insight and dedication to revolutionize the way
                businesses manage their financial records. Built on the pillars of efficiency, accuracy, and collaboration, Vista sets a new
                standard for bookkeeping solutions, empowering businesses to navigate their financial landscape with ease and confidence.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-t from-slate-900 via-blue-700 to-blue-400 py-20 px-4">
            <p className="uppercase text-center text-slate-300 text-xs mb-4">CAREERS</p>
            <h2 className="font-heading text-white text-center text-4xl md:text-5xl font-bold mb-4">
              Join our amazing global team
            </h2>
            <p className="text-center text-white text-opacity-70 mb-10 max-w-4xl mx-auto">
              We&apos;re a small but strong team that enjoys having a lot of ownership and autonomy. We take pride in our work and come from places
              such as Pipe, AngelList, and - to name a few.
            </p>
            <div className="text-center">
              <a
                className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full shadow-blue"
                href="#"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full"></div>
                <div className="relative z-50 flex items-center py-3 px-5 bg-white group-hover:bg-opacity-80 group-focus:bg-opacity-80 rounded-full transition duration-200">
                  <p className="text-slate-900">Open positions</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
