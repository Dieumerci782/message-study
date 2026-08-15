/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf9f7',
          100: '#f4f1ed',
          200: '#e8e3db',
          300: '#d9cfbf',
          400: '#c4ac88',
          500: '#a08968',
          600: '#8a714f',
          700: '#6d5937',
          800: '#4a3d27',
          900: '#2a1f14',
          950: '#1a0f08',
        },
        accent: {
          light: '#e8dcc8',
          DEFAULT: '#c9a961',
          dark: '#9d7e47',
        },
        neutral: {
          surface: '#fefdfb',
          'surface-hover': '#faf8f6',
          'bg-primary': '#fdfcfa',
          'bg-secondary': '#f9f8f6',
          border: '#e8e5e0',
          text: '#1a1410',
          'text-secondary': '#534938',
          'text-muted': '#8b7d71',
        },
        semantic: {
          success: '#059669',
          warning: '#d97706',
          error: '#dc2626',
          info: '#2563eb',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Helvetica Neue"', 'sans-serif'],
        serif: ['"Crimson Text"', 'Georgia', 'serif'],
        mono: ['"SF Mono"', 'Monaco', '"Cascadia Code"', 'Consolas', 'monospace'],
      },
      fontSize: {
        xs: ['11px', { lineHeight: '16px', letterSpacing: '0.015em' }],
        sm: ['12px', { lineHeight: '18px', letterSpacing: '0.01em' }],
        base: ['14px', { lineHeight: '22px', letterSpacing: '0px' }],
        lg: ['16px', { lineHeight: '24px', letterSpacing: '-0.005em' }],
        xl: ['18px', { lineHeight: '28px', letterSpacing: '-0.01em' }],
        '2xl': ['22px', { lineHeight: '32px', letterSpacing: '-0.01em' }],
        '3xl': ['28px', { lineHeight: '36px', letterSpacing: '-0.015em' }],
        '4xl': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em' }],
      },
      spacing: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        6: '24px',
        8: '32px',
        12: '48px',
      },
      borderRadius: {
        sm: '3px',
        md: '5px',
        lg: '8px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.03)',
        md: '0 2px 4px rgba(0, 0, 0, 0.04)',
        lg: '0 4px 8px rgba(0, 0, 0, 0.06)',
        xl: '0 8px 16px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
