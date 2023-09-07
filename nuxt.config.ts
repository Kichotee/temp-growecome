// https://nuxt.com/docs/api/configuration/nuxt-config
// import {defineNuxtModule} from 'nuxt'

export default defineNuxtConfig({
  app: {
    head: {
      title: "Growecome",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Manrope:wght@200;300;400;500;600;700;800&family=Source+Sans+3:wght@200;300;400;500&family=Space+Grotesk:wght@300;400;500;600;700&family=Baloo+Bhai+2:wght@300;400;500;600;700&display=swap",
        },
        {
          rel: "icon",
          href: "/Favicon.ico",
        },
       
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-swiper"],
  plugins: ["~/plugins/Carousel.ts"],
});
