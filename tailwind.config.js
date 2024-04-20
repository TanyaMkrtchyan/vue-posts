const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: "#E1E1E1",
      darkGray: "#E3E3E3",
      orange: "#F8AF6C",
      error: '#E11D48'
    },
    fontFamily: {
      'montserrat': 'Montserrat'
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      margin: {
        7: '1.875rem',
        8: '2.215rem',
        10: '2.625rem',
      },
      padding: {
        7: '1.875rem',
        8: '2.125rem',
        10: '2.625rem',
        66: '16.5rem'
      },
      lineHeight: {
        'normal': 'normal'
      },
      borderRadius: {
        'md': '1.875rem',
        'xl': '2.5rem',
        '2xl': '2.75rem',
      },
      width: {
        '28': '6.875rem',
        '45': '11.625rem',
        '98': '26.875rem',
        '182': '50.125rem'
      },
      height: {
        '9': '2.3125rem',
        '82': '21rem',
        '102': '29.375rem'
      },
      minHeight: {
        '58': '14.875rem',
        '98': '25.625rem',
        '102': '29.375rem',
      }
    }
  },
  plugins: [],
}

