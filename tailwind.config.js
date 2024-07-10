/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        museomoderno: ["MuseoModerno", "sans-serif"],
        limelight: ["Limelight", "sans-serif"],
      },
    },
  },
  plugins: [],
}
