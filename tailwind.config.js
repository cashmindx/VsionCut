/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        red: {
          600: '#e11d48',
          700: '#be123c',
        },
        gray: {
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        black: '#000000',
        indigo: {
          600: '#4b5bd4',
          900: '#191e4d',
        },
        purple: {
          500: '#a78bfa',
          800: '#4c1d95',
        },
      },
      opacity: {
        30: '0.3',
        60: '0.6',
      },
      zIndex: {
        10: '10',
        50: '50',
      },
      height: {
        'screen-sm': '500px',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'credits-roll': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 5px #e11d48' },
          '50%': { boxShadow: '0 0 20px #e11d48' },
        },
        'pan-blur': {
          '0%': {
            transform: 'translateX(-30px)',
            filter: 'blur(8px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.7s ease-out forwards',
        'credits-roll': 'credits-roll 1s ease-out forwards',
        'glow': 'glow 1.5s infinite',
        'pan-blur': 'pan-blur 1s ease-out forwards',
      },
    },
  },
  plugins: [],
};
