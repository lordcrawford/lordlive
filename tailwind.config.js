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
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        georgia: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
