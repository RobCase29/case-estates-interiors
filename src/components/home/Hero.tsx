'use client';

/**
 * Hero Component
 * --------------
 * This component renders the hero section at the top of the homepage.
 * It displays a full-screen background image with a dark overlay, a main heading,
 * a subheading, and a call-to-action button.
 * 
 * Typography:
 * - Headings: Playfair Display (elegant serif)
 * - Body: Montserrat (modern sans-serif)
 * 
 * Technologies:
 * - Next.js Image: For optimized image handling.
 * - Framer Motion: For smooth entrance animations.
 * 
 * Each section is clearly commented for educational purposes.
 */

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

// Animation configuration for fade in effects
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export interface HeroProps {
  /**
   * Main heading text
   */
  heading?: string;
  
  /**
   * Subheading text
   */
  subheading?: string;
  
  /**
   * Background image path
   */
  backgroundImage?: string;
  
  /**
   * Background image alt text
   */
  backgroundAlt?: string;
  
  /**
   * Primary button text
   */
  primaryButtonText?: string;
  
  /**
   * Primary button link
   */
  primaryButtonLink?: string;
  
  /**
   * Secondary button text
   */
  secondaryButtonText?: string;
  
  /**
   * Secondary button link
   */
  secondaryButtonLink?: string;
}

export default function Hero({
  heading = "Case Estates Home Interiors",
  subheading = "Transforming spaces into timeless sanctuaries",
  backgroundImage = "/hero-interior.jpg",
  backgroundAlt = "Stunning interior design portfolio showcase",
  primaryButtonText = "View Portfolio",
  primaryButtonLink = "/portfolio",
  secondaryButtonText = "Start Your Project",
  secondaryButtonLink = "/contact",
}: HeroProps) {
  return (
    <section role="banner" className="relative h-screen overflow-hidden">
      {/**
       * Background Image:
       * Uses Next.js Image component for optimized image delivery.
       * The 'fill' prop makes the image cover the entire section.
       */}
      <Image
        src={backgroundImage}
        alt={backgroundAlt}
        fill
        className="object-cover absolute inset-0 z-[-1]"
        quality={90}
        priority
      />
      {/**
       * Overlay:
       * A semi-transparent black overlay to improve text readability on top of the background.
       */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/20" />
      {/**
       * Content Container:
       * Centers the text content both vertically and horizontally.
       */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center relative px-4">
        {/**
         * Main Heading with animation:
         * Uses Framer Motion for a fade-in effect from below.
         */}
        <motion.h1
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className={`${playfair.className} text-4xl md:text-6xl lg:text-7xl text-gray-900 text-center tracking-tight [text-shadow:_0_1px_2px_rgba(0,0,0,0.1)]`}
        >
          {heading.includes(" ") ? (
            <>
              {heading.split(" ").slice(0, -2).join(" ")}{" "}
              <br className="hidden md:block" />
              {heading.split(" ").slice(-2).join(" ")}
            </>
          ) : (
            heading
          )}
        </motion.h1>
        {/**
         * Subheading with delayed animation:
         * Provides additional context with a smooth fade-in effect.
         */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }}
          className="mt-6 text-xl md:text-2xl text-gray-800 text-center max-w-2xl font-light [text-shadow:_0_1px_2px_rgba(255,255,255,0.5)]"
        >
          {subheading}
        </motion.p>
        {/**
         * Call-to-Action Buttons:
         * Navigation buttons with hover effects, animations, and accessibility improvements.
         */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 0.8 } }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href={primaryButtonLink}
            aria-label={primaryButtonText}
            className="inline-block bg-white/90 backdrop-blur-sm text-gray-900 py-3 px-8 rounded-full font-medium hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] border border-white/20 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            {primaryButtonText}
          </Link>
          <Link 
            href={secondaryButtonLink}
            aria-label={secondaryButtonText}
            className="inline-block bg-gray-900/90 backdrop-blur-sm text-white py-3 px-8 rounded-full font-medium hover:bg-gray-900 transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            {secondaryButtonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}