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
        'navy-deep': 'var(--color-bg-deep)',
        'navy-mid': 'var(--color-bg-mid)',
        'navy-card': 'var(--color-bg-card)',
        'gold-primary': '#C9963A',
        'gold-light': '#E8B964',
        'gold-border': 'var(--color-gold-border)',
        'teal-accent': '#2DD4BF',
        'white-soft': 'var(--color-text-soft)',
        'white-muted': 'var(--color-text-muted)',
        'grey-text': 'var(--color-text-grey)',
        'overlay': 'var(--color-overlay)',
        'overlay-10': 'var(--color-overlay-10)',
        gold: {
          primary: '#C9963A',
          light: '#E8B86D',
          pale: '#F5DFA8',
          glow: 'rgba(201, 150, 58, 0.35)',
          border: 'rgba(201, 150, 58, 0.22)',
        },
        teal: {
          accent: '#0ABFBC',
          soft: 'rgba(10, 191, 188, 0.12)',
        },
        white: {
          pure: '#FFFFFF',
          soft: '#F0EDE8',
          muted: '#C8C4BC',
        },
        grey: {
          text: '#8A8780',
        },
        success: '#22C55E',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        heading: ['"Outfit"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(201, 150, 58, 0.3)',
        'teal-glow': '0 0 30px rgba(10, 191, 188, 0.25)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-delayed': 'float 3s ease-in-out 1.5s infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'grain': 'grain 0.5s steps(1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
    },
  },
  plugins: [],
}
