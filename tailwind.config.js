/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './js/**/*.js',
    './src/**/*.css',
  ],
  safelist: [
    'bg-white/5', 'ring-white/10', 'text-white/70', 'text-white/80', 'placeholder-white/40',
    'bg-black/40', 'border-white/10', 'ring-1'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Anton', 'Impact', 'system-ui'],
      },
      colors: {
        ink: 'rgb(24 24 27 / <alpha-value>)',
        brand: 'rgb(255 214 0 / <alpha-value>)',
        accent: 'rgb(255 76 76 / <alpha-value>)',
        surface: 'rgb(39 39 42 / <alpha-value>)',
        text: 'rgb(255 255 255 / <alpha-value>)',
        black: '#18181B',
        white: '#fff',
        gray: {
          900: 'rgb(39 39 42 / 1)',
          800: 'rgb(39 39 42 / 0.85)',
          700: 'rgb(39 39 42 / 0.7)',
          600: 'rgb(39 39 42 / 0.6)',
          500: 'rgb(39 39 42 / 0.5)',
        },
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
        shine: { '0%': { transform: 'translateX(-120%)' }, '100%': { transform: 'translateX(160%)' } },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        fadeUp: 'fadeUp .7s cubic-bezier(.4,0,.2,1) forwards',
        shine: 'shine 1.2s linear',
      },
      boxShadow: {
        glow: '0 12px 40px rgba(255,214,0,.25)',
        halo: '0 0 0 8px rgba(255,214,0,.10)',
      },
    },
  },
  plugins: [],
}