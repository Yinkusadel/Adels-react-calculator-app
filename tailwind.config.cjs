const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        leagueSpartan: ['League Spartan', ...defaultTheme.fontFamily.sans],
        Lexend: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        themeOne: {
          10: 'hsl(222deg 26% 31%)',
          20: 'hsl(223deg 31% 20%)',
          30: 'hsl(6deg 63% 50%)',
          40: 'hsl(9deg 91% 64%)',
          50: 'hsl(0deg 0% 100%)',
          60: 'hsl(224deg 36% 15%)',
          70: 'hsl(224deg 36% 15%)',
          80: 'hsl(30deg 25% 89%)',
          90: 'hsl(0deg 0% 98%)',
          100: 'hsl(221deg 14% 31%)',
          110: 'hsl(28deg 16% 65%)',
          120: 'hsl(225deg 21% 49%)',
          130: 'hsl(224deg 51% 76%)',
          140: 'hsl(224deg 28% 35%)',
          150: 'hsl(225deg 21% 49%)',
          160: 'hsl(224deg 51% 76%)',
          170: 'hsl(224deg 28% 35%)',
          180: 'hsl(6deg 63% 50%)',
          190: 'hsl(6deg 93% 67%)',
          200: 'hsl(6deg 70% 34%)',
          white: 'hsl(0deg 0% 98%)',
        },
        themeTwo: {
          30: 'hsl(25deg 98% 40%)',
          40: 'hsl(26deg 96% 60%)',
        },
        themeThree: {
          30: 'hsl(176deg 100% 44%)',
          40: 'hsl(177deg 92% 70%)',
        },
        socialMediaFill: {
          1: '#1da1e2',
          2: '#0072b1',
          3: '#10eb23',
          4: '#3726ab',
          5: '#f70713',
        },
      },
      backgroundImage: {
        headerimage: "url('/mobile-blue-bg.png')",
        check: "url('/icon-check.svg')",
      },
      boxShadow: {
        ash: 'inset 0 -4px 0 hsl(28deg 16% 65%)',
        darkblue: 'inset 0 -4px 0 hsl(224deg 28% 35%)',
        red: 'inset 0 -4px 0 hsl(6deg 70% 34%)',
      },
    },
  },
  plugins: [],
};
