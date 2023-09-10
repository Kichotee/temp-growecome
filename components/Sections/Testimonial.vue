<template>
    <div class="bg-brand-primary pt-[5.69rem] pb-[10.6rem] min-h-[50vh] max-w-screen relative">

        <div class="margin">
            <div class="container mx-auto text-white">
                <div class="text-center flex flex-col items-center">
                    <h2 class="text-[1.75rem] md:text-[2.5rem] font-bold md:font-semibold leading-[132.2%] font-['Baloo_Bhai_2'] text-white">
                        Trusted by thousands of customers
                    </h2>
                    <svg class="hidden md:block" xmlns="http://www.w3.org/2000/svg" width="427" height="12" viewBox="0 0 427 12" fill="none">
                        <path d="M1 9C34.5952 -1.8418 374.799 4.43703 426 9" stroke="url(#paint0_linear_151059_8171)"
                            stroke-width="5" />
                        <defs>
                            <linearGradient id="paint0_linear_151059_8171" x1="213.5" y1="3" x2="213.5" y2="9"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#9333EA" />
                                <stop offset="1" stop-color="#CE6697" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p class="md:text-lg mt-[0.62rem]">
                        Thousands of marketers, agencies, and entrepreneurs choose Growecom to automate and simplify their
                        advertisement game
                    </p>
                </div>
                <div class="pt-[5.9rem]">
                    <div class="grid w-full gap-[1.94rem] md:grid-cols-3">
                        <div class="bg-[#581C87] border px-8 pt-[2.38rem] pb-[3.08rem] flex flex-col gap-[1.68rem] border-[#3B2A82] rounded-[.625rem]" v-for="item in testimonialData" :key="item.author">
                            <div class=" flex flex-col text-sm md:text-base basis-2/3">
                                <blockquote>
                                    {{ item.text }}
                                </blockquote>
                            </div>
                            <div class="flex  gap-[0.62rem]">
                                <img :src="item.imgUrl" class="max-w-[3.625rem]" alt="">
                                <div class="">
                                    <p class="font-['Baloo_Bhai_2'] md:text-[1.5rem]">
                                        {{ item.author }}
                                    </p>
                                    <p class="text-xs md:text-sm">
                                        {{ item.role }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <BgBlur />
    </div>
</template>

<script setup>
const testimonialData=[
    {
        text:"Growecom has transformed the way we approach advertising. The AI-generated creatives are nothing short of impressive. Our click-through rates have skyrocketed, and our conversion rates have doubled since using Growecom. It's a game-changer for our business!",
        author:"John Smith",
        imgUrl:"/images/testimonial_1.png",
        role:"CEO of SmithTech"
    },
    {
        text:"“As a marketing agency, time is money, and we need creatives that work. Growecom has become our secret weapon for delivering exceptional results to our clients. The AI-powered creatives are not only effective but also save us hours of design work. It's a win-win!”",
        author:"Saarah Johnson",
        imgUrl:"/images/testimonial_2.png",
        role:"Marketing Director at AdVantage Agency"
    },
    {
        text:"I was skeptical about AI-generated creatives, but Growecom has exceeded my expectations. The ad content it produces is on point, and the platform's insights have helped us fine-tune our advertising strategy. It's like having a virtual creative team that never sleeps!",
        author:"Emily Davis",
        imgUrl:"/images/testimonial_3.png",
        role:"E-commerce Entrepreneur"
    },
]

</script>

