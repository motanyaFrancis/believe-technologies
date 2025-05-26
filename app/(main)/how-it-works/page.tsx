
import HowItWorks from '@components/HowItWorks'
import Link from 'next/link'

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How It Works',
};


export default function FaqPage() {
    return (
        <>
            <div className="bg-gray-50">

                <div
                    className="relative bg-cover bg-center p-10 md:p-20 h-[400px]"
                    style={{ backgroundImage: `url('/images/solution.jpg')` }}
                >
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black opacity-80"></div>

                    {/* Content for the introductory section */}
                    <div className="relative max-w-7xl mx-auto z-10 text-white">
                        {/* Subtitle for the section */}
                        <p className="text-sm font-semibold uppercase text-blue-300">Our Process</p>
                        {/* Main heading for the section */}
                        <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
                            How We Deliver Digital Transformation
                        </h2>
                        {/* Descriptive paragraph */}
                        <p className="text-lg mb-4 max-w-2xl">
                            At Believe Technologies, we combine strategy, customization, and hands-on support to empower African businesses through modern, affordable tech solutions.
                        </p>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-sm text-gray-600">
                    <nav className="flex items-center space-x-2">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span>/</span>
                        <span className="text-gray-800 font-medium">How It Works</span>

                    </nav>
                    <Link href="/services" className="text-blue-600 font-semibold hover:underline max-sm:hidden">
                        ← Back Home
                    </Link>
                </div>
                <HowItWorks />
            </div>
        </>
    );
}
