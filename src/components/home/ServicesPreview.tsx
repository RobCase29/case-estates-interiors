'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const services = [
  {
    id: 'interior-design',
    title: 'Interior Design',
    description: 'Full-service interior design tailored to your unique lifestyle and aesthetic preferences.',
    icon: (
      <svg className="w-12 h-12 text-deep-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Interior Design Icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    features: ['Custom furniture selection', 'Color scheme development', 'Material and finish selection']
  },
  {
    id: 'space-planning',
    title: 'Space Planning',
    description: 'Intelligent space utilization that maximizes functionality while maintaining aesthetic harmony.',
    icon: (
      <svg className="w-12 h-12 text-deep-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Space Planning Icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    features: ['Traffic flow optimization', 'Furniture layout planning', '3D visualization']
  },
  {
    id: 'design-consultation',
    title: 'Design Consultation',
    description: 'Expert guidance to help you make informed decisions about your interior transformation.',
    icon: (
      <svg className="w-12 h-12 text-deep-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" role="img" aria-label="Design Consultation Icon">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    features: ['Material and finish selection', 'Color consultation', 'Furniture sourcing']
  }
];

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden" aria-labelledby="services-title">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="services-title" className={`${playfair.className} text-4xl md:text-5xl text-gray-900 mb-6`}>
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From concept to completion, we transform spaces with thoughtful design
            that perfectly balances beauty and functionality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" role="list">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative bg-white rounded-xl overflow-hidden group"
              role="listitem"
            >
              {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-deep-green transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" aria-hidden="true"></div>
              
              <div className="p-8 shadow-soft hover:shadow-warm transition-all duration-500 h-full flex flex-col">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500 origin-left">
                  {service.icon}
                </div>
                <h3 className={`${playfair.className} text-2xl text-gray-900 mb-4`}>{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                
                <ul className="space-y-2 mb-8" aria-label={`${service.title} features`}>
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 mr-2 text-deep-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/services#${service.id}`}
                  className="inline-flex items-center text-deep-green hover:text-deep-green/80 mt-auto font-medium group-hover:translate-x-2 transition-transform duration-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn more
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-block bg-deep-green text-white py-3 px-8 rounded-full font-medium hover:bg-deep-green/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-deep-green focus:ring-offset-2"
            aria-label="View all our interior design services"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 