'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 border-b border-gray-100 bg-white transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}
    >
      <nav
        className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
      >
        <Link href="/" className="font-serif text-xl text-gray-800 hover:text-deep-green transition-colors">
          Case Estates Home Interiors
        </Link>
        <div className="flex gap-6">
          <Link 
            href="/portfolio" 
            className="text-gray-600 hover:text-deep-green transition-colors font-medium pb-0.5 hover:border-b-2 border-deep-green"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="text-gray-600 hover:text-deep-green transition-colors font-medium pb-0.5 hover:border-b-2 border-deep-green"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-deep-green transition-colors font-medium pb-0.5 hover:border-b-2 border-deep-green"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
} 