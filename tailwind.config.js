/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
        primary: '#301B3D',
        secondary: '#A593B1',
        tertiary : '#1D0E25',
        footer_bg: '#564C6A',
        accent_1 : '#9C6DB5',
        accent_2 : '#9C36FC',
        primary_text : '#F6F6F6',
        secondary_text : '#DAD3F5',
        dark_text : '#301B3D',
        button_bg : '#C0B4D3',
        light_bg : '#E9DCF9'
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
