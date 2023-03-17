/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      width:{
        'custom-width': '29rem'
      },
      height: {
        'custom-height': '25rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
