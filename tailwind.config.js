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
        'glass-dark': 'rgba(15, 15, 15, 0.7)',
        'glass-light': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(270deg, #1e3a8a, #0f172a, #1e3a8a)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        'background-fade': 'backgroundFade 20s ease infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
      keyframes: {
        backgroundFade: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.36)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      addUtilities({
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
      });
    },
  ],
};
