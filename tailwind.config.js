/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./portfolio/index.html",
    "./portfolio/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ghost: 'rgb(var(--ghost-rgb) / <alpha-value>)',
        'indigo-brand': 'rgb(var(--indigo-brand-rgb) / <alpha-value>)',
        'indigo-950': 'rgb(var(--indigo-950-rgb) / <alpha-value>)',
        'indigo-900': 'rgb(var(--indigo-900-rgb) / <alpha-value>)',
        'indigo-800': 'rgb(var(--indigo-800-rgb) / <alpha-value>)',
        'indigo-700': 'rgb(var(--indigo-700-rgb) / <alpha-value>)',
        'indigo-400': 'rgb(var(--indigo-400-rgb) / <alpha-value>)',
        'indigo-300': 'rgb(var(--indigo-300-rgb) / <alpha-value>)',
        'indigo-200': 'rgb(var(--indigo-200-rgb) / <alpha-value>)',
        'indigo-100': 'rgb(var(--indigo-100-rgb) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
