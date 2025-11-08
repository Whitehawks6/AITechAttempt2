// tailwind.config.js
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
        spaceBlack: '#000000', // Deep space bg
        nebulaDark: '#0a0a1a', // Subtle variant
        crispWhite: '#ffffff',
        electricBlue: '#0ea5e9', // Main accent, like xAI buttons
        neonPurple: '#a855f7', // Subtle secondary for highlights/hovers
        grayText: '#d1d5db', // Softer grays for body
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at top, #0a0a1a 0%, #000000 100%)',
        'star-field': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'], // Clean, futuristic
      },
    },
  },
  plugins: [],
}



