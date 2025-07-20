module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Shadows Into Light"', 'cursive'],
        body: ['Lato', 'sans-serif'],
      },
      colors: {
        olive: '#4B4F39',
        cream: '#FAF7F2',
        sand: '#F6EEDD',
        goldenrod: '#E9C46A',
        forest: '#2A9D8F',
        clay: '#CFA8A0',
      },
    },
  },
  plugins: [],
}; 