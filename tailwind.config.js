/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E88643',
        },
        secondary: '#7A5036',
        warning: '#EEC32A',
      },
    },
  },
  plugins: [],
};
