
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: "hsl(var(--border))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        sand: {
          50: "#FDF8F3",  // Lightest sand
          100: "#FCF1E7", // Very light sand
          200: "#F9E3CF", // Light sand
          300: "#F5B971", // Medium sand
          400: "#F3AD5C", // Dark sand
          500: "#C17817", // Primary sand
          600: "#B06A15", // Rich sand
          700: "#8A5411", // Deep sand
          800: "#633D0C", // Very deep sand
          900: "#3C2607", // Darkest sand
        },
        terracotta: {
          50: "#FDF5F3",
          100: "#FAEBE7",
          200: "#F5D7CF",
          300: "#E5A391",
          400: "#D67D66",
          500: "#C75A3F",
          600: "#B44832",
          700: "#8D3726",
          800: "#66281B",
          900: "#3F1910",
        },
        ochre: {
          50: "#FEFBF3",
          100: "#FDF7E7",
          200: "#FBEFCF",
          300: "#F7DB91",
          400: "#F3CD6C",
          500: "#EFBF47",
          600: "#D9AD3F",
          700: "#AA8731",
          800: "#7C6224",
          900: "#4D3C16",
        },
        emerald: {
          300: "#34D399",
          400: "#2EBE89",
          500: "#28A878",
        },
      },
      backgroundImage: {
        'tribal-pattern': "url('/lovable-uploads/tribal-pattern.png')",
        'geometric-pattern': "url('/lovable-uploads/geometric-pattern.png')",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
      borderRadius: {
        'african': '2rem 1rem 2rem 1rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
