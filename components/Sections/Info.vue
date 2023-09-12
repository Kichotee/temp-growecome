<template>
  <div class="margin px-[8rem]">
    <div class="container mx-auto pt-[10rem] flex flex-col gap-[6.25rem]">
      <p class="headings text-center  text-text-misc">Explore how our AI works</p>
      <div class="flex flex-col relative text-white gap-[15.06rem]">
        <div v-for="item, index in features" :key="item.text">
          <div class="flex justify-between items-center">
            <div class=" max-w-[29rem]">
              <h2 class="text-text-misc mb-1 font-sec">
                {{ item.heading }}
              </h2>
              <p class="font-sans">

                {{ item.text }}
              </p>
            </div>
            <i class="relative bg-black -translate-x-[4.75rem] z-[20]">

              <svg xmlns="http://www.w3.org/2000/svg" width="104" height="118" viewBox="0 0 104 118" fill="none">
                <path
                  d="M47.75 3.18579C50.3799 1.66741 53.6201 1.66741 56.25 3.18579L98.2115 27.4123C100.841 28.9307 102.462 31.7367 102.462 34.7735V83.2265C102.462 86.2633 100.841 89.0693 98.2115 90.5877L56.25 114.814C53.6201 116.333 50.3799 116.333 47.75 114.814L5.78847 90.5877C3.15857 89.0693 1.53848 86.2633 1.53848 83.2265V34.7735C1.53848 31.7367 3.15857 28.9307 5.78848 27.4123L47.75 3.18579Z"
                  stroke="#9333EA" stroke-width="3" />
              </svg>
              <p class="text-white font-bold text-4xl absolute left-[36%]  top-1/3">
                {{ index + 1 }}
              </p>


            </i>
            <div class="">
              <img class="max-w-[19.32rem]" :src="item.image" alt="">
            </div>
          </div>
        </div>
        <div class="absolute left-1/2 h-full flex-col flex justify-between  -translate-x-1/2">
          <div v-for="item in 4" :key="item" class="basis-1/4 " :class="item === 1 && 'mt-24'">

            <div :class="item === 4 && 'hidden'"
              class="h-1/2 absolute left-1/2 z-[10]   -mt-1 -translate-1/2 border border-text-misc"></div>


            <!-- <img src="/images/line.png" class="w-[0.1875rem] h-[17rem]" alt=""> -->

          </div>
        </div>
      </div>

    </div>
    <div class="mt-[10rem] text-text-blue bg-[#f1f5f9] px-[7.19rem] min-h-screen rounded-2xl">
      <p class="text-2xl text-text-blue">
        Who can use it?
      </p>
      <p>
        Growecom is a game-changer for various domains. Startups, e-commerce ventures, marketing agencies, and enterprises
        alike can harness its power to streamline operations, optimize marketing efforts, and elevate their brand presence
        in the digital landscape
      </p>

    </div>
  </div>
</template>

<script setup lang="ts">
const features = [
  {
    text: "The power of our platform is gathering creative content from top social and display channels. Access a wealth of inspiration to supercharge your marketing efforts and stay ahead of the competition",
    heading: "Creative collection",
    image: "/images/side-image-1.png"
  },
  {
    text: "Our cutting-edge technology conducts in-depth analysis of gathered creative concepts, generating 80+ data-points per image. Gain valuable insights and make data-driven decisions for impactful marketing campaigns.",
    heading: "Concept analysis",
    image: "/images/side-image-2.png"
  },
  {
    text: "Leveraging the gathered resources and performance insights, our AI continuously learns, evolving to deliver even better results over time. Experience the power of adaptive intelligence for exceptional marketing outcomes.",
    heading: "Artificial intelligence",
    image: "/images/side-image-3.png"
  },
  {
    text: "Experience AI-generated high-ROI ad concepts ranked by projected conversion rates. Empower your campaigns with top-performing ideas to maximize results and elevate your business growth.",
    heading: "Concept generation",
    image: "/images/side-image-4.png"
  },
]
</script>

<style scoped></style>