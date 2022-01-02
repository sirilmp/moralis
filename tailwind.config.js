module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
'primary':'#082745',
transparent: 'transparent',
'white': '#ffffff',
'black':'#000000',
'green':'#21BF96',
'green-dark':'#1DAC87',
'text-dark':'#2E7DAF'
    },
    extend: {
      backgroundImage: {
        'hero_blue_circle_new': "url('../public/assets/images/hero_blue_circlenew.svg')",
        'hero_blue_circle2_new': "url('../public/assets/images/hero_blue_circle2new.svg')",
        'hero_new_img': "url('../public/assets/images/hero_new_img.svg')",
      }
    },
  },
  plugins: [],
}