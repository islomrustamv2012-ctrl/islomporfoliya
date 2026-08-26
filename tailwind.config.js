/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#030712",
          900: "#070c1a",
          850: "#0b1222",
          800: "#0c1424",
          700: "#131e33",
        },
        primary: {
          DEFAULT: "#3B82F6",
          50: "#eff6ff",
          400: "#60a5fa",
          500: "#3B82F6",
          600: "#2563eb",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          400: "#a78bfa",
          500: "#8B5CF6",
          600: "#7c3aed",
        },
        accent: {
          DEFAULT: "#06B6D4",
          400: "#22d3ee",
          500: "#06B6D4",
          600: "#0891b2",
        },
        indigo: {
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "dots-pattern":
          "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        blob: "blob 14s infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "spin-slower": "spin 30s linear infinite",
        marquee: "marquee 28s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        blink: "blink 1s step-end infinite",
        shimmer: "shimmer 2.5s infinite",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59,130,246,0.5)",
        "glow-purple": "0 0 40px -10px rgba(139,92,246,0.5)",
        "glow-cyan": "0 0 40px -10px rgba(6,182,212,0.5)",
        "glow-indigo": "0 0 40px -10px rgba(99,102,241,0.5)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};
