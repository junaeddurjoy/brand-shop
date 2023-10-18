/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'travel-bg': "url('https://www.allianz-partners.com/en_global/products/travel/_jcr_content/root/parsys/wrapper_copy/wrapper/image.img.82.3360.jpeg/1656941434579/travel-1800x600px.jpeg')",
      },
      fontFamily: {
        exo: "'Exo 2', sans-serif;",
        josephin: "'Josefin Sans', sans-serif;",
        lora: "'Lora', serif;",
        pacifico: "'Pacifico', cursive;",
        roboto: "'Roboto Slab', serif;",
        varela: "'Varela Round', sans-serif;",
      }
    },
  },
  plugins: [require("daisyui")],
}

