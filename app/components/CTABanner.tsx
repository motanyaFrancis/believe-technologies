import Link from 'next/link';
import Image from 'next/image';

const CTABanner: React.FC = () => {
    return (
        <section className="bg-slate-950 py-28">
            <div className="container mx-auto px-4">
                <div className="relative h-96 w-full rounded-3xl px-7 md:px-14 py-20 bg-gradient-to-b from-darkBlue-900 via-blue-700 to-blue-400 overflow-hidden">

                    {/* Text Content & CTA */}
                    <div className="relative z-50 flex flex-col justify-center items-start h-full">
                        <h1 className="font-heading text-white text-4xl md:text-5xl font-bold mb-10 max-w-md md:max-w-xl">
                            Want to learn how to Keep up with current trends?
                        </h1>

                        {/* Gradient Button Wrapper */}
                        <div className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full">
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20 rounded-full" />
                        </div>

                        {/* CTA Button Container */}
                        <div className="relative z-50 flex items-center py-3 px-5 bg-white group-hover:bg-white group-focus:bg-white group-hover:bg-opacity-80 group-focus:bg-opacity-80 rounded-full transition duration-200">
                            {/* Optional nested hoverable anchor */}
                            <div className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full" />

                            {/* CTA Link */}
                            <Link
                                href="https://www.pixelrocket.store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-900 font-semibold group-hover:text-fuchsia-900 group-focus:text-fuchsia-900"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Background Illustration */}
                    <div className="relative h-full w-full rounded-3xl overflow-hidden">
                    <Image
                        src="/images/cta/illustration-blue.svg"
                        alt="CTA Illustration"
                        fill
                        className="absolute inset-0 object-cover"
                        style={{ objectPosition: 'right' }}
                        priority
                    />
                    </div>


                </div>
            </div>
        </section>
    );
};

export default CTABanner;
