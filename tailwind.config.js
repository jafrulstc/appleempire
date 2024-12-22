/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        'ssm': { 'max': '768px' },
        'xssm': { 'max': '517px' },
        '2xssm': { 'max': '480px' },
      },
      colors: {
        primary: "#EE3E0C",
      }
    },
  },
  plugins: [],
}

