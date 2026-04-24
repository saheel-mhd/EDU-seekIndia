/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#516ED6",
          yellow: "#F8BF40",
          red: "#EB4331",
          dark: "#231C1E",
          light: "#F3F5ED",
        },
      },
      fontFamily: {
        sans: [
          "Neulis",
          "Plus Jakarta Sans",
          "Outfit",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "Neulis",
          "Plus Jakarta Sans",
          "Outfit",
          "Inter",
          "sans-serif",
        ],
      },
      boxShadow: {
        glow: "0 0 40px rgba(81, 110, 214, 0.35)",
        "glow-yellow": "0 0 40px rgba(248, 191, 64, 0.35)",
        "glow-red": "0 0 40px rgba(235, 67, 49, 0.30)",
        soft: "0 20px 60px -20px rgba(35, 28, 30, 0.25)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "noise":
          "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        "float": "float 7s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        "marquee": "marquee 32s linear infinite",
        "gradient-x": "gradient-x 10s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.7" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
