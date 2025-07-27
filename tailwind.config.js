/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'deep-dark': '#050505',
        'glass-dark': 'rgba(10, 10, 10, 0.7)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(270deg, #1e3a8a, #0f172a, #1e3a8a)',
      },
      animation: {
        'background-fade': 'backgroundFade 20s ease infinite',
      },
      keyframes: {
        backgroundFade: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
