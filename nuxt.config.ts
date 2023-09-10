// https://nuxt.com/docs/api/configuration/nuxt-config
// import {defineNuxtModule} from 'nuxt'

export default defineNuxtConfig({
  app: {
    head: {
      title: "Growecome",
      link: [
        {
          rel: "stylesheet",
          href: `https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@500;600;700;800&family=Inter:wght@100;200;300;400;600;700;800;900&family=Manrope:wght@200;300;400;500;600;700;800&display=swap`,
        },
        {
          rel: "stylesheet",
          href: `https://fonts.cdnfonts.com/css/baloo-bhai`,
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

});
