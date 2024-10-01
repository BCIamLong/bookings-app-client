/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        thin: '320px',
        tiny: '440px',
      },
      backgroundImage: {
        hero: "url('public/imgs/cabins/cabin-001.jpg')",
      },
      colors: {
        brand: {
          100: '#eef2ff',
          200: '#e0e7ff',
          300: '#c7d2fe',
          400: '#6366f1',
          500: '#845ef7',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        stone: {
          0: 'var(--color-grey-0)',
          50: 'var(--color-grey-50)',
          100: 'var(--color-grey-100)',
          200: 'var(--color-grey-200)',
          300: 'var(--color-grey-300)',
          400: 'var(--color-grey-400)',
          500: 'var(--color-grey-500)',
          600: 'var(--color-grey-600)',
          700: 'var(--color-grey-700)',
          800: 'var(--color-grey-800)',
          900: 'var(--color-grey-900)',
        },
      },
      fontFamily: {
        title: ['Oswald', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
