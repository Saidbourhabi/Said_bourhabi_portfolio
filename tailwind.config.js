/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        cursor: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        cursor: 'cursor 1s step-end infinite',
      },
      backgroundSize: {
        '300%': '300%',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, #753ce8 1px, transparent 1px)",
      },
      backgroundSize: {
        '300%': '300%',
        'grid': '30px 30px',
      },
    },
  },
  plugins: [],
} 