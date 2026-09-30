import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0E2841',
        blue: '#156082',
        orange: '#E97132',
        mist: '#E8E8E8',
      },
    },
  },
  plugins: [],
} satisfies Config;
