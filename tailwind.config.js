/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Apps/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        marcha: '#F65E44',
        marchaDark: '#dd553d',
        marchaLight: '#faf8f2',
      },
    },
  },
  plugins: [],
}
