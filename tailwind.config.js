/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        '768px': { max: '768px' },
        '535px': { max: '535px' },
      },
      borderRadius: {
        '8px': '8px',
        '10px': '10px',
      },
    },
  },
  plugins: [],
};
