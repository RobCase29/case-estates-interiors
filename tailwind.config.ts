import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      colors: {
        // Primary Colors
        'deep-green': '#2F4F4F',
        'mahogany': '#654321',
        'taupe': '#B3A492',
        
        // Neutral & Background Colors
        'background': {
          light: '#FAF9F6', // Warm White
          dark: '#1D1D1D',  // Charcoal
        },
        'beige': '#E6DED1',
        
        // Accent Colors
        'primary': '#CDAA7D', // Gold
        'primary-hover': '#A0805A', // Darker Gold for hover
        'navy': '#1D3557',
        'blush': '#E3C6C2',
        
        // Typography Colors
        'text': {
          light: '#2C2C2C', // Dark Gray
          white: '#FFFFFF', // Pure White
          dark: '#202020',  // Soft Black
        },
        project: {
          carpentry: '#8B7355',  // Warm wood tone
          hotel: '#4A6670',      // Modern blue-grey
          bathroom: '#2F4F4F',   // Deep green
          planning: '#8E8279',   // Neutral taupe
          decorating: '#967969', // Warm beige
        },
      },
      backgroundImage: {
        'elegant-pattern': `
          linear-gradient(120deg, rgba(179, 164, 146, 0.05), rgba(179, 164, 146, 0.1)),
          linear-gradient(60deg, rgba(205, 170, 125, 0.05) 25%, transparent 25%, transparent 75%, rgba(205, 170, 125, 0.05) 75%),
          linear-gradient(60deg, rgba(205, 170, 125, 0.05) 25%, transparent 25%, transparent 75%, rgba(205, 170, 125, 0.05) 75%)
        `,
        'warm-texture': `
          linear-gradient(to right, rgba(101, 67, 33, 0.05), rgba(101, 67, 33, 0.02)),
          linear-gradient(to bottom, rgba(205, 170, 125, 0.05), rgba(205, 170, 125, 0.02))
        `,
        'subtle-grid': `
          linear-gradient(rgba(179, 164, 146, 0.05) 1px, transparent 1px),
          linear-gradient(to right, rgba(179, 164, 146, 0.05) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        'pattern-size': '20px 20px',
        'texture-size': '100% 100%',
        'grid-size': '50px 50px',
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-90': '90vh',
        'screen-80': '80vh',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'warm': '0 4px 6px -1px rgba(205, 170, 125, 0.1), 0 2px 4px -1px rgba(205, 170, 125, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 