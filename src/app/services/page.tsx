'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: "Interior Design",
    description: "Creating personalized spaces that reflect your unique style and lifestyle.",
    details: [
      "Custom furniture and lighting design",
      "Color and material palette development",
      "Space planning and layout optimization",
      "Custom millwork and cabinetry design",
      "Art and accessory curation"
    ]
  },
  {
    title: "Space Planning",
    description: "Transforming layouts to enhance flow and functionality while maintaining aesthetic appeal.",
    details: [
      "Custom floor plan development",
      "Furniture placement optimization",
      "Storage and organization solutions",
      "Traffic flow analysis",
      "3D visualization and rendering"
    ]
  },
  {
    title: "Design Consultation",
    description: "Expert guidance to help you make informed decisions about your space.",
    details: [
      "Style assessment and direction",
      "Material and finish selection",
      "Lighting and fixture recommendations",
      "Furniture and decor sourcing",
      "Design concept development"
    ]
  }
];

export default function Services() {
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
            Case Estates Services
          </h1>
          <p className="text-lg text-text-light/80 max-w-2xl mx-auto">
            From concept to completion, Case Estates Home Interiors offers comprehensive design services to help
            bring your vision to life. Each project is approached with creativity and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-warm transition-all duration-300"
            >
              <h2 className="text-2xl font-serif text-text-dark mb-4">{service.title}</h2>
              <p className="text-text-light/80 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-center text-text-light/80">
                    <svg className="w-5 h-5 mr-2 text-deep-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 