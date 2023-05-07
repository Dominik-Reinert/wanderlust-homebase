/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      minWidth: {
        "25vw": "25vw",
        "50vw": "50vw",
        "75vw": "75vw"
      },
      maxHeight: {
        '90vh': '90vh'
      },
      minHeight: {
        '10vh': '10vh',
        '20vh': '20vh',
        '30vh': '30vh',
        '40vh': '40vh',
        '50vh': '50vh',
        '60vh': '60vh',
        '70vh': '70vh',
        '80vh': '80vh'
      }},
  },
  plugins: [],
};
