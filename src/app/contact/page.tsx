'use client';

import { motion } from 'framer-motion';
import ContactForm from '@/components/contact/ContactForm';

export default function Contact() {
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
            Get in Touch
          </h1>
          <p className="text-lg text-text-light/80 max-w-2xl mx-auto">
            Ready to transform your space? We'd love to hear from you. Fill out the form below
            or reach out directly through email or phone.
          </p>
        </motion.div>

        <ContactForm />
      </div>
    </main>
  );
} 