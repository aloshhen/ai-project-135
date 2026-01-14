export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'dota-dark': '#1A1A2E',
        'dota-accent': '#16213E',
        'dota-highlight': '#0F3460',
        'dota-text': '#E94560'
      },
      backgroundImage: {
        'dota-gradient': 'linear-gradient(to right, #1A1A2E, #16213E)'
      }
    },
  },
  plugins: [],
}