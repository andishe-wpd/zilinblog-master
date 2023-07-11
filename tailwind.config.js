/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      objectFit: ['cover', 'contain'],
      colors: {
        base: '#101828',
        primary: '#175CD3',
        secondary: '#344054',
        textSecondary: '#667085',
        grey: '#EAECF0',
      },
      rotate: {
        0: '0',
        45: '45deg',
        90: '90deg',
        135: '135deg',
        180: '180deg',
        270: '270deg',
      },
    },
  },
  plugins: [],
}
