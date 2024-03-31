/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        jakarta:["Plus Jakarta Sans", "sans-serif"],
        encodedSans:["Encoded Sans", "sans-serif"],
      },
      width:{
        '89': '358px',
      },
      boxShadow:{
        'card-shadow': '0px 4px 8px 0px rgba(0, 0, 30, 0.12)'
      }
    },
  },
  plugins: [],
}

