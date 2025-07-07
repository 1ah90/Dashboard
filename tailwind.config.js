/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],

  theme: {
    extend: {
      fontFamily: {
        dmsans: ["'DM Sans'", 'sans-serif'],
      },
      boxShadow: {
        custom: '0 16px 32px -12px #585c5f61',
      },

      colors: {
        gray: {
          DEFAULT: '#8690a0',
        },

        blue: {
          DEFAULT: '#3A8DFF',
          dark: '#221C86',
        },
        purple: {
          DEFAULT: '#A17EFF',
          dark: '#844BE0',
        },
        green: {
          DEFAULT: '#00DFA2',
          light: '#00B885',
          dark: '#00986EFD',
        },
        orange: '#FF6A3D',
      },
    },
  },
  plugins: [],
};
