// jest.setup.js
const React = require('react');
require('@testing-library/jest-dom');
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '',
    query: {},
    asPath: '',
    push: jest.fn(),
    replace: jest.fn(),
  }),
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  // Remove Next.js specific props that aren't valid on <img>
  default: ({ fill, priority, placeholder, blurDataURL, loader, ...rest }) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return React.createElement('img', rest);
  },
}));

// Mock framer-motion
jest.mock('framer-motion', () => {
  const omitMotionProps = ({
    initial,
    animate,
    exit,
    whileInView,
    transition,
    viewport,
    variants,
    ...rest
  }) => rest;

  return {
    motion: {
      div: ({ children, ...props }) =>
        React.createElement('div', omitMotionProps(props), children),
      h1: ({ children, ...props }) =>
        React.createElement('h1', omitMotionProps(props), children),
      h2: ({ children, ...props }) =>
        React.createElement('h2', omitMotionProps(props), children),
      p: ({ children, ...props }) =>
        React.createElement('p', omitMotionProps(props), children),
    },
    AnimatePresence: ({ children }) => React.createElement(React.Fragment, null, children),
  };
});

// Mock next/font
jest.mock('next/font/google', () => ({
  Playfair_Display: () => ({
    className: 'mocked-playfair',
    variable: 'mocked-playfair',
    subsets: ['latin'],
  }),
  Inter: () => ({
    className: 'mocked-inter',
    variable: 'mocked-inter',
    subsets: ['latin'],
  }),
  Lora: () => ({
    className: 'mocked-lora',
    variable: 'mocked-lora',
    subsets: ['latin'],
  }),
}));

// Suppress console errors during tests
const originalConsoleError = console.error;
console.error = (...args) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('Warning: ReactDOM.render') ||
      args[0].includes('Warning: React.createElement'))
  ) {
    return;
  }
  originalConsoleError(...args);
}; 