import ContactSection from '@components/ContactSection';

import { Metadata } from 'next';



export const metadata: Metadata = {
    title: 'FAQ',
};


export default function ContactPage() {
    return (
        <main>
            <ContactSection />
        </main>
    );
}
