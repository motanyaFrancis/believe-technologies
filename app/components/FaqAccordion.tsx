'use client';

import { useState, useRef, useEffect } from 'react';

interface FaqItem {
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        question: 'What services does Believe Technologies offer?',
        answer: 'Believe Technologies provides ERP systems, web development, custom APIs, payment integrations, IT infrastructure, and QuickBooks solutions tailored for African businesses.',
    },
    {
        question: 'Which ERP modules are available?',
        answer: 'Our ERP solutions include Human Resource, Procurement, Finance & Budgeting, Fleet Management, and Payroll modules.',
    },
    {
        question: 'Do you offer M-Pesa or local payment integrations?',
        answer: 'Yes, we integrate M-Pesa, Visa/Mastercard, mobile wallets, and custom banking APIs for secure and automated transactions.',
    },
    {
        question: 'Can you customize software for my business?',
        answer: 'Absolutely. We specialize in custom software and API development to match your unique operational workflows.',
    },
    {
        question: 'How does Believe Technologies support SMEs?',
        answer: 'We provide scalable, cost-effective, and locally adapted digital solutions, making advanced technologies accessible to SMEs.',
    },
    {
        question: 'What makes your ERP system different from global solutions like SAP?',
        answer: 'Unlike global ERP systems, ours are tailored for local businesses, are more affordable, and integrate seamlessly with regional tools like M-Pesa and QuickBooks.',
    },
    {
        question: 'Do you offer QuickBooks support and automation?',
        answer: 'Yes, we help businesses set up QuickBooks (Online/Desktop) and build custom portals for automated financial reporting.',
    },
    {
        question: 'Can you improve my company’s IT infrastructure?',
        answer: 'Yes. We handle LAN/WAN setup, network security, server installations, and enterprise software deployment for robust infrastructure.',
    },
    {
        question: 'Where is Believe Technologies located?',
        answer: 'We are based in Nairobi, Kenya, serving clients across Africa and supporting regional technology needs.',
    },
    {
        question: 'How can I get in touch with you?',
        answer: 'You can contact us via email at technologies@believe.co.ke or visit our website technologies.believe.co.ke for more details.',
    },
];

export default function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

    const toggleAccordion = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        contentRefs.current.forEach((content, index) => {
            if (content) {
                content.style.maxHeight =
                    openIndex === index ? `${content.scrollHeight}px` : '0px';
            }
        });
    }, [openIndex]);

    const PlusIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </svg>
    );

    const MinusIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
            <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
        </svg>
    );

    return (
        <div className="w-full">
            {faqData.map((item, index) => (
                <div key={index} className="border-b border-slate-200">
                    <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full flex justify-between items-center font-semibold py-5 text-slate-800"
                    >
                        <span>{item.question}</span>
                        <span className="text-slate-800 transition-transform duration-300">
                            {openIndex === index ? MinusIcon : PlusIcon}
                        </span>
                    </button>
                    <div
                        ref={(el) => {
                            contentRefs.current[index] = el;
                        }}
                        className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                        <div className="pb-5 text-base text-slate-500">{item.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}
