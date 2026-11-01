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
      fontFamily: {
        display: ['"League Gothic"', '"Anton"', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #7A68E0 0%, #27187E 100%)',
        'ghost-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #C9C2F5 100%)',
        'glass-radial': 'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(247, 247, 255, 0.15) 0%, transparent 65%)',
        'indigo-page': 'radial-gradient(ellipse 90% 70% at 50% 10%, #150E4F 0%, #0B0724 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 7, 36, 0.4), inset 0 1px 0 0 rgba(255, 255, 255, 0.45), inset 0 -1px 0 0 rgba(247, 247, 255, 0.08)',
        'glass-hover': '0 16px 40px 0 rgba(11, 7, 36, 0.6), 0 0 25px rgba(122, 104, 224, 0.35), inset 0 1px 0 0 rgba(255, 255, 255, 0.65)',
        'glass-pill': '0 4px 20px 0 rgba(11, 7, 36, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.4)',
        'btn-glow': '0 0 25px -3px rgba(122, 104, 224, 0.65)',
        'ghost-glow': '0 0 30px -4px rgba(247, 247, 255, 0.5)',
      },
      animation: {
        'blob-slow-1': 'blob1 22s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
        'blob-slow-2': 'blob2 28s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
        'blob-slow-3': 'blob3 25s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate',
        'marquee': 'marquee 30s linear infinite',
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
      },
    },
  },
  plugins: [],
}
