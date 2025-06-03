'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const projects = [
  { 
    title: 'Modern Living Room',
    description: 'Contemporary comfort meets timeless elegance',
    image: '/portfolio/living-room.jpg'
  },
  { 
    title: 'Luxurious Kitchen',
    description: 'Sophisticated culinary spaces',
    image: '/portfolio/kitchen.jpg'
  },
  { 
    title: 'Primary Suite',
    description: 'Serene personal retreats',
    image: '/portfolio/bedroom.jpg'
  },
  { 
    title: 'Dining Room',
    description: 'Elegant entertaining spaces',
    image: '/portfolio/dining.jpg'
  },
  { 
    title: 'Home Office',
    description: 'Inspiring workspaces',
    image: '/portfolio/office.jpg'
  },
  { 
    title: 'Outdoor Living',
    description: 'Seamless indoor-outdoor flow',
    image: '/portfolio/outdoor.jpg'
  }
];

export default function GalleryPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          className={`${playfair.className} text-fluid-heading text-center text-gray-900 mb-6`}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.8 } }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-fluid-subheading"
        >
          Discover our curated collection of thoughtfully designed spaces, 
          where every detail contributes to a harmonious and sophisticated environment.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-soft">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <h3 className={`${playfair.className} text-2xl text-white mb-2`}>
                    {project.title}
                  </h3>
                  <p className="text-white/90 font-light">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 