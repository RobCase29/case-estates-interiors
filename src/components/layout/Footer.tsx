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
    <footer className="relative bg-beige/30 text-text-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-elegant-pattern bg-pattern-size opacity-20" />
      
      {/* Divider with elegant design */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute w-full h-6 bg-gradient-to-r from-transparent via-taupe/30 to-transparent" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Logo and Tagline */}
          <motion.div 
            className="text-center md:text-left"
            variants={fadeInUp}
          >
            <Link href="/" className="inline-block group">
              <h2 className="text-2xl font-serif text-deep-green group-hover:text-deep-green/80 transition-colors duration-300">
                Case Estates
              </h2>
              <div className="h-0.5 w-0 bg-gold transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
            <p className="mt-3 text-sm text-text-light/70">
              Designed with Elegance
            </p>
            <p className="mt-6 text-sm text-text-light/60 max-w-xs mx-auto md:mx-0">
              Elevating interiors through thoughtful design, creating spaces that reflect your unique style and vision.
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="text-center"
            variants={fadeInUp}
          >
            <h3 className="text-lg font-serif mb-6 text-deep-green">Contact</h3>
            <div className="space-y-4">
              <a 
                href="mailto:emmahcase@gmail.com" 
                className="flex items-center justify-center md:justify-start gap-2 text-text-light/80 hover:text-deep-green transition-colors group mx-auto w-fit"
              >
                <span className="inline-block p-2 rounded-full bg-deep-green/5 group-hover:bg-deep-green/10 transition-colors">
                  <MdEmail className="h-5 w-5 text-deep-green" />
                </span>
                <span>emmahcase@gmail.com</span>
              </a>
              <a 
                href="tel:617-285-1044" 
                className="flex items-center justify-center md:justify-start gap-2 text-text-light/80 hover:text-deep-green transition-colors group mx-auto w-fit"
              >
                <span className="inline-block p-2 rounded-full bg-deep-green/5 group-hover:bg-deep-green/10 transition-colors">
                  <MdPhone className="h-5 w-5 text-deep-green" />
                </span>
                <span>(617) 285-1044</span>
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="text-center md:text-right"
            variants={fadeInUp}
          >
            <h3 className="text-lg font-serif mb-6 text-deep-green">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-light/70 hover:text-deep-green transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${item.name}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, color: item.color }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-full hover:bg-deep-green/5 transition-colors"
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm text-text-light/60 hidden md:block">
              Stay connected for design inspiration and updates
            </p>
          </motion.div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-taupe/20 text-center">
          <p className="text-sm text-text-light/60">
            © {currentYear} Case Estates Home Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 