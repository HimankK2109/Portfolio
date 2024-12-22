/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rocket: {
          '0%, 100%': { transform: 'rotate(-2deg) translate(0px, 0px)' },
          '50%': { transform: 'rotate(2deg) translate(50px, 50px)' },
        }
      },
      animation: {
        rocket: 'rocket 2s infinite ease-in-out',
      }
    }
  },
  plugins: [],
}

