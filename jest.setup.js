// jest.setup.js
const React = require('react');
require('@testing-library/jest-dom');

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
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => React.createElement('div', props, children),
    h1: ({ children, ...props }) => React.createElement('h1', props, children),
    h2: ({ children, ...props }) => React.createElement('h2', props, children),
    p: ({ children, ...props }) => React.createElement('p', props, children),
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

// Mock next/font
jest.mock('next/font/google', () => ({
  Playfair_Display: () => ({
    className: 'mocked-playfair',
    style: { fontFamily: 'mocked-playfair' },
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