/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#121212",
          surface: "#1C1C1C",
          elevated: "#252525",
          border: "#2E2E2E"
        },
        cream: {
          DEFAULT: "#F7F3ED",
          soft: "#EFEAE1",
          dark: "#E3DDD2"
        },
        brand: {
          orange: "#FF6B35",
          gold: "#F4B942",
          red: "#C73E1D",
        },
        muted: {
          DEFAULT: "#A6A6A6",
          dark: "#707070",
          light: "#D4D4D4"
        },
        darktext: "#1A1A1A",
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      }
    },
  },
  plugins: [],
}
