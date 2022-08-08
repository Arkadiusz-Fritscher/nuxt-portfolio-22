/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        'fr-hero': [
          'clamp(2rem, 0.9078rem + 4.6602vw, 6.5rem)',
          {
            letterSpacing: '-0.02em',
            lineHeight: '120%',
          },
        ],
        'fr-body': [
          'clamp(1rem, 0.8028rem + 0.8414vw, 1.8125rem)',
          {
            letterSpacing: '0.01em',
            lineHeight: '150%',
          },
        ],
        'fr-base': [
          'clamp(1rem, 0.9393rem + 0.2589vw, 1.25rem)',
          {
            letterSpacing: '0.01em',
            lineHeight: '150%',
          },
        ],
      },
    },
  },
  plugins: [],
};
