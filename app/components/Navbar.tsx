'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navLinks from '@data/navLinks';

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Navigation */}
      <div
        onMouseLeave={() => setHoveredDropdown(null)}
        className={`relative z-[998] transition-colors duration-200 ${hoveredDropdown ? 'bg-slate-950' : ''}`}
      >
        <nav className="py-5 border-b border-white/10 container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/images/logo-white.svg" alt="Logo" width={140} height={40} />
          </Link>

          <div className="hidden lg:flex gap-2 p-1  ">
            {navLinks.map(({ name, href, megaMenu }) => (
              megaMenu ? (
                <div
                  key={name}
                  onMouseEnter={() => setHoveredDropdown(name)}
                  className="relative"
                >
                  <button
                    className="px-3 py-2  text-white text-sm font-semibold hover:bg-white/20 transition duration-200"
                  >
                    {name}
                  </button>
                </div>
              ) : (
                <Link
                  key={name}
                  href={href || '#'}
                  onMouseEnter={() => setHoveredDropdown(null)}
                  className="px-3 py-2  text-white text-sm font-semibold hover:bg-white/20 transition duration-200"
                >
                  {name}
                </Link>
              )
            ))}
          </div>

          <Link
            href="/contact"
            className="hidden lg:flex items-center gap-2 text-white px-6 py-3  hover:bg-gray-100 hover:text-blue-800 transition duration-200"
          >
            <span className="text-sm font-semibold">Get In Touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M5.5 3L10.5 8L5.5 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <button className="lg:hidden" onClick={() => setMobileNavOpen(!mobileNavOpen)}>
            <svg width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="28" fill="white" />
              <path
                d="M37 32H19M37 24H19"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </nav>

        {/* Mega Menu */}
        <div className="overflow-hidden transition-all duration-300 ease-in-out">
          {navLinks.map(({ name, megaMenu }) => (
            hoveredDropdown === name && megaMenu && (
              <div key={name} className="animate-fadeInDown w-full text-white z-[997] relative shadow-md">
                <div className="container mx-auto px-4 py-10 text-sm">
                  <h2 className="text-xl font-bold mb-6">{name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {megaMenu.map((section, index) => (
                      <div key={index}>
                        {section.title && (
                          <h3 className="font-semibold mb-2">{section.title}</h3>
                        )}
                        {section.description && (
                          <p className="mb-4 text-gray-300">{section.description}</p>
                        )}
                        {section.links.length > 0 && (
                          <ul className="space-y-4">
                            {section.links.map((link, i) => (
                              <li key={i}>
                                <a href={link.href} className="hover:underline">
                                  {link.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.title && section.links.length === 0 && (
                          <a
                            href="/brands"
                            className="inline-flex items-center text-blue-400 hover:underline"
                          >
                            Explore our brands
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-[999]`}>
        <div className="fixed inset-0 bg-black/20" onClick={() => setMobileNavOpen(false)}></div>
        <nav className="relative p-8 w-full h-full bg-white overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/images/logo-black.svg" alt="Logo" width={120} height={30} />
            </Link>
            <button onClick={() => setMobileNavOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="#111827"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-6 py-12 my-12">
            {navLinks.map(({ name, href, megaMenu }) => (
              <li key={name}>
                {megaMenu ? (
                  <div>
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === name ? null : name)}
                      className="text-sm font-medium text-gray-900 flex justify-between w-full"
                    >
                      {name}
                      <span>{mobileDropdown === name ? '−' : '+'}</span>
                    </button>
                    {mobileDropdown === name && (
                      <div className="mt-4 pl-4 space-y-6">
                        {megaMenu.map((section, idx) => (
                          <div key={idx}>
                            {section.title && <h3 className="font-semibold text-gray-800 text-sm mb-2">{section.title}</h3>}
                            {section.description && <p className="text-gray-500 text-sm mb-2">{section.description}</p>}
                            <ul className="space-y-2">
                              {section.links.map((link, i) => (
                                <li key={i}>
                                  <Link href={link.href} className="text-gray-800 text-sm hover:underline">
                                    {link.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={href || '#'} className="text-sm font-medium text-gray-900">
                    {name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-black hover:text-opacity-80 transition duration-200"
            >
              <span className="text-sm font-medium">Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M5.5 3L10.5 8L5.5 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.9s ease-out;
        }
      `}</style>
    </>
  );
}
