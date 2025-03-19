'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-screen-90 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/hero-interior.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-background-dark/50 backdrop-blur-xs" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-wide">
            Case Estates Home Interiors
          </h1>
          <p className="mt-8 text-xl sm:text-2xl max-w-3xl mx-auto text-white/90 font-light">
            Transforming spaces into timeless sanctuaries
          </p>
          <div className="mt-12 flex justify-center gap-6">
            <Link
              href="/portfolio"
              className="rounded-full bg-gold px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-gold-hover transition-all duration-300 hover:shadow-xl"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-white/80 px-8 py-4 text-base font-medium text-white hover:bg-white/10 transition-all duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
} 