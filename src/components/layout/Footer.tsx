'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: FaInstagram,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: FaLinkedinIn,
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: FaPinterestP,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-background-light text-text-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-elegant-pattern bg-pattern-size opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-serif text-deep-green">
                Case Estates
              </h2>
            </Link>
            <p className="mt-2 text-sm text-text-light/70">
              Designed with Elegance
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-lg font-serif mb-4 text-mahogany">Contact</h3>
            <div className="space-y-2">
              <p className="text-text-light/80">
                <a href="mailto:emmahcase@gmail.com" className="hover:text-deep-green transition-colors">
                  emmahcase@gmail.com
                </a>
              </p>
              <p className="text-text-light/80">
                <a href="tel:617-285-1044" className="hover:text-deep-green transition-colors">
                  (617) 285-1044
                </a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-serif mb-4 text-mahogany">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-light/70 hover:text-deep-green transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-taupe/20 text-center">
          <p className="text-sm text-text-light/60">
            © {new Date().getFullYear()} Case Estates Home Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 