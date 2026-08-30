/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          dark: '#0B132B',
          navy: '#1C2541',
          slate: '#1E293B',
          card: '#111827',
          surface: '#0F172A',
          border: '#334155',
          gold: '#D97706',
          amber: '#F59E0B',
          blue: '#1D4ED8',
          accent: '#2563EB',
          emerald: '#10B981',
          red: '#EF4444',
          ashoka: '#002B7F',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'gov': '0 4px 20px -2px rgba(0, 0, 0, 0.4), 0 2px 6px -1px rgba(0, 0, 0, 0.3)',
        'gov-glow': '0 0 15px rgba(37, 99, 235, 0.25)',
        'gov-gold': '0 0 15px rgba(245, 158, 11, 0.25)',
        'gov-emerald': '0 0 15px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}
