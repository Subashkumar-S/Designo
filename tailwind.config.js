/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': "#E7816B",
      },
      backgroundImage: {
        mobileHomeWebDesign: "./src/assets/home/mobile/image-web-design.jpg"
      },
      fontFamily: {
        'jost': "Jost",
      }
    },
  },
  plugins: [],
}