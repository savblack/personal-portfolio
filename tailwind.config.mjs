/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Trirong"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dark: 'rgb(12, 16, 24)',
        light: 'rgb(249, 250, 251)',
        'footer-bg': 'rgb(30, 19, 16)',
      },
      maxWidth: {
        shell: '1360px',
      },
    },
  },
  plugins: [],
};
