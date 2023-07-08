const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['mPlus1Code', ...defaultTheme.fontFamily.sans],
        // inter: '"Inter", sans-serif',
        mPlus1Code: '"M PLUS 1 Code", sans-serif',
        libreBarcode128Text: '"Libre Barcode 128 Text", cursive'
      },
      colors: {
        primary: {
          black: {
            50: '#292929'
          },
          blue: {
            50: '#225D76'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
