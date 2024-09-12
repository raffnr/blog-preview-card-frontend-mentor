/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"]
      },
      backgroundColor: {
        customYellow: "#F4D04E"
      },
      width: {
        customMobile: '327px'
      },
      height: {
        customMobile: '501px'
      },
      borderRadius: {
        custom: "20px"
      },
      colors: {
        customeGrey: "#6B6B6B",
        customYellow: "#F4D04E"
      },
      lineHeight: {
        custom: '150%'
      }
    },
  },
  plugins: [],
}

