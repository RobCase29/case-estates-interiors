'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-subtle-grid bg-grid-size opacity-30" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-background-light/90 backdrop-blur-sm rounded-2xl shadow-soft p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-light/80 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-full border border-taupe/30 focus:border-deep-green focus:ring focus:ring-deep-green/20 focus:ring-opacity-50 transition-shadow duration-200 bg-background-light"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-light/80 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-full border border-taupe/30 focus:border-deep-green focus:ring focus:ring-deep-green/20 focus:ring-opacity-50 transition-shadow duration-200 bg-background-light"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-light/80 mb-2">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-full border border-taupe/30 focus:border-deep-green focus:ring focus:ring-deep-green/20 focus:ring-opacity-50 transition-shadow duration-200 bg-background-light"
                value={formState.phone}
                onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-light/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 rounded-2xl border border-taupe/30 focus:border-deep-green focus:ring focus:ring-deep-green/20 focus:ring-opacity-50 transition-shadow duration-200 bg-background-light resize-none"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold hover:bg-gold/90 text-white font-medium transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          <div className="mt-12 pt-8 border-t border-taupe/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-serif text-text-dark mb-2">Email Us</h3>
                <a href="mailto:emmahcase@gmail.com" className="text-deep-green hover:text-deep-green/80">
                  emmahcase@gmail.com
                </a>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-serif text-text-dark mb-2">Call Us</h3>
                <a href="tel:617-285-1044" className="text-deep-green hover:text-deep-green/80">
                  (617) 285-1044
                </a>
              </div>
            </div>
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 bg-deep-green text-white text-center py-4 rounded-lg shadow-md"
            >
              Thank you for reaching out! We'll be in touch soon.
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 bg-red-600 text-white text-center py-4 rounded-lg shadow-md"
            >
              {error}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
