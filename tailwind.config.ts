import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
      },
      colors: {
        background: {
          light: '#FAF9F6',
          dark: '#1D1D1D',
        },
        gold: {
          DEFAULT: '#CDAA7D',
          hover: '#A0805A',
        },
        taupe: {
          DEFAULT: '#B3A492',
          light: '#D5CAC3',
          dark: '#8C7B6B',
        },
        navy: {
          DEFAULT: '#1D3557',
          light: '#2B4A7A',
          dark: '#132541',
        },
        text: {
          light: '#2C2C2C',
          dark: '#FFFFFF',
        }
      },
      spacing: {
        '128': '32rem',
      },
      height: {
        'screen-90': '90vh',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};

export default config; 