import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About | Case Estates Home Interiors',
  description: 'Learn about our design philosophy, our team, and our approach to creating beautiful, functional spaces.',
  keywords: 'interior design, home interiors, about us, design philosophy, case estates',
};

export default function AboutPage() {
  return <AboutContent />;
} 