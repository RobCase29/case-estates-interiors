'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const categories = [
  {
    id: 'carpentry',
    title: 'Custom Carpentry',
    description: 'Victorian-inspired custom cabinetry and bespoke crown molding, designed for homes with character.',
    image: '/projects/carpentry.jpg',
    color: 'from-deep-green/80 to-deep-green/40',
  },
  {
    id: 'hotel',
    title: 'Hotel Design',
    description: 'Mid-century modern aesthetic with bold, character-rich wall coverings and clean lines.',
    image: '/projects/hotel.jpg',
    color: 'from-taupe/80 to-taupe/40',
  },
  {
    id: 'bathroom',
    title: 'Image Board',
    description: 'Deep green shower tiles paired with rich mahogany vanities, balancing traditional and modern elements.',
    image: '/projects/bathroom.jpg',
    color: 'from-deep-green/70 to-taupe/50',
  },
  {
    id: 'planning',
    title: 'Space Planning',
    description: 'Thoughtfully redesigned floor plans that improve functionality, flow, and comfort.',
    image: '/projects/planning.jpg',
    color: 'from-taupe/70 to-deep-green/50',
  },
  {
    id: 'decorating',
    title: 'Decorating',
    description: 'Cozy, inviting spaces with layered textures and carefully selected furnishings.',
    image: '/projects/decorating.jpg',
    color: 'from-primary/70 to-taupe/40',
  },
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

export default function ProjectCategories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="py-24 bg-background-light relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-taupe/5 to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-text-dark mb-4">Gallery</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto my-6"></div>
          <p className="mt-4 text-lg text-text-light/80 max-w-3xl mx-auto">
            From custom carpentry to complete space planning, we bring your vision to life with attention to every detail.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              variants={item}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <Link href={`/portfolio/${category.id}`} className="block">
                <div className="relative h-96 overflow-hidden rounded-xl shadow-soft transition-all duration-300 group-hover:shadow-lg transform group-hover:-translate-y-1">
                  <div className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-80 transition-opacity duration-300 group-hover:opacity-70 z-10`} />
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 z-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-20"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-30 transform transition-transform duration-300 ease-out">
                    <motion.h3 
                      className="text-xl font-serif mb-2 text-shadow-md"
                      animate={{ y: hoveredIndex === index ? -5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.title}
                    </motion.h3>
                    <motion.p 
                      className="text-sm text-white/95 line-clamp-2 text-shadow-sm"
                      animate={{ 
                        y: hoveredIndex === index ? -5 : 0,
                        opacity: hoveredIndex === index ? 1 : 0.9 
                      }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    >
                      {category.description}
                    </motion.p>
                    <motion.div 
                      className="mt-4 inline-flex items-center text-sm font-medium text-white group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 10
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Explore
                      <svg 
                        className="ml-1 w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 