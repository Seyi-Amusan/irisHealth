export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#F3F0FB',
          100: '#E0D9F5',
          300: '#A48ED9',
          500: '#6B4EC6',
          600: '#5A3EAD',
          700: '#4A3090',
        },
      },
      boxShadow: {
        primary: '0 8px 24px rgba(107, 78, 198, 0.35)',
      },
    },
  },
  plugins: [],
}