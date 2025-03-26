'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }
  }
};

export default function AboutContent() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative py-28 bg-deep-green text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-pattern-grid bg-repeat opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        </div>
        <motion.div 
          className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center relative"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-serif mb-6 text-shadow-lg"
            variants={fadeIn}
          >
            About Us
          </motion.h1>
          <motion.div 
            className="w-24 h-0.5 bg-gold mx-auto mb-8"
            variants={fadeIn}
          />
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 text-balance text-shadow-sm"
            variants={fadeIn}
          >
            At Case Estates Home Interiors, we create personalized spaces that reflect your unique style and enhance your everyday living.
          </motion.p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-warm-texture bg-texture-size opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-8 text-deep-green tracking-tight leading-tight">Our Design Philosophy</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We believe that great design should be both beautiful and functional. Our approach combines timeless 
                  aesthetics with practical solutions that make your home not just visually stunning, but also perfectly 
                  tailored to how you live.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Every project begins with understanding your unique needs, preferences, and lifestyle. We take the 
                  time to listen and collaborate closely with you throughout the design process, ensuring that the 
                  final result truly reflects your personality and enhances your daily life.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Whether we're designing a single room or an entire home, we focus on creating harmonious spaces 
                  with attention to detail, quality materials, and thoughtful touches that make a house feel like home.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 relative h-[500px] mt-8 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <div className="absolute inset-4 bg-deep-green/10 rounded-lg -rotate-3 transform" />
              <div className="absolute inset-0 overflow-hidden rounded-lg shadow-warm">
                <Image 
                  src="/about-interior.jpg" 
                  alt="Interior design philosophy" 
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20 bg-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-grid bg-grid-size opacity-20" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-deep-green">Our Team</h2>
            <div className="w-20 h-0.5 bg-gold mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 text-lg">
              Our talented team brings diverse expertise and a shared passion for exceptional design to every project.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-soft hover:shadow-warm transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
              variants={fadeIn}
            >
              <div className="w-20 h-20 bg-deep-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-deep-green text-2xl font-serif">EC</span>
              </div>
              <h3 className="text-xl font-serif text-deep-green mb-2 text-center">Emma Case</h3>
              <p className="text-taupe mb-4 text-center">Principal Designer & Founder</p>
              <p className="text-gray-700 text-center">
                With over 15 years of experience in interior design, Emma brings her passion for creating 
                beautiful, functional spaces to every project. Her expertise in color, texture, and 
                proportion, combined with her keen attention to detail, ensures that each space she designs 
                perfectly reflects her clients' unique style and needs.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-elegant-pattern bg-pattern-size opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
            variants={fadeIn}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-deep-green">Our Process</h2>
            <div className="w-20 h-0.5 bg-gold mx-auto my-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700 text-lg">
              We follow a collaborative, detailed approach to ensure your vision becomes reality.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="w-20 h-20 bg-deep-green text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <span className="text-2xl font-serif">01</span>
              </div>
              <div className="hidden md:block absolute top-10 left-20 w-full h-0.5 bg-gradient-to-r from-deep-green/70 to-transparent"></div>
              <h3 className="text-2xl font-serif text-deep-green mb-4">Consultation</h3>
              <p className="text-gray-700 leading-relaxed">
                We begin with an in-depth discussion about your vision, needs, and budget to establish 
                the foundation for your project. This personalized approach ensures we truly understand 
                what matters most to you.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="w-20 h-20 bg-deep-green text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <span className="text-2xl font-serif">02</span>
              </div>
              <div className="hidden md:block absolute top-10 left-20 w-full h-0.5 bg-gradient-to-r from-deep-green/70 to-transparent"></div>
              <h3 className="text-2xl font-serif text-deep-green mb-4">Design Development</h3>
              <p className="text-gray-700 leading-relaxed">
                We create detailed design concepts that include space planning, material selections, 
                color palettes, and visual representations of your future space. This collaborative phase 
                refines your vision into practical design solutions.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative"
              variants={fadeIn}
            >
              <div className="w-20 h-20 bg-deep-green text-white rounded-full flex items-center justify-center mb-6 shadow-md">
                <span className="text-2xl font-serif">03</span>
              </div>
              <h3 className="text-2xl font-serif text-deep-green mb-4">Implementation</h3>
              <p className="text-gray-700 leading-relaxed">
                We manage every detail of the installation process, coordinating with contractors 
                and vendors to bring your design to life. Our oversight ensures quality control and 
                a seamless experience from start to finish.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-green/90 to-deep-green/80" />
        <div className="absolute inset-0 bg-elegant-pattern bg-pattern-size opacity-10" />
        
        <motion.div 
          className="container mx-auto px-4 md:px-8 text-center relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-serif mb-6 text-white text-shadow-sm"
            variants={fadeIn}
          >
            Ready to Transform Your Space?
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto mb-8 text-white/90 text-lg"
            variants={fadeIn}
          >
            Let's create a home that's uniquely yours, balancing beauty and functionality in every detail.
          </motion.p>
          <motion.div variants={fadeIn}>
            <Link 
              href="/contact" 
              className="btn btn-secondary inline-block px-8 py-3 bg-white text-deep-green font-medium rounded-full hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Start Your Project
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
} 