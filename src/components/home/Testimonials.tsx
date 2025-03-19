'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    quote: "Emma transformed our Victorian home into a perfect blend of historic charm and modern comfort. Her attention to detail and understanding of our needs was exceptional.",
    author: "Sarah & James Mitchell",
    role: "Homeowners, Beacon Hill",
    image: "/testimonials/client1.jpg"
  },
  {
    id: 2,
    quote: "Working with Case Estates was a dream. Emma's vision for our hotel lobby created an unforgettable first impression that our guests consistently praise.",
    author: "Michael Thompson",
    role: "Hotel Manager, The Wellington",
    image: "/testimonials/client2.jpg"
  },
  {
    id: 3,
    quote: "Emma's space planning expertise completely transformed how we use our home. The flow is intuitive, and every room feels purposeful and beautiful.",
    author: "Rebecca Anderson",
    role: "Client, Newton",
    image: "/testimonials/client3.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-warm-texture bg-texture-size opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-serif text-text-dark">Client Stories</h2>
          <p className="mt-4 text-lg text-text-light/80 max-w-3xl mx-auto">
            Hear from our clients about their experience working with Case Estates Home Interiors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-background-light/80 backdrop-blur-sm rounded-xl p-8 shadow-soft hover:shadow-warm transition-all duration-300"
            >
              {/* Large Quote Mark */}
              <div className="absolute top-4 left-4 text-6xl text-deep-green/20 font-serif">
                "
              </div>
              
              <div className="relative">
                <blockquote className="mt-8 italic text-text-light/80">
                  {testimonial.quote}
                </blockquote>
                
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="relative h-12 w-12">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-base font-medium text-text-dark">{testimonial.author}</div>
                    <div className="text-sm text-mahogany/70">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 