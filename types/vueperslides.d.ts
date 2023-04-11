import { VueperSlides, VueperSlide } from 'vueperslides'
 

declare module 'vueperslides' {
    import Vue from 'vue';
    export {Vueperslides, VueperSlide};
  }