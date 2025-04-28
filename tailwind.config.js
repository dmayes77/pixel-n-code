/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    screens: {
      mobile: "0px", // Start from 0px (mobile first)
      tablet: "640px", // Tablet (default sm)
      laptop: "1024px", // Laptop (default lg)
      desktop: "1280px", // Desktop (default xl)
    },
    extend: {
      // You can extend colors, fonts, etc here later
    },
  },
  plugins: [],
};
