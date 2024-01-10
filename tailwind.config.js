/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: "#242426",
      primaryDark: "#1E1E1E",
      grey: "#48484A",
      greyDark: "#636366",
      lightGrey: "#AEAEB2",
      lighterGrey: "#D8D8DC",
      white: "#EBEBF0",
      color1: "#0A84FF",
      color2: "#BF5AF2",
      color3: "#FF9F0B",
      color4: "#30D158",
      color5: "#FF375F",
      color6: "#AC8E68",
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
