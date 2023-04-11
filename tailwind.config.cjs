/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#7C3AED',
        'secondary-color': '#9F67FF',
      },
    },
  },
  plugins: [],
}
