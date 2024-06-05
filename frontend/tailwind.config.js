/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 5s none',

        'loop-scroll': 'loop-scroll 50s linear infinite',
        'loop-scroll-reverse' : 'loop-scroll-reverse 50s linear infinite',
      },

      keyframes: {

        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },

        'loop-scroll-reverse': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },

        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },

      },

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

