'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navLinks from '@data/navLinks';

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="py-5 border-b border-white/10">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Image src="/images/logo-white.svg" alt="Logo" width={140} height={40} />
          </Link>

          <div className="hidden lg:flex gap-2 p-1 rounded-full bg-white/10">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="px-3 py-2 rounded-full text-white text-sm font-semibold hover:bg-white/20 transition duration-200"
              >
                {name}
              </Link>
            ))}
          </div>

          <Link
            href="/login"
            className="hidden lg:flex items-center gap-2 text-white hover:text-blue-800 transition duration-200"
          >
            <span className="text-sm font-semibold">Sign in</span>
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
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-100`}>
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
          <ul className="flex flex-col gap-12 py-12 my-12">
            {navLinks.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className="text-sm font-medium text-gray-900">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-black hover:text-opacity-80 transition duration-200"
            >
              <span className="text-sm font-medium">Sign in</span>
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
    </>
  );
}
