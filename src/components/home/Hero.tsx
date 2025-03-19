'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen-90 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-interior.jpg"
          alt="Elegant interior design"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark/80 via-background-dark/60 to-background-dark/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-wide text-text-white drop-shadow-lg">
            Case Estates Home Interiors
          </h1>
          <p className="mt-8 text-xl sm:text-2xl max-w-3xl mx-auto text-text-white font-light drop-shadow-md">
            Transforming spaces into timeless sanctuaries
          </p>
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/portfolio"
              className="rounded-full bg-deep-green hover:bg-deep-green/90 px-8 py-4 text-base font-medium text-text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-background-light/10 backdrop-blur-sm hover:bg-background-light/20 border-2 border-text-white/20 px-8 py-4 text-base font-medium text-text-white transition-all duration-300 transform hover:scale-[1.02]"
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
        <div className="w-6 h-10 border-2 border-text-white/40 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-text-white/40 rounded-full mt-2" />
        </div>
      </motion.div>
    </div>
  );
} 