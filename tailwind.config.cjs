module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        tritanomaly: '#ff7300'
      }
    },
  },
  variants: {
    extend: {},
  },
  animation: {
    "slide-up": "slide-up 0.8s ease-out",
    "slide-up-reverse": "slide-up 0.8s ease-in reverse",
    "slide-down": "slide-down 0.2s ease-out",
    "slide-down-reverse": "slide-down 0.2s ease-in reverse",
    "show-up": "show-up 0.4s ease-out",
    "show-up-reverse": "show-up 0.4s ease-in reverse",
    flip: "flip 0.4s linear 1",
  },
  plugins: [],
}
