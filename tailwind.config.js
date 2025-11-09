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
        spaceBlack: '#000000',
        nebulaDark: '#0a0a1a',
        brightWhite: '#ffffff',
        subtleBlue: '#1e40af',
        subtlePurple: '#6d28d9',
        grayText: '#d1d5db',
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0a0a1a 0%, #000000 100%)',
      },
    },
  },
  plugins: [],
}
