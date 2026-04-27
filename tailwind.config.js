/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef7f6",
          100: "#d6ebe9",
          200: "#a9d6d2",
          300: "#76bcb6",
          400: "#479e98",
          500: "#1f807a",
          600: "#136963",
          700: "#0f534f",
          800: "#0c403d",
          900: "#082b29"
        },
        accent: {
          DEFAULT: "#f59f3b",
          dark:    "#d8842a"
        },
        ink: "#0f1b2a"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Plus Jakarta Sans'", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15, 27, 42, 0.18)"
      },
      backgroundImage: {
        'hero-fade': "linear-gradient(135deg, rgba(8,43,41,0.85) 0%, rgba(31,128,122,0.55) 60%, rgba(31,128,122,0.0) 100%)"
      }
    }
  },
  plugins: []
}
