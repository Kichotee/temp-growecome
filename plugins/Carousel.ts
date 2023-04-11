import { Swiper, SwiperSlide } from "swiper/vue";

// plugins/swiper.js
import Vue from 'vue';

import 'swiper/swiper-bundle.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('Swiper', Swiper)
    nuxtApp.vueApp.component('swiper-slide', SwiperSlide);
  })

