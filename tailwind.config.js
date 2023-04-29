/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      maxHeight: {
        '90vh': '90vh'
      },
      minHeight: {
        '30vh': '30vh',
        '40vh': '40vh',
        '60vh': '60vh'
      }},
  },
  plugins: [],
};