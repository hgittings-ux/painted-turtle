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
        olive: '#B2B5A3',
        cream: '#FAF7F2',
        sand: '#F5E6D3',
        sky: '#87CEEB',
        lake: '#4682B4',
        sunset: '#FF6B6B',
        turtle: '#2F4F4F',
        goldenrod: '#DAA520',
        forest: '#228B22',
        clay: '#CFA8A0',
      },
    },
  },
  plugins: [],
}; 