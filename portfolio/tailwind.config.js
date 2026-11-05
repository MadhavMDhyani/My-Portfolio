/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#151515',
        paper: '#FBFBF8',
        'page-gray': '#8A8A8A',
        'dark-card': '#1C1815',
        sticker: {
          yellow: '#F2C23E',
          mint: '#A8DEC0',
          green: '#1FA971',
          pink: '#F0457E',
          blue: '#2B4FD8',
          orange: '#F0602A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        handwriting: ['Caveat', 'cursive'],
        pixel: ['"Pixelify Sans"', 'Silkscreen', 'monospace'],
      },
      boxShadow: {
        'brutal': '4px 4px 0 #151515',
        'brutal-sm': '2px 2px 0 #151515',
        'brutal-lg': '6px 6px 0 #151515',
      },
    },
  },
  plugins: [],
}
