/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050816",
          dark: "#050816",
          card: "#0B1020",
          cardBorder: "rgba(0, 229, 255, 0.15)",
          cyan: "#00E5FF",
          blue: "#2563EB",
          purple: "#8B5CF6",
          violet: "#7C3AED",
          white: "#F8FAFC",
          muted: "#94A3B8",
        },
        base: {
          950: "#050816",
          900: "#0B1020",
          850: "#0e152d",
          800: "#131b38",
          700: "#1b274e",
        },
        primary: {
          DEFAULT: "#00E5FF",
          400: "#38bdf8",
          500: "#00E5FF",
          600: "#0284c7",
        },
        secondary: {
          DEFAULT: "#8B5CF6",
          400: "#a78bfa",
          500: "#8B5CF6",
          600: "#7c3aed",
        },
        accent: {
          DEFAULT: "#00E5FF",
          400: "#22d3ee",
          500: "#00E5FF",
          600: "#0891b2",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0, 229, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 229, 255, 0.05) 1px, transparent 1px)",
        "dots-pattern":
          "radial-gradient(circle, rgba(0, 229, 255, 0.08) 1px, transparent 1px)",
        "cyber-gradient":
          "linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(139,92,246,0.15) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 40s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s infinite",
        scanline: "scanline 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 35px -5px rgba(0, 229, 255, 0.45)",
        "glow-purple": "0 0 35px -5px rgba(139, 92, 246, 0.45)",
        "glow-blue": "0 0 35px -5px rgba(37, 99, 235, 0.45)",
        cyber: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
