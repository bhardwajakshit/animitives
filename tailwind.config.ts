import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/core/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 6px #b0633a' },
          '50%': { boxShadow: '0 0 20px #b0633a' },
        },
      },
      animation: {
        spin: 'spin 5s linear infinite both',
        pulseGlow: 'pulseGlow 2s infinite ease-in-out',
      },
      colors: {
        'code-background': '#1e1e1e',
      },
      fontSize: {
        md: '14px',
      },
    },
  },
  plugins: [],
} satisfies Config
