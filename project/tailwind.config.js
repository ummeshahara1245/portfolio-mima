/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        sky: {
          400: '#38bdf8',
          500: '#0ea5e9',
          300: '#7dd3fc',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'reverse-spin': 'spin 12s linear infinite reverse',
        'fade-in': 'fadeIn 0.8s ease forwards',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
