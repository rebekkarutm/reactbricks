const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/routes/**/*.tsx',
    './app/components/**/*.tsx',
    './app/react-bricks/**/*.{ts,tsx}',
    './app/root.tsx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        sm: '600px',
        lg: '900px',
        xl: '1200px',
      },
      boxShadow: {
        newsLetter:
          '0 1px 3px 0 rgba(0, 0, 0, 0.1) , 0 5px 15px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
