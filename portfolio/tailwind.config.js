/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy indigo tokens (kept for any residual usage)
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
        // New design tokens
        surface: '#151515',
        accent: {
          DEFAULT: '#FF5A1F',
          dark: '#C2410C',
        },
        muted: '#8A8A8A',
      },
      fontFamily: {
        display: ['"League Gothic"', '"Anton"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7A68E0 0%, #27187E 100%)',
        'ghost-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #C9C2F5 100%)',
        'glass-radial': 'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(247, 247, 255, 0.15) 0%, transparent 65%)',
        'hero-gradient': 'linear-gradient(135deg, #FF4D1A 0%, #C2410C 40%, #1A0A05 70%, #0E0E0E 100%)',
        'accent-gradient': 'linear-gradient(135deg, #FF5A1F 0%, #C2410C 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 7, 36, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.45), inset 0 -1px 0 0 rgba(247, 247, 255, 0.08)',
        'glass-hover': '0 16px 40px 0 rgba(11, 7, 36, 0.6), 0 0 25px rgba(122, 104, 224, 0.35), inset 0 1px 0 0 rgba(255, 255, 255, 0.65)',
        'glass-pill': '0 4px 20px 0 rgba(11, 7, 36, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
        'accent-glow': '0 0 25px -3px rgba(255, 90, 31, 0.5)',
        'card': '0 4px 24px 0 rgba(0,0,0,0.4)',
        'card-hover': '0 10px 40px 0 rgba(0,0,0,0.6)',
      },
      animation: {
        'blob-slow-1': 'blob1 22s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
        'blob-slow-2': 'blob2 28s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
        'blob-slow-3': 'blob3 25s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
        'marquee': 'marquee 30s linear infinite',
        'gradient-shift': 'gradientShift 12s ease infinite',
      },
      keyframes: {
        blob1: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(100px, -60px) scale(1.15)' },
          '100%': { transform: 'translate(-60px, 80px) scale(0.92)' },
        },
        blob2: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-90px, 70px) scale(1.18)' },
          '100%': { transform: 'translate(70px, -50px) scale(0.88)' },
        },
        blob3: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(60px, 90px) scale(1.2)' },
          '100%': { transform: 'translate(-70px, -60px) scale(0.95)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
