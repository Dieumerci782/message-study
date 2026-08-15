/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f9fc',
          100: '#e8f1f6',
          500: '#4a7d94',
          600: '#3d6a7d',
          700: '#2d5063',
          800: '#1a3a4a',
          900: '#0f2838',
        },
        accent: {
          light: '#e8dcc8',
          DEFAULT: '#c9a961',
          dark: '#9d7e47',
        },
        neutral: {
          surface: '#ffffff',
          'surface-hover': '#f5f4f2',
          'bg-primary': '#f8f7f5',
          'bg-secondary': '#efefed',
          border: '#e5e3e0',
          text: '#2b2b2b',
          'text-secondary': '#6b6b6b',
          'text-muted': '#9b9b9b',
        },
        semantic: {
          success: '#2d7d4a',
          warning: '#d97706',
          error: '#b91c1c',
          info: '#0ea5e9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'Georgia', 'serif'],
        mono: ['Fira Code', 'monospace'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
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
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.05)',
        md: '0 4px 6px rgba(0,0,0,0.07)',
        lg: '0 10px 15px rgba(0,0,0,0.1)',
        xl: '0 20px 25px rgba(0,0,0,0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 150ms ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
    },
  },
  plugins: [],
}
