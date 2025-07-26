/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      animation: {
        background: "gradient 20s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(270deg, #1e3a8a, #0f172a, #1e3a8a)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'deep-dark': '#0a0a0a',
        'glass-dark': 'rgba(30, 41, 59, 0.6)',
      },
    },
  },
  plugins: [],
};
