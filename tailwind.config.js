/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '350px',
        tall: {
          raw: '(min-height: 1200px)',
        },
      },
      backgroundImage: {
        opening: 'linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.3)),url(/backgrounds/openingbackground-minimized.jpg)',
        skills: 'linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.3)),url(/backgrounds/skills-background.webp)',
        contact: 'linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.3)),url(/backgrounds/contact-background.webp)',
      },
      backgroundPosition: {
        zero: '50% 50%',
      },
      animation: {
        backgroundAnimation: 'animatedBackground 18000s linear infinite alternate',
        brightness: 'animatedBrightness 3s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
