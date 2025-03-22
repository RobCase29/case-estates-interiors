import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About | Case Estates Home Interiors',
  description: 'Learn about our design philosophy, our team, and our approach to creating beautiful, functional spaces.',
  keywords: 'interior design, home interiors, about us, design philosophy, case estates',
};

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Hero Section */}
      <section className="w-full relative py-20 bg-deep-green text-white">
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            At Case Estates Home Interiors, we create personalized spaces that reflect your unique style and enhance your everyday living.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold mb-6 text-deep-green">Our Design Philosophy</h2>
              <p className="mb-4 text-gray-700">
                We believe that great design should be both beautiful and functional. Our approach combines timeless 
                aesthetics with practical solutions that make your home not just visually stunning, but also perfectly 
                tailored to how you live.
              </p>
              <p className="mb-4 text-gray-700">
                Every project begins with understanding your unique needs, preferences, and lifestyle. We take the 
                time to listen and collaborate closely with you throughout the design process, ensuring that the 
                final result truly reflects your personality and enhances your daily life.
              </p>
              <p className="text-gray-700">
                Whether we're designing a single room or an entire home, we focus on creating harmonious spaces 
                with attention to detail, quality materials, and thoughtful touches that make a house feel like home.
              </p>
            </div>
            <div className="md:w-1/2 relative h-[400px]">
              <Image 
                src="/about-interior.jpg" 
                alt="Interior design philosophy" 
                fill
                className="object-cover rounded-lg shadow-warm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-deep-green">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold mb-2">Elizabeth Montgomery</h3>
              <p className="text-taupe mb-1">Principal Designer</p>
              <p className="text-gray-700">
                With over 15 years of experience, Elizabeth brings an expert eye for color, 
                texture, and proportion to every project.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold mb-2">James Wilson</h3>
              <p className="text-taupe mb-1">Interior Architect</p>
              <p className="text-gray-700">
                James specializes in creating functional layouts that maximize space 
                and enhance the flow of your home.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <h3 className="text-xl font-bold mb-2">Sarah Chen</h3>
              <p className="text-taupe mb-1">Design Consultant</p>
              <p className="text-gray-700">
                Sarah works closely with clients to understand their vision and translate 
                it into beautifully curated spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center text-deep-green">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Consultation</h3>
              <p className="text-gray-700">
                We begin with an in-depth discussion about your vision, needs, and budget to establish 
                the foundation for your project.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Design Development</h3>
              <p className="text-gray-700">
                We create detailed design concepts that include space planning, material selections, 
                and visual representations of your future space.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-deep-green text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-700">
                We manage every detail of the installation process, coordinating with contractors 
                and vendors to bring your design to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-taupe/10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6 text-deep-green">Ready to Transform Your Space?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Let's create a home that's uniquely yours, balancing beauty and functionality in every detail.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-deep-green text-white font-medium rounded hover:bg-deep-green/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
} 