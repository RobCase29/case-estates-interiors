import { Metadata } from 'next';
import HomeContent from '@/components/home/HomeContent';

export const metadata: Metadata = {
  title: 'Case Estates Home Interiors | Luxury Interior Design',
  description: 'Transform your space with sophisticated, personalized interior design solutions by Emma Case.',
  keywords: 'interior design, luxury interiors, home design, Emma Case, Case Estates, interior designer',
};

export default function Home() {
  return <HomeContent />;
}
