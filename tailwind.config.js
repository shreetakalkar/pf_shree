/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#08090C',
          card: '#0F1117',
          cardHover: '#151822',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
          text: '#F3F4F6',
          muted: '#9CA3AF',
        },
        accent: {
          cyan: '#06b6d4',
          blue: '#3b82f6',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          emerald: '#10b981',
          glow: 'rgba(6, 182, 212, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        'radial-gradient': "radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [],
}
