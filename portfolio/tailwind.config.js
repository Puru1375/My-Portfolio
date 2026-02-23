/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#10B981", // The "Oliver" Emerald Green
        dark: "#111827",    // Professional Dark Grey
        light: "#F9FAFB",   // Clean Off-White Background
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern clean font
      }
    },
  },
  plugins: [],
}