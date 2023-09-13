<template>
  <div class="w-full margin pb-[6.2rem] pt-[9.5rem] relative  rounded-[0_6.25rem_0_0] bg-white">
    <div class="container mx-auto">

      <div class="">
        <h2 class="headings text-text-blue text-center mb-[6.25rem]">
          Rave Reviews: Growecom in action
        </h2>
        <div class="">
          <div class="flex gap-[2rem]">


            <div
              class=" border px-8 pt-[2.38rem] pb-[3.08rem] flex flex-col gap-[1.68rem] shadow-md rounded-[.625rem]"
              v-for="item in testimonialData" :key="item.author">
              <div class="basis-1/5">
                <img :src="item.comapnylogo" alt="">
              </div>
              <div class=" flex flex-col text-sm md:text-base basis-3/5">
                <blockquote>
                  {{ item.text }}
                </blockquote>
              </div>
              <div class="flex  gap-[0.62rem]">
                <div class="p-2 bg-gray-200 rounded-xl">

                  <img :src="item.imgUrl" class="max-w-[3.625rem]" alt="">
                </div>
                <div class="">
                  <p class="font-['Baloo_Bhai_2'] md:text-[1.5rem]">
                    {{ item.author }}
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="flex flex-col mt-[12.56rem] flex-wrap justify-between">
        <div class="">
          <div class="flex text-text-blue flex-col font-['Baloo_Bhai_2']  text-[2.5rem] leading-[132.2%] font-semibold">
            <p>

              Frequently Asked Questions
            </p>

            <span>

            </span>
          </div>
          <p class="text-[1.25rem] font-sans">
            Our clients love the improved conversion rates, including copy-writer, and beautiful designs!
          </p>
        </div>
        <div class="">

          <!-- Accordion -->
          <div class="flex justify-start rounded-md items-start mt-6 w-full">

            <div class="flex flex-col min-w-full max-w-full gap-4 !lg:rounded-0 rounded-2xl overflow-clip">
              <div v-for="item, index in accordionData" :key="item.title" class="">
                <div
                  class="bg-[#FFF]  m-1 shadow-md md:duration:300 rounded-xl duration-500 ease-linear lg:px-[2.58rem] px-4 py-[1rem]"
                  :class="[accordionState === index && '']">
                  <div class="flex flex-col lg:flex-col md:flex-row items-center gap-6 ">
                    <div class="basis-4/5 text-text-blue flex w-full flex-row justify-between items-center">

                      <p class="font-bold font-['Baloo_Bhai_2']  md:text-12.5rem]  leading-[120%]">

                        {{ item.title }}
                      </p>

                      <div @click="() => toggleAccordion(index as 0 | 1 | 2 | 3)"
                        class="text-xl hover:bg-[#9333EA30] duration-300 font-bold rounded-full cursor-pointer px-3 py-1 md:flex items-center text-black">
                        <svg v-if="accordionState === index" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                          viewBox="0 0 24 24" fill="none">
                          <path d="M5 12H19" stroke="#9333EA" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                          fill="none">
                          <path d="M12 5V19" stroke="#9333EA" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                          <path d="M5 12H19" stroke="#9333EA" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                        </svg>
                      </div>
                      <p v-if="accordionState === index"
                        class="md:text-[0.861133rem] hidden text-[0.875rem] mt-4 leading-[120%] text-text-sub">
                        {{ item.content }}
                      </p>
                    </div>
                    <!-- <div @click="() => toggleAccordion(index as 0 | 1 | 2 | 3)"
                                  :class="accordionState !== index ? 'bg-slate-500 ' : 'rotate-45'"
                                  class="text-xl hidden hover:bg-gray-500 duration-300 font-bold rounded-full cursor-pointer px-3 py-1 bg-black md:flex items-center text-white">
                                  +
                              </div> -->
                    <p v-if="accordionState === index"
                      class="md:text-[0.861133rem]  lg:block text-[0.875rem] leading-[140%] text-2xl mt-4 md:leading-[120%] text-text-sub">
                      {{ item.content }}
                    </p>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const accordionState = ref<0 | 1 | 2 | 3
>(0)
const toggleAccordion = (value: 0 | 1 | 2 | 3
) => {
  accordionState.value = value
}
const testimonialData = [
  {
    comapnylogo:"/images/testimonial-logo-1.png",
    text: "Growecom has transformed the way we approach advertising. The AI-generated creatives are nothing short of impressive. Our click-through rates have skyrocketed, and our conversion rates have doubled since using Growecom. It's a game-changer for our business!",
    author: "John Smith",
    imgUrl: "/images/testimonial-person-1.png",
    role: "CEO of SmithTech"
  },
  {
    comapnylogo:"/images/testimonial-logo-2.png",

    text: "“As a marketing agency, time is money, and we need creatives that work. Growecom has become our secret weapon for delivering exceptional results to our clients. The AI-powered creatives are not only effective but also save us hours of design work. It's a win-win!”",
    author: "Saarah Johnson",
    imgUrl: "/images/testimonial-person-2.png",
    role: "Marketing Director at AdVantage Agency"
  },
  {
    comapnylogo:"/images/testimonial-logo-3.png",

    text: "I was skeptical about AI-generated creatives, but Growecom has exceeded my expectations. The ad content it produces is on point, and the platform's insights have helped us fine-tune our advertising strategy. It's like having a virtual creative team that never sleeps!",
    author: "Emily Davis",
    imgUrl: "/images/testimonial-person-3.png",
    role: "E-commerce Entrepreneur"
  },
]
const accordionData = [
  { title: "What are “Brands”??", content: `` },
  { title: "What is “Unlimited free stock images?", content: `` },
  { title: "What is “Concept insights”?", content: `` },
  { title: "What is a “Credit”", content: `` },
  { title: "What is your refund policy?", content: `` },
  // { title: "Can I try prophone before committing?", content: `` },

]
</script>

<style scoped></style>
