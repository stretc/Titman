/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    screens: {
      'sm': '430px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      'pc': '1450px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
