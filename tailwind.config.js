/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'mx-black': '#0F0F0F',
        'mx-charcoal': '#1E1E1E',
        'mx-ember': '#2A1414',
        'mx-red': '#FF3B30',
        'mx-red-dim': '#B8281F',
        'mx-white': '#FFFFFF',
        'mx-smoke': '#9A9A9A',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      keyframes: {
        pulseLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        pulseLine: 'pulseLine 2.4s linear forwards',
        flicker: 'flicker 3s ease-in-out infinite',
        floatSlow: 'floatSlow 6s ease-in-out infinite',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255,59,48,0.35)',
        glowSm: '0 0 20px rgba(255,59,48,0.25)',
        card: '0 20px 60px -15px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
