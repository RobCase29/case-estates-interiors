'use client';

/**
 * Home Page Component
 * -------------------
 * This is the main page of the website.
 * 
 * Sections:
 * - Hero: Displays a full-screen top section with a background image and call-to-action button.
 * - About Section: Introduces the design philosophy with text and an image that has hover effects.
 * - Project Categories: Renders a list of project categories (imported from a separate component).
 * - Services Preview: Lists various services offered, each with its own animation.
 * - Call to Action: Invites users to get in touch, featuring a background image overlay.
 *
 * Animations are implemented using Framer Motion. The Next.js Image component is used for
 * optimized image loading. Each section is commented for clarity.
 */

import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import ProjectCategories from '@/components/home/ProjectCategories';
import Image from 'next/image';
import Link from 'next/link';

// Fade-in animation configuration for use in multiple sections
const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Home() {
  return (
    <main className="bg-background-light">
      {/*
        Hero Section:
        Uses the Hero component to display the top section with a background image, main heading, subtitle, and call-to-action button.
      */}
      <Hero />

      {/*
        About Section:
        Introduces the design philosophy along with descriptive text and an image showcasing the style.
      */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-texture bg-texture-size opacity-10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl shadow-soft border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-tight leading-tight">
                Classic New England Charm<br /> Meets Modern Design
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed font-medium">
                At Case Estates Home Interiors, we blend timeless elegance with contemporary 
                functionality. Emma Case brings a unique perspective to each project, 
                creating spaces that are both sophisticated and wonderfully livable.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-flex items-center text-deep-green hover:text-deep-green/80 font-medium transition-colors group"
              >
                Learn more about our approach
                <svg 
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <motion.div 
              className="relative h-96 lg:h-[500px] border border-gray-100 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-deep-green/10 -rotate-6 transform rounded-2xl" />
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <Image
                  src="/about-interior.jpg"
                  alt="Elegant interior design by Emma Case"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/*
        Project Categories Section:
        This section, rendered via the ProjectCategories component, displays various design categories.
      */}
      <ProjectCategories />

      {/*
        Services Preview Section:
        Lists the services offered with animated cards. Each card details a service and uses staggered fade-in effects.
      */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid bg-grid-size opacity-20" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-4xl font-serif text-gray-800">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              From initial concept to final styling, we offer comprehensive interior design services
              tailored to your unique vision and lifestyle.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: index * 0.2, duration: 0.6, ease: "easeInOut" } }}
                viewport={{ once: true }}
                className="bg-background-light/80 backdrop-blur-sm p-8 rounded-xl shadow-soft hover:shadow-warm transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
              >
                <h3 className="text-2xl font-serif text-gray-800 tracking-tight">{service.title}</h3>
                <p className="mt-4 text-gray-600 font-medium">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5B7B8C]/95 to-[#5B7B8C]/85" />
          <div className="absolute inset-0 bg-elegant-pattern bg-pattern-size opacity-10" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-text-white mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-xl text-text-white/90 mb-8 max-w-2xl mx-auto">
                Let Case Estates Home Interiors help you create something beautiful. Each project is a unique opportunity
                to bring your vision to life through thoughtful design.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/portfolio"
                  className="inline-block bg-white text-[#5B7B8C] py-4 px-8 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  View Gallery
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-transparent border-2 border-white text-white py-4 px-8 rounded-full font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Start Your Project
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

// Array of services for the Services Preview section
const services = [
  {
    title: "Interior Design",
    description: "Full-service interior design solutions that transform your space from concept to completion."
  },
  {
    title: "Space Planning",
    description: "Strategic layout planning that maximizes your space's functionality and flow."
  },
  {
    title: "Styling & Decoration",
    description: "Final touches and styling services to bring your space to life with carefully curated pieces."
  }
];
