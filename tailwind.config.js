/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jura)','var(--font-k2d)']
      },
      colors: {
        'bunker': {
          50: '#f2f9f9',
          100: '#deeeef',
          200: '#c1dce0',
          300: '#96c2ca',
          400: '#63a1ad',
          500: '#488592',
          600: '#3e6e7c',
          700: '#375b67',
          800: '#344d56',
          900: '#2f424a',
          950: '#141f24',
        }
      }
    }
  },
  plugins: [],
}

