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
        body: ['var(--font-lora)'],
      },
      colors: {
        // Primary Colors
        'deep-green': '#4C5869',
        'mahogany': '#654321',
        'taupe': '#D5DBD9',
        
        // Neutral & Background Colors
        'background': {
          light: '#FFFBF8',
          dark: '#1D1D1D',
        },
        'beige': '#FFFBF8',
        
        // Accent Colors
        'primary': '#4C5869',
        'primary-hover': '#3A4552',
        'navy': '#4C5869',
        'blush': '#E3C6C2',
        
        // Typography Colors
        'text': {
          light: '#4C5869',
          white: '#FFFFFF',
          dark: '#2C2C2C',
        },
        project: {
          carpentry: '#4C5869',
          hotel: '#4C5869',
          bathroom: '#4C5869',
          planning: '#D5DBD9',
          decorating: '#D5DBD9',
        },
      },
      backgroundImage: {
        'elegant-pattern': `
          linear-gradient(120deg, rgba(213, 219, 217, 0.05), rgba(213, 219, 217, 0.1)),
          linear-gradient(60deg, rgba(76, 88, 105, 0.05) 25%, transparent 25%, transparent 75%, rgba(76, 88, 105, 0.05) 75%),
          linear-gradient(60deg, rgba(76, 88, 105, 0.05) 25%, transparent 25%, transparent 75%, rgba(76, 88, 105, 0.05) 75%)
        `,
        'warm-texture': `
          linear-gradient(to right, rgba(76, 88, 105, 0.05), rgba(76, 88, 105, 0.02)),
          linear-gradient(to bottom, rgba(213, 219, 217, 0.05), rgba(213, 219, 217, 0.02))
        `,
        'subtle-grid': `
          linear-gradient(rgba(213, 219, 217, 0.05) 1px, transparent 1px),
          linear-gradient(to right, rgba(213, 219, 217, 0.05) 1px, transparent 1px)
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