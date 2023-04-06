/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#f8f9fa',
        'primary-dark': '#121212',
        secondary: '#ffffff',
        'secondary-dark': '#1E1E1E',
      },
      textColor: {
        primary: '#212529',
        'primary-dark': '#ececec',
        secondary: '#495057',
        'secondary-dark': '#D9D9D9',
      },
      borderColor: {
        primary: '#343A40',
        'primary-dark': '#E0E0E0',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
