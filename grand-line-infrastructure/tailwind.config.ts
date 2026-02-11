import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050A10',
          900: '#0B1320',
          800: '#0F1C2E',
          700: '#1A2C42',
        },
        gold: {
          400: '#F4D03F',
          500: '#D4A017',
          600: '#B7880E',
        },
        alert: {
          500: '#C0392B',
        },
        parchment: '#F0E6D2',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        display: ['Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fog-drift': 'fog 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        fog: {
          '0%': { transform: 'translateX(0) opacity(0.3)' },
          '50%': { transform: 'translateX(-10%) opacity(0.5)' },
          '100%': { transform: 'translateX(0) opacity(0.3)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
};

export default config;
