'use client';

import Link from 'next/link';
import Image from 'next/image';

const volunteerOpportunities = [
  {
    title: 'Community Outreach Volunteer',
    location: 'Remote / Nairobi HQ',
    url: '#/careers/volunteer/community-outreach',
  },
  {
    title: 'Junior Developer (Volunteer)',
    location: 'Hybrid (Kenya only)',
    url: '#/careers/volunteer/junior-developer',
  },
];

export default function CareerSection() {
  return (
    <section className="bg-gradient-to-b from-gray-100 via-slate-200 to-slate-100 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 p-6 max-sm:p-0 max-sm:gap-0">

          {/* Card 1: Job Scam Alert */}
          <div className="relative lg:row-span-2 max-lg:col-span-2 max-sm:col-span-1">
            <div className="absolute -top-6 -left-6 max-lg:left-4 max-md:left-2 z-50 bg-white/70 backdrop-blur-md px-4 py-1 shadow-lg">
              <p className="text-2xl text-slate-800 font-semibold">Careers</p>
            </div>

            <Link
              href="/careers/job-disclaimer-notification"
              className="bg-white shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition h-full"
            >
              <div className="relative w-full h-48 sm:h-60 lg:h-100">
                <Image
                  src="/images/careers/image_1.jpg"
                  alt="Job Scam Alert"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-12 pt-4">
                <h3 className="text-2xl text-slate-600 font-semibold mb-2">Beware of Job Scams</h3>
                <p className="text-sm text-gray-600 border-l-1 border-yellow-400 pl-4 pr-8 ml-4 mt-3">
                  We do not charge or request any payments from applicants. All our listings are shared officially.
                </p>
              </div>
              <div className="p-5 pt-0 text-right">
                <span className="text-yellow-500 text-lg">→</span>
              </div>
            </Link>
          </div>

          {/* Card 2: Volunteer Opportunities */}
          <Link
            href="/careers/volunteer"
            className="sm:col-span-2 lg:col-span-2 relative bg-black overflow-hidden group hover:shadow-lg transition"
          >
            <div className="relative w-full h-full">
              <Image
                src="/images/careers/image_2.jpg"
                alt="Volunteer Opportunities"
                fill
                className="object-cover opacity-70 group-hover:opacity-90 transition"
              />
            </div>
            <div className="absolute inset-0 p-6 flex flex-col justify-center">
              <p className="text-sm uppercase text-white/60 mb-1">Make a Difference</p>
              <h3 className="text-white text-2xl font-semibold">
                Volunteer with Believe Technologies
              </h3>
              <p className="text-white mt-2 text-sm max-w-md">
                Join us in driving digital transformation across Africa. Flexible, purpose-driven roles for change-makers.
              </p>
            </div>
            <div className="absolute bottom-5 right-5 text-white text-xl">→</div>
          </Link>

          {/* Card 3: About the Team */}
          <Link
            href="/careers"
            className="bg-white shadow-md p-12 flex flex-col justify-between hover:shadow-lg transition"
          >
            <div className="py-6">
              <p className="text-xs text-blue-600 uppercase mb-12">Learn More</p>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-20 h-20">
                  <Image
                    src="/images/careers/careers_icon.svg"
                    alt="Our Team"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-700">Our Team</div>
                  <p className="text-md text-gray-600">A growing force for digital change in Africa</p>
                </div>
              </div>
            </div>
            <div className="text-right mt-4">
              <span className="text-yellow-500 text-lg">→</span>
            </div>
          </Link>

          {/* Card 4: Featured Volunteer Roles */}
          <div className="bg-blue-600 text-white shadow-md p-12 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase text-white/70 mb-12">Open Roles</p>
              <h3 className="text-xl font-semibold mb-4">Volunteer Opportunities</h3>
              <div className="space-y-4">
                {volunteerOpportunities.map((role, idx) => (
                  <Link
                    key={idx}
                    href={role.url}
                    className="block border-l-1 pl-3 ml-6 font-medium"
                  >
                    <div className="text-white text-sm">{role.title}</div>
                    <div className="text-xs text-blue-200 italic">{role.location}</div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="text-right mt-4">
              <Link href="/careers/volunteer" className="text-white text-lg">→</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
