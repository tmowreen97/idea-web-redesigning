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
        primary_2: '#CECCD3',

        // primary_2: '#CBC8D3',
        primary: '#301B3D',
        // secondary_2: '#978FA8',
        secondary_2: '#9D97AA',
        secondary: '#A593B1',
        tertiary : '#1D0E25',
        // footer_bg: '#CFC5CE',

        footer_bg: '#a492b0',
        accent_1 : '#9C6DB5',
        accent_2 : '#9C36FC',
        light_accent_1: '#AF8AC3',
        light_accent_2: '#AE5BFC',
        // primary_text : '#301B3D',

        primary_text : '#F6F6F6',
        // secondary_text : '#301B3D',

        secondary_text : '#cfc6e8',
        dark_text_2: '#F6F6F6',
        dark_text: '#301b3d',
        // dark_text : '#301B3D',
        button_bg : '#C0B4D3',
        button_bg_2: '#C3B9D2',
        button_highlight: '#C07FFD',
        // button_highlight_2: '#E5C9FF',
        button_highlight_2: '#8241BF',
        light_bg : '#E9DCF9',
        shaded_bg: '#4b3c5c',
        // dark_bg : '#170927'
        dark_bg_2: '#2D1E3F'
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
