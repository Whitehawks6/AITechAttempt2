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
        electricBlue: '#0ea5e9',
        neonPurple: '#a855f7',
        fireOrange: '#ff6600', // Bright fire flare
        silverWhite: '#e0e0e0', // Silver tint
        grayText: '#d1d5db',
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at top, #0a0a1a 0%, #000000 100%)',
        'flare-gradient': 'linear-gradient(135deg, #0ea5e9, #ff6600, #a855f7)',
      },
      animation: {
        'nebula-drift': 'nebula-drift 60s linear infinite',
        'fire-pulse': 'fire-pulse 10s ease-in-out infinite',
        'twinkle': 'twinkle 5s ease-in-out infinite alternate',
      },
      keyframes: {
        'nebula-drift': {
          '0%': { backgroundPosition: 'center, 0% 0%, 100% 100%, 50% 50%, center' },
          '50%': { backgroundPosition: 'center, 100% 100%, 0% 0%, 0% 100%, center' },
          '100%': { backgroundPosition: 'center, 0% 0%, 100% 100%, 100% 0%, center' },
        },
        'fire-pulse': {
          '0%, 100%': { opacity: '0.8', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        'twinkle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
