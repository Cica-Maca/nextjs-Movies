/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme('colors'),
        default: '#443C68',
        itemBackground: '#18122B',
      }),
    },
  },
  plugins: [require('tailwindcss-font-inter')],
};
