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
        crispWhite: '#ffffff',
        silverWhite: '#f0f0f0',
        subtleBlue: '#0ea5e9',
        subtlePurple: '#a855f7',
        grayText: '#d1d5db',
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(to bottom, #0a0a1a 0%, #000000 100%)',
      },
    },
  },
  plugins: [],
}
