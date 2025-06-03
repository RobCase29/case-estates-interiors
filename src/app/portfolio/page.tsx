'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const MasonryGrid = dynamic(() => import('@/components/gallery/MasonryGrid'), {
  loading: () => <p>Loading gallery...</p>,
  ssr: false,
});

const projects = [
  {
    id: 1,
    title: "Modern Farmhouse Kitchen",
    description: "A stunning kitchen renovation that blends rustic charm with contemporary design.",
    category: "Kitchen Design",
    image: "/portfolio1.jpg",
    details: "Custom cabinetry, marble countertops, and integrated appliances create a perfect balance of style and functionality.",
    dimensions: "20' x 15'"
  },
  {
    id: 2,
    title: "Coastal Living Room",
    description: "A light and airy living space inspired by New England's coastal aesthetic.",
    category: "Living Room",
    image: "/portfolio2.jpg",
    details: "Natural materials, soft color palette, and custom built-ins create a serene atmosphere.",
    dimensions: "25' x 18'"
  },
  {
    id: 3,
    title: "Master Suite Retreat",
    description: "A luxurious master suite that serves as a private sanctuary.",
    category: "Bedroom",
    image: "/portfolio3.jpg",
    details: "Custom walk-in closet, spa-like bathroom, and sitting area create the ultimate retreat.",
    dimensions: "30' x 20'"
  },
  {
    id: 4,
    title: "Urban Loft Transformation",
    description: "Industrial meets modern in this downtown loft renovation.",
    category: "Loft Design",
    image: "/portfolio4.jpg",
    details: "Exposed brick, steel accents, and custom lighting create an industrial-chic atmosphere.",
    dimensions: "40' x 25'"
  },
  {
    id: 5,
    title: "Garden Room Sanctuary",
    description: "A year-round garden room that brings the outdoors in.",
    category: "Sunroom",
    image: "/portfolio5.jpg",
    details: "Floor-to-ceiling windows, natural materials, and indoor plants create a peaceful retreat.",
    dimensions: "15' x 20'"
  },
  {
    id: 6,
    title: "Contemporary Dining Space",
    description: "A bold dining room that makes a statement.",
    category: "Dining Room",
    image: "/portfolio6.jpg",
    details: "Custom lighting, dramatic wall treatment, and curated furniture create an unforgettable dining experience.",
    dimensions: "18' x 16'"
  }
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-background-light pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif text-text-dark mb-4">
            Case Estates Gallery
          </h1>
          <p className="text-lg text-text-light/80 max-w-2xl mx-auto">
            Explore our collection of thoughtfully curated spaces, each telling its own story through
            intentional design choices and carefully selected elements.
          </p>
        </motion.div>

        <MasonryGrid projects={projects} />
      </div>
    </main>
  );
} 