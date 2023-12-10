/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'card-bg': "url('img/card-bg.png')",
      }),
      width: {
        '30p': '30%',
      },
    },
  },
  plugins: [],
}

