<template>
  <div class="w-full margin pb-[6.2rem] pt-[9.5rem] relative  bg-white">
    <div class="container mx-auto">

      <div class="flex  flex-wrap justify-between">
        <div class="">
          <div class="flex text-text-blue flex-col font-['Baloo_Bhai_2']  text-[2.5rem] leading-[132.2%] font-semibold">
            <p>

              Frequently Asked
              <svg xmlns="http://www.w3.org/2000/svg" width="247" height="9" viewBox="0 0 247 9" fill="none">
                <path d="M1 3C38.6826 3.04313 235.084 10.7626 245 3" stroke="url(#paint0_linear_151059_6253)"
                  stroke-width="5" />
                <defs>
                  <linearGradient id="paint0_linear_151059_6253" x1="123" y1="3" x2="123" y2="6.45966"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#9333EA" />
                    <stop offset="1" stop-color="#CE6697" />
                  </linearGradient>
                </defs>
              </svg>
            </p>

            <span>

              Questions
            </span>
          </div>
          <p class="text-[1.25rem] font-sans">
            Exploring Everything You Need to Know
          </p>
        </div>
        <div class="">

          <!-- Accordion -->
          <div class="flex justify-center rounded-md items-center w-full">

            <div
              class="  lg:min-w-[48rem] flex flex-col gap-4 lg:max-w-[48.1rem] !lg:rounded-0 rounded-2xl overflow-clip mx-auto">
              <div v-for="item, index in accordionData" :key="item.title" class="lg:px-[1.9rem]">
                <div
                  class="bg-[#FAF5FF] md:duration:300 rounded-xl duration-500 ease-linear lg:px-[2.58rem] px-4 py-[2.24rem]"
                  :class="[accordionState === index && '']">
                  <div class="flex flex-col lg:flex-col md:flex-row items-center gap-6 ">
                    <div class="basis-4/5 text-text-blue flex w-full flex-row justify-between items-center">

                      <p class="font-bold font-['Baloo_Bhai_2']  md:text-12.5rem]  leading-[120%]">

                        {{ item.title }}
                      </p>

                      <div @click="() => toggleAccordion(index as 0 | 1 | 2 | 3)"
                        class="text-xl hover:bg-[#9333EA30] duration-300 font-bold rounded-full cursor-pointer px-3 py-1 md:flex items-center text-black">
                        <svg v-if="accordionState===index" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                  .
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
const accordionData = [
    { title: "What is prophone?", content: `Growecom is an AI-powered creative generation platform that crafts persuasive ad creatives and social media posts. It uses artificial intelligence to analyze your target audience, platform, and unique business needs to create high-performing ad content.` },
    { title: "How can Growecom benefit my business?", content: `` },
    { title: "vIs Growecom compatible with my advertising platforms?", content: `` },
    { title: "Is there a free trial available?", content: `` },
    // { title: "Can I try prophone before committing?", content: `` },

]
</script>

<style scoped></style>
