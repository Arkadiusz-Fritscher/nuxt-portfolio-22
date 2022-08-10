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
        'fr-callout': [
          'clamp(1.8125rem, 0.9478rem + 3.6893vw, 5.375rem)', // 29/86px
          {
            letterSpacing: '-0.02em',
            lineHeight: '130%',
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
          'clamp(1rem, 0.9697rem + 0.1294vw, 1.125rem)',
          {
            letterSpacing: '0.01em',
            lineHeight: '150%',
          },
        ],
        'fr-h1': [
          'clamp(1.5rem, 0.9691rem + 2.2654vw, 3.6875rem)', // 24/59px
          {
            letterSpacing: '-0.01em',
            lineHeight: '130%',
          },
        ],
        'fr-h2': [
          'clamp(1.25rem, 0.9466rem + 1.2945vw, 2.5rem)', // 20/40px
          {
            letterSpacing: '0em',
            lineHeight: '130%',
          },
        ],
        'fr-h3': [
          'clamp(1.125rem, 0.9126rem + 0.9061vw, 2rem)', // 18/32px
          {
            letterSpacing: '0em',
            lineHeight: '150%',
          },
        ],
        'fr-caption': [
          'clamp(0.875rem, 0.8447rem + 0.1294vw, 1rem)', // 8/16px
          {
            letterSpacing: '0.01em',
            lineHeight: '120%',
          },
        ],
      },
      spacing: {
        'fr-3xl': 'clamp(6.5rem, 3.1019rem + 14.4984vw, 20.5rem)', // 104/328px
        'fr-2xl': 'clamp(14.5rem, 14.1359rem + 1.5534vw, 16rem)',
        'fr-xl': 'clamp(3rem, 2.4235rem + 2.4595vw, 5.375rem)',
        'fr-lg': 'clamp(2.5rem, 2.2421rem + 1.1003vw, 3.5625rem)',
        'fr-md': 'clamp(1rem, 0.8786rem + 0.5178vw, 1.5rem)', // 16 / 24px
        'fr-sm': 'clamp(0.5rem, 0.3786rem + 0.5178vw, 1rem)', // 8/16px
        'fr-xs': 'clamp(0.25rem, 0.1893rem + 0.2589vw, 0.5rem)', // 4/8px
      },
    },
  },
  plugins: [],
};
