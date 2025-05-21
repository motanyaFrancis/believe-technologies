'use client';

import Link from 'next/link';
import Image from 'next/image';

const featuredJobs = [
    {
        title: 'Senior Manager, Loyalty Design',
        location: 'Air India, Gurgaon',
        url: 'https://www.tata.com/careers/jobs/jobdetails?jobId=31970944',
    },
    {
        title: 'Solution Architect, Digital',
        location: 'TCS, Bengaluru',
        url: 'https://www.tata.com/careers/jobs/jobdetails?jobId=357630',
    },
];

export default function CareerSection() {
    return (
        <section className="bg-gradient-to-b from-gray-100 via-slate-200 to-slate-100 py-16">
            <div className="max-w-7xl mx-auto">
                {/* <h2 className="text-4xl font-bold text-gray-800 mb-12">Careers</h2> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6">
                    {/* Card 1: Beware of Job Scams (spans two rows only on large screens) */}
                    <div className="relative lg:row-span-2">
                        {/* Floating label absolutely positioned outside the card */}
                        <div className="absolute -top-6 -left-6 z-50 bg-white/70 backdrop-blur-md px-4 py-1  shadow-lg">
                            <p className="text-2xl text-slate-800 font-semibold ">Careers</p>
                        </div>

                        {/* The actual card */}
                        <Link
                            href="/careers/job-disclaimer-notification"
                            className="bg-white shadow-md overflow-hidden flex flex-col justify-between hover:shadow-lg transition h-full"
                        >
                            <div className="relative w-full h-48 sm:h-60 lg:h-80">
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
                                    We do not charge/accept any amount or security deposit from job seekers. Read disclaimer.
                                </p>
                            </div>
                            <div className="p-5 pt-0 text-right">
                                <span className="text-yellow-500 text-lg">→</span>
                            </div>
                        </Link>
                    </div>

                    {/* Card 2: Tata Opportunities */}
                    <Link
                        href="/careers/jobs/internal-jobs-tata-group-mobility"
                        className="sm:col-span-2 lg:col-span-2 relative bg-black  overflow-hidden group hover:shadow-lg transition"
                    >
                        <div className="relative w-full h-64 lg:h-80">
                            <Image
                                src="/images/careers/image_2.jpg"
                                alt="Tata Opportunities"
                                fill
                                className="object-cover opacity-70 group-hover:opacity-90 transition"
                            />
                        </div>
                        <div className="absolute inset-0 p-6 flex flex-col justify-center">
                            <p className="text-sm uppercase text-white/60 mb-1">For Volunteers</p>
                            <h3 className="text-white text-2xl font-semibold">
                                Believe Opportunities for Volunteers
                            </h3>
                            <p className="text-white mt-2 text-sm max-w-md">
                                Explore roles across the Believe seamlessly using the group mobility platform.
                            </p>
                        </div>
                        <div className="absolute bottom-5 right-5 text-white text-xl">→</div>
                    </Link>

                    {/* Card 3: In Numbers */}
                    <Link
                        href="/careers"
                        className="bg-white shadow-md  p-12 flex flex-col justify-between hover:shadow-lg transition"
                    >
                        <div className='py-6'>
                            <p className="text-xs text-blue-600 uppercase mb-12">Learn More</p>
                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-20 h-20">
                                    <Image
                                        src="/images/careers/careers_icon.svg"
                                        alt="Employees"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-slate-700">About</div>
                                    <p className="text-md text-gray-600">Employees at Believe Technologies</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-right mt-4">
                            <span className="text-yellow-500 text-lg">→</span>
                        </div>
                    </Link>

                    {/* Card 4: Featured Jobs */}
                    <div className="bg-blue-600 text-white shadow-md  p-12 flex flex-col justify-between">
                        <div>
                            <p className="text-xs uppercase text-white/70 mb-12">Careers</p>
                            <h3 className="text-xl font-semibold mb-4">Featured Jobs</h3>
                            <div className="space-y-4">
                                {featuredJobs.map((job, idx) => (
                                    <Link
                                        key={idx}
                                        href={job.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block border-l-1 pl-3 ml-6 font-medium"
                                    >
                                        <div className="text-white text-sm ">{job.title}</div>
                                        <div className="text-xs text-blue-200 italic">{job.location}</div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="text-right mt-4">
                            <Link href="/careers/jobs/joblisting" className="text-white text-lg">→</Link>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}
