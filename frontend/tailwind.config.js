/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#26046B',
        'custom-grey': '#D9D9D9'
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.custom-scrollbar': {
          '&::-webkit-scrollbar': {
            width: '15px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#26046B', // Custom blue
            borderRadius: '10px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'white', // White track background
            borderRadius: '10px',
          },
        },
      });
    },
  ],
}

