/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        opening:
          'linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.3)),url(/backgrounds/opening-background.jpg)',
      },
      backgroundPosition: {
        zero: '50% 50%',
      },
      animation: {
        backgroundAnimation:
          'animatedBackground 12000s linear infinite alternate',
        brightness: 'animatedBrightness 3s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
