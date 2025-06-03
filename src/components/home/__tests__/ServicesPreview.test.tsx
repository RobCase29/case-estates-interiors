import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import ServicesPreview from '../ServicesPreview';

// Mock the Link component
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...rest }: { children: React.ReactNode; href: string; [key: string]: any }) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  };
});

describe('ServicesPreview Component', () => {
  describe('Content Rendering', () => {
    beforeEach(() => {
      render(<ServicesPreview />);
    });

    test('renders section title correctly', () => {
      const titleElement = screen.getByRole('heading', { level: 2, name: /Our Services/i });
      expect(titleElement).toBeInTheDocument();
    });

    test('renders all service cards', () => {
      const serviceCards = screen.getAllByRole('heading', { level: 3 });
      expect(serviceCards).toHaveLength(3);
      expect(screen.getByText('Interior Design')).toBeInTheDocument();
      expect(screen.getByText('Space Planning')).toBeInTheDocument();
      expect(screen.getByText('Design Consultation')).toBeInTheDocument();
    });

    test('renders service descriptions', () => {
      expect(screen.getByText(/Full-service interior design/i)).toBeInTheDocument();
      expect(screen.getByText(/Intelligent space utilization/i)).toBeInTheDocument();
      expect(screen.getByText(/Expert guidance/i)).toBeInTheDocument();
    });

    test('renders features for each service', () => {
      expect(screen.getByText('Custom furniture selection')).toBeInTheDocument();
      expect(screen.getByText('Traffic flow optimization')).toBeInTheDocument();
      expect(screen.getByText('Color consultation')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    test('renders "View All Services" link with correct attributes', () => {
      render(<ServicesPreview />);
      const viewAllLink = screen.getByRole('link', { name: /View all our interior design services/i });
      expect(viewAllLink).toBeInTheDocument();
      expect(viewAllLink).toHaveAttribute('href', '/services');
    });

    test('renders individual service links with correct hrefs', () => {
      render(<ServicesPreview />);
      const learnMoreLinks = screen.getAllByText(/Learn more/i);
      expect(learnMoreLinks).toHaveLength(3);
      expect(learnMoreLinks[0]).toHaveAttribute('href', '/services#interior-design');
      expect(learnMoreLinks[1]).toHaveAttribute('href', '/services#space-planning');
      expect(learnMoreLinks[2]).toHaveAttribute('href', '/services#design-consultation');
    });
  });

  describe('Accessibility', () => {
    test('icons have proper aria labels', () => {
      render(<ServicesPreview />);
      const icons = screen.getAllByRole('img', { hidden: true });
      icons.forEach(icon => {
        expect(icon).toHaveAttribute('aria-hidden', 'true');
      });
    });
  });
}); 