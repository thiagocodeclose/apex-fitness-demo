import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-barlow-condensed)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        gold: 'var(--gold)',
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ctext: 'var(--text)',
        muted: 'var(--muted)',
      },
    },
  },
  plugins: [],
};
export default config;
