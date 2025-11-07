/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#0a0a1a',
        cyan: '#00ffff',
        gold: '#ffd700',
      },
      backgroundImage: {
        'nebula': 'radial-gradient(ellipse at top, #1a1a3a 0%, #0a0a1a 100%)',
      },
    },
  },
  plugins: [],
}


