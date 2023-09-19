<template>
  <div class="w-full margin py-14 md:pb-[6.2rem] md:pt-[9.5rem] relative  rounded-[0_6.25rem_0_0] bg-white">
    <div class="container mx-auto">

      <div class="">
        <h2 class="headings !font-bold md:font-semibold text-text-blue text-center mb-[6.25rem]">
          Rave Reviews: Growecom in action
        </h2>
        <div class="">
          <div class="flex flex-wrap lg:flex-nowrap gap-6 md:gap-[2rem]">


            <div
              class=" max-w-max border px-8 pt-[2.38rem] pb-[3.08rem] flex flex-col gap-[1.68rem] shadow-md rounded-[.625rem]"
              v-for="item in testimonialData" :key="item.author">
              <div class="basis-1/5">
                <img :src="item.comapnylogo" alt="w">
              </div>
              <div class=" flex flex-col max-w-[21.875rem] text-sm md:text-base basis-3/5">
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

      <Faq/>

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
