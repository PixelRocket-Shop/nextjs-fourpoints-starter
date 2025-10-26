'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Header component with responsive navigation and mobile menu
 * @param {Object} props - Component props
 * @param {'home'|'other'} [props.variant='home'] - Header style variant that affects border styling
 * @returns {JSX.Element} Header component with navigation and mobile menu
 */
const Header = ({ variant = 'home' }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <div className="container mx-auto px-4">
      <nav className={`py-5 ${variant === 'home' ? 'border-b border-white/10' : ''}`}>
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src="/images/logo-white-2.svg" alt="" width={120} height={40} />
            </Link>
            <div className="hidden lg:flex gap-2 p-1 rounded-full bg-white/10">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="px-3 py-2 rounded-full text-white text-sm hover:bg-white/20 transition duration-200"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              className="hidden lg:flex items-center gap-2 text-white hover:text-blue-800 transition duration-200"
              href="/login"
            >
              <span className="text-sm font-medium">Sign in</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </Link>
            <button
              className="lg:hidden"
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
            >
              <svg width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="white"></rect>
                <path d="M37 32H19M37 24H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
        </nav>

      {/* Mobile Navigation */}
      <div className={`${mobileNavOpen ? 'block' : 'hidden'} fixed inset-0 z-[9999]`}>
        <div
          className="fixed inset-0 bg-black opacity-20 z-[9998]"
          onClick={() => setMobileNavOpen(false)}
        ></div>
        <nav className="relative z-[9999] w-5/6 max-w-xs h-full bg-white overflow-y-auto p-8 shadow-xl">
          <div className="flex items-center justify-between">
            <Link className="inline-block" href="/">
              <Image src="/images/logo-black-2.svg" alt="" width={120} height={40} />
            </Link>
            <button onClick={() => setMobileNavOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="#111827" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </div>
          <ul className="flex flex-col gap-12 py-12 my-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="text-sm font-medium" href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link
              className="inline-flex items-center gap-2 text-black hover:text-opacity-80 transition duration-200"
              href="/login"
            >
              <span className="text-sm font-medium">Sign in</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default memo(Header);