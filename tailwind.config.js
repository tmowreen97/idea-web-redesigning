/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },

      },
      colors:{
        // primary: '#DDD8D4',
        primary: '#301B3D',
        // secondary: '#978FA8',

        secondary: '#A593B1',
        tertiary : '#1D0E25',
        // footer_bg: '#CFC5CE',

        footer_bg: '#564C6A',
        accent_1 : '#9C6DB5',
        accent_2 : '#9C36FC',
        light_accent_1: '#AF8AC3',
        light_accent_2: '#AE5BFC',
        // primary_text : '#301B3D',

        primary_text : '#F6F6F6',
        // secondary_text : '#301B3D',

        secondary_text : '#DAD3F5',
        dark_text : '#301B3D',
        button_bg : '#C0B4D3',
        button_highlight: '#C07FFD',
        light_bg : '#E9DCF9',
        shaded_bg: '#4b3c5c',
        dark_bg : '#170927'
      },
      fontFamily: {
        sans: ['var(--font-urbanist)'],
      },
      animation:{
        'wiggle': 'wiggle 2s ease-in-out infinite',
        // 'bounce-slow': 'bounce 2s ease-in-out infinite',
        'pulsing': 'pulsing 2s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
