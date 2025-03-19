'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div>
      <Hero />

      {/* About Section */}
      <section className="py-24 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-gray-900">
                Crafting Beautiful Spaces That Tell Your Story
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                At Case Estates Home Interiors, we believe that every space has a story to tell. 
                With an eye for detail and a passion for design, Emma Case transforms houses into 
                homes that reflect your unique style and personality.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block text-accent-600 hover:text-accent-700 font-medium"
              >
                Learn more about our approach →
              </Link>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-primary-100 -rotate-6 transform" />
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/about-interior.jpg"
                  alt="Elegant interior design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-gray-900">
              Our Services
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              From initial concept to final styling, we offer comprehensive interior design services
              tailored to your needs.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.2 }
                  }
                }}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <h3 className="text-xl font-serif text-gray-900">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl sm:text-4xl font-serif">
              Ready to Transform Your Space?
            </h2>
            <p className="mt-4 text-xl text-gray-200 max-w-2xl mx-auto">
              Let's create something beautiful together. Contact us to begin your journey
              to a space that inspires.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-white text-accent-900 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

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
