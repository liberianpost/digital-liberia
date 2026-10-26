/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          red: {
            light: "#EF4444",
            DEFAULT: "#DC2626",
            dark: "#B91C1C",
          },
          blue: {
            light: "#3B82F6",
            DEFAULT: "#2563EB",
            dark: "#1D4ED8",
          },
          gold: {
            light: "#FCD34D",
            DEFAULT: "#F59E0B",
            dark: "#D97706",
          },
          ink: {
            DEFAULT: "#0A0A0A",
            soft: "#171717",
          },
        },
      },
      boxShadow: {
        "gold-glow": "0 0 24px rgba(245, 158, 11, 0.35)",
        "gold-glow-lg": "0 0 48px rgba(245, 158, 11, 0.45)",
      },
    },
  },
  plugins: [],
};
