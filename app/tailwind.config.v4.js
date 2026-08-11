/** @type {import('tailwindcss').Config} */
export default {
  // IMPORTANT: these paths must cover every file that uses Tailwind classes,
  // otherwise Tailwind purges (removes) all of them and your build has zero styling.
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom brand palette — redone as a softer, less generic sage green
        brand: {
          50: "#F1F5EC",   // page background — light sage
          100: "#E1EAD6",  // card / section tint
          200: "#C6D8B4",
          400: "#8AAE6B",
          600: "#587A42",
          700: "#43602F",
          800: "#334A24",  // header / footer dark green
          900: "#26361B",
        },
        sand: "#FAF9F5",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
