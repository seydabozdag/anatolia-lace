export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./anatolia-lace-site.jsx"
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F6EFE3',
        'dark-brown': '#3B2B24',
        copper: '#B87333',
        'copper-light': '#D4A574'
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}