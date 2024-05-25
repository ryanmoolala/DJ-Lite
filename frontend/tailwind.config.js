/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        outline: '2px 2px 0px #000', // Customize the shadow here
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-outline': {
          textShadow: '2px 2px 0px #000', // Customize the shadow here
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}

