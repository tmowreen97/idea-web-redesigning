/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
        primary: '#DAD3DF',
        secondary: '#A593B1',
        tertiary : '#CBAEC7',
        footer_bg: '#564C6A',
        accent_1 : '#E8D7DD',
        accent_2 : '9C36FC',
        primary_text : '#625A81',
        secondary_text : '#F5F5F5',
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
  plugins: [],
}
