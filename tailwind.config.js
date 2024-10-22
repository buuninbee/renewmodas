/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      primary:' #386A20',
      onPrimary: '#FFFFFF',
      segundary:' #556C4F',
      onSegundary: '#19281F',
      primaryContainer: '#B8F397',
      segundaryContainer: '#042100',
      onSurface: '#49454e',
      surfaceContainerHigh: '#99aba3'
    },
    backgroundImage: {
      card1: "url('/assets/card-1.png')",
      card2: "url('/assets/card-2.png')",
      card3: "url('/assets/card-3.png')"
    },
    fontFamily: {
      'sans': ['Inria Sans', 'sans-serif'],
      'serif': ['Rufina', 'serif']
    },
    extend: {},
  },
  plugins: [],
}

