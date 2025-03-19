'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 'carpentry',
    title: 'Custom Carpentry',
    description: 'Victorian-inspired custom cabinetry and bespoke crown molding, designed for homes with character.',
    image: '/projects/carpentry.jpg',
    color: 'project-carpentry',
  },
  {
    id: 'hotel',
    title: 'Hotel Design',
    description: 'Mid-century modern aesthetic with bold, character-rich wall coverings and clean lines.',
    image: '/projects/hotel.jpg',
    color: 'project-hotel',
  },
  {
    id: 'bathroom',
    title: 'Image Board',
    description: 'Deep green shower tiles paired with rich mahogany vanities, balancing traditional and modern elements.',
    image: '/projects/bathroom.jpg',
    color: 'project-bathroom',
  },
  {
    id: 'planning',
    title: 'Space Planning',
    description: 'Thoughtfully redesigned floor plans that improve functionality, flow, and comfort.',
    image: '/projects/planning.jpg',
    color: 'project-planning',
  },
  {
    id: 'decorating',
    title: 'Decorating',
    description: 'Cozy, inviting spaces with layered textures and carefully selected furnishings.',
    image: '/projects/decorating.jpg',
    color: 'project-decorating',
  },
];

export default function ProjectCategories() {
  return (
    <section className="py-24 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif text-text-light">Our Expertise</h2>
          <p className="mt-4 text-lg text-text-light/80 max-w-3xl mx-auto">
            From custom carpentry to complete space planning, we bring your vision to life with attention to every detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/portfolio/${category.id}`} className="group block">
                <div className="relative h-80 overflow-hidden rounded-xl shadow-soft transition-all duration-300 group-hover:shadow-warm">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-dark/50" />
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-serif mb-2">{category.title}</h3>
                    <p className="text-sm text-white/90 line-clamp-2">{category.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 