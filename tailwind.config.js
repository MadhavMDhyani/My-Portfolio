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
        ghost: 'var(--ghost)',
        'indigo-brand': 'var(--indigo-brand)',
        'indigo-950': 'var(--indigo-950)',
        'indigo-900': 'var(--indigo-900)',
        'indigo-800': 'var(--indigo-800)',
        'indigo-700': 'var(--indigo-700)',
        'indigo-400': 'var(--indigo-400)',
        'indigo-300': 'var(--indigo-300)',
        'indigo-200': 'var(--indigo-200)',
        'indigo-100': 'var(--indigo-100)',
      },
    },
  },
  plugins: [],
}
