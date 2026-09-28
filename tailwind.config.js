/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#063B5A',
          dark: '#04273C',
          royal: '#063A78',
          light: '#0E557F'
        },
        teal: {
          DEFAULT: '#079B84',
          dark: '#057A68',
          light: '#09BEA2',
          soft: '#E6F6F4'
        },
        gold: {
          DEFAULT: '#E5B52B',
          dark: '#C4971E',
          light: '#F8CE53',
          soft: '#FFF9E6'
        },
        health: {
          bg: '#F3F6F8',
          card: '#FFFFFF',
          text: '#183247',
          muted: '#5A6E7F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'health-sm': '0 2px 8px rgba(6, 59, 90, 0.06)',
        'health': '0 8px 24px rgba(6, 59, 90, 0.08)',
        'health-lg': '0 16px 40px rgba(6, 59, 90, 0.12)',
        'gold-glow': '0 4px 20px rgba(229, 181, 43, 0.35)',
        'teal-glow': '0 4px 20px rgba(7, 155, 132, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
