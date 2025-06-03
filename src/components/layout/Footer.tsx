'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: FaInstagram,
    color: '#E4405F'
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: FaLinkedinIn,
    color: '#0A66C2'
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: FaPinterestP,
    color: '#BD081C'
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-deep-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif mb-4">Case Estates Home Interiors</h3>
            <p className="text-taupe text-sm leading-relaxed mb-6">
              Creating beautiful, functional spaces that perfectly reflect your personal style and needs.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-taupe transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-taupe transition-colors">
                <span className="sr-only">Pinterest</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 00-4.373 23.197c-.018-.288-.036-.747.009-1.071.044-.343.279-2.177.279-2.177s-.071-.144-.071-.351c0-.33.191-.575.431-.575.202 0 .3.152.3.336 0 .204-.129.51-.197.793-.056.237.119.431.35.431.421 0 .745-.443.745-1.087 0-.569-.405-.966-1.104-.966-.753 0-1.193.565-1.193 1.147 0 .23.088.477.196.62.022.027.025.05.018.077-.02.085-.066.267-.074.305-.012.047-.039.065-.089.039-.33-.153-.532-.633-.532-1.016 0-.81.688-1.557 1.983-1.557 1.041 0 1.852.745 1.852 1.742 0 1.042-.665 1.878-1.588 1.878-.309 0-.6-.16-.698-.344 0 0-.153.582-.19.722-.068.266-.262.599-.39.801A10.73 10.73 0 0012 22.5c5.799 0 10.5-4.7 10.5-10.5C22.5 4.7 17.799 0 12 0z" />
                </svg>
              </a>
              <a href="https://houzz.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-taupe transition-colors">
                <span className="sr-only">Houzz</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.61 6.216V0h-6.305v6.559l3.152 1.9zm1.476 1.9V12.9l3.152 1.9V8.116zm-7.78 9.91v1.973H12.611v-8.01L6.306 9.009zm6.304 1.975h6.305V12.9l-6.305 2.088zm0-18l-6.305 2.084V9.01l6.305-2.085z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-taupe hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-taupe hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-taupe hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/services" className="text-taupe hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="text-taupe hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-serif mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#interior-design"
                  className="text-taupe hover:text-white transition-colors"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services#space-planning"
                  className="text-taupe hover:text-white transition-colors"
                >
                  Space Planning
                </Link>
              </li>
              <li>
                <Link
                  href="/services#design-consultation"
                  className="text-taupe hover:text-white transition-colors"
                >
                  Design Consultation
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-4">Contact Us</h4>
            <address className="not-italic text-taupe space-y-3">
              <p>Boston, Massachusetts</p>
              <p>
                <a href="mailto:hello@caseestates.com" className="hover:text-white transition-colors">hello@caseestates.com</a>
              </p>
              <p>
                <a href="tel:+16175551234" className="hover:text-white transition-colors">(617) 555-1234</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-taupe/20 mt-12 pt-8 text-center">
          <p className="text-taupe text-sm">
            &copy; {new Date().getFullYear()} Case Estates Home Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 