import PageHeader from '@components/PageHeader'
import FaqAccordion from '@components/FaqAccordion'
import Link from 'next/link'

import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'FAQ',
};


export default function FaqPage() {
    return (
        <>
            <PageHeader
                title="Frequently Asked Questions"
                subtitle="Learn more about our services, technology solutions, and how we support businesses across Africa with affordable, scalable digital transformation tools."
            />

            <div className="bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-sm text-gray-600">
                    <nav className="flex items-center space-x-2">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span>/</span>
                        <span className="text-gray-800 font-medium">FAQ</span>

                    </nav>
                    <Link href="/services" className="text-blue-600 font-semibold hover:underline max-sm:hidden">
                        ← Back Home
                    </Link>
                </div>
                <div className="bg-white py-16">
                    <div className="max-w-7xl p-8 bg-white mx-auto">
                        <FaqAccordion />
                    </div>
                </div>
            </div>
        </>
    );
}
