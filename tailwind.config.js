/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#aad1d5',
          light: '#d2ebed',
          muted: '#8cb9bd',
          dark: '#589196',
          deep: '#2b5256',
          glow: 'rgba(170, 209, 213, 0.35)',
        },
        obsidian: {
          950: '#04070a',
          900: '#070b0f',
          850: '#0b1117',
          800: '#101820',
          750: '#151f2a',
          700: '#1b2735',
          600: '#253547',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        editorial: ['"Space Grotesk"', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
        'radar': 'radar 3s ease-out infinite',
        'glow-breathe': 'glowBreathe 4s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        radar: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(3)', opacity: '0' },
        },
        glowBreathe: {
          '0%': { opacity: '0.3', transform: 'scale(0.98)' },
          '100%': { opacity: '0.7', transform: 'scale(1.02)' },
        }
      },
    },
  },
  plugins: [],
}
