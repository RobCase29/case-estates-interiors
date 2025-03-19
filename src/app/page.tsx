'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/home/Hero';
import ProjectCategories from '@/components/home/ProjectCategories';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <div className="bg-background-light">
      <Hero />

      {/* About Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-serif text-text-light">
                Classic New England Charm Meets Modern Design
              </h2>
              <p className="mt-6 text-lg text-text-light/80 leading-relaxed">
                At Case Estates Home Interiors, we blend timeless elegance with contemporary 
                functionality. Emma Case brings a unique perspective to each project, 
                creating spaces that are both sophisticated and wonderfully livable.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block text-primary hover:text-primary-hover font-medium"
              >
                Learn more about our approach →
              </Link>
            </div>
            <div className="relative h-96 lg:h-[500px]">
              <div className="absolute inset-0 bg-primary/10 -rotate-6 transform" />
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src="/about-interior.jpg"
                  alt="Elegant interior design by Emma Case"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Categories */}
      <ProjectCategories />

      {/* Services Preview */}
      <section className="py-24 bg-accent-light/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-serif text-text-light">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-text-light/80 max-w-3xl mx-auto">
              From initial concept to final styling, we offer comprehensive interior design services
              tailored to your unique vision and lifestyle.
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
                className="bg-white p-8 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300"
              >
                <h3 className="text-xl font-serif text-text-light">{service.title}</h3>
                <p className="mt-4 text-text-light/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-background-dark text-white">
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
            <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
              Let's create something beautiful together. Contact us to begin your journey
              to a space that inspires.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
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
