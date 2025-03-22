import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '../Hero';

// Mock the Link component to avoid router issues
jest.mock('next/link', () => {
  return function MockLink({ children, href, ...rest }: { children: React.ReactNode; href: string; [key: string]: any }) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  };
});

describe('Hero Component', () => {
  // Test rendering
  describe('Content Rendering', () => {
    beforeEach(() => {
      render(<Hero />);
    });

    test('renders main heading correctly', () => {
      const headingElement = screen.getByRole('heading', { level: 1, name: /Case Estates.*Home Interiors/i });
      expect(headingElement).toBeInTheDocument();
      expect(headingElement).toHaveClass('mocked-playfair');
    });

    test('renders subheading correctly', () => {
      const subheadingElement = screen.getByText(/Transforming spaces into timeless sanctuaries/i);
      expect(subheadingElement).toBeInTheDocument();
    });

    test('renders the background image with correct attributes', () => {
      const imgElement = screen.getByAltText(/Stunning interior design portfolio showcase/i);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute('src');
      expect(imgElement).toHaveAttribute('alt', 'Stunning interior design portfolio showcase');
    });
  });

  // Test navigation links
  describe('Navigation Links', () => {
    beforeEach(() => {
      render(<Hero />);
    });

    test('renders View Portfolio button with correct attributes', () => {
      const viewPortfolioLink = screen.getByRole('link', { name: /View Portfolio/i });
      expect(viewPortfolioLink).toBeInTheDocument();
      expect(viewPortfolioLink).toHaveAttribute('href', '/portfolio');
      expect(viewPortfolioLink).toHaveAttribute('aria-label', 'View Portfolio');
    });

    test('renders Start Your Project button with correct attributes', () => {
      const startProjectLink = screen.getByRole('link', { name: /Start Your Project/i });
      expect(startProjectLink).toBeInTheDocument();
      expect(startProjectLink).toHaveAttribute('href', '/contact');
      expect(startProjectLink).toHaveAttribute('aria-label', 'Start Your Project');
    });
  });

  // Test accessibility
  describe('Accessibility', () => {
    test('applies proper role to hero section', () => {
      render(<Hero />);
      const heroSection = screen.getByRole('banner');
      expect(heroSection).toBeInTheDocument();
    });

    test('buttons have proper focus indicators', () => {
      render(<Hero />);
      const viewPortfolioLink = screen.getByRole('link', { name: /View Portfolio/i });
      const startProjectLink = screen.getByRole('link', { name: /Start Your Project/i });
      
      expect(viewPortfolioLink).toHaveClass('focus:outline-none');
      expect(viewPortfolioLink).toHaveClass('focus:ring-2');
      
      expect(startProjectLink).toHaveClass('focus:outline-none');
      expect(startProjectLink).toHaveClass('focus:ring-2');
    });
  });
  
  // Test interactions (with userEvent)
  describe('User Interactions', () => {
    test('portfolio link is correctly configured', async () => {
      const user = userEvent.setup();
      render(<Hero />);
      
      const viewPortfolioLink = screen.getByRole('link', { name: /View Portfolio/i });
      expect(viewPortfolioLink).toHaveAttribute('href', '/portfolio');
      
      // We can add more complex interaction tests once we have a router mock
    });
  });
}); 