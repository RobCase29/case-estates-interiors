'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isAboutPage = pathname === '/about';
  
  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-3' 
          : 'py-6 bg-transparent'
      }`}
    >
      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-background-light bg-opacity-95 backdrop-blur-sm z-40 lg:hidden"
          onClick={closeMenu}
        >
          <div 
            className="absolute right-5 top-5 text-deep-green cursor-pointer"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="p-2" 
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <HiX className="h-8 w-8 text-deep-green" />
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center h-full">
            {navigation.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xl text-deep-green font-medium my-4 hover:text-primary transition-colors duration-300"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="mt-6 bg-deep-green text-white px-6 py-3 rounded-full hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-green"
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
      
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div
            className={`font-serif font-medium text-lg md:text-xl transition-all duration-300 ${
              !scrolled && isAboutPage ? 'text-white' : 'text-deep-green'
            }`}
          >
            Case Estates Home Interiors
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                pathname === link.href
                  ? 'text-primary border-b-2 border-primary'
                  : !scrolled && isAboutPage
                  ? 'text-white hover:text-white/80'
                  : 'text-deep-green hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className="bg-deep-green text-white px-5 py-2 rounded-full hover:bg-primary-hover transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-deep-green text-sm"
          >
            Contact Us
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button
          className={`lg:hidden ${!scrolled && isAboutPage ? 'text-white' : 'text-deep-green'}`}
          onClick={openMenu}
          aria-label="Open menu"
        >
          <HiMenu className="h-7 w-7" />
        </button>
      </div>
    </header>
  );
} 