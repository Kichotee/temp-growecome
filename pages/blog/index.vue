<template>
    <div class=" max-w-[100dvw] overflow-hidden  bg-black">
        <Navbar />
        <div class="bg-[#f1f5f9] margin min-h-[39.9rem] relative rounded-[0_0_0_6.25rem] pt-[11.4rem]">
            <div class="container mx-auto">

                <div class=" ">

                    <div class="flex flex-col items-center justify-center">
                        <h2 class="headings text-text-blue font-inter">
                            Insights and Innovations
                        </h2>
                        <div class="pt-[0.62rem] font-medium text-center text-text-blue md:text-[1.5rem] font-sec">
                            Delve into Expert Articles, Tips, and Trends to Elevate Your Marketing Strategies
                        </div>
                        <CommonButton class="mt-12" background="bg-brand-primary" />
                    </div>
                </div>
                <div
                    class="absolute left-1/2 lg:top-[26rem] p-2 text-center md:text-left  md:-bottom-[18rem] rounded-lg -translate-x-1/2 -bottom-28  ">
                    <div class="bg-white py-6 px-4 ">

                        <h2 class="text-base px-4 md:text-[1.25rem] font-semibold text-center xl:text-left leading-[125%]">
                            Featured Blog Posts
                        </h2>
                        <div
                            class="flex flex-col  xl:flex-row items-center gap-2 md:gap-0 bg-white  mt-2 md:mt-8 xl:items-start">

                            <div class="flex flex-col items-center xl:items-start ">

                                <p
                                    class="text-sm min-w-[19rem] translate-y-8 md:text-[1.25rem] text-center xl:text-left font-semibold leading-[125%]">
                                    At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the
                                    platform
                                    you're advertising on.
                                </p>
                                <div class=" flex flex-col items-center md:items-start gap-3 mt-12 md:mt-[2.81rem]">

                                    <h4 class="flex text-center xl:text-left  w-full justify-center xl:justify-start items-center">
                                        Read more
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17"
                                            fill="none">
                                            <path d="M5.33398 3.16602L10.6673 8.49935L5.33398 13.8327" stroke="#2E2067"
                                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </h4>
                                    <p class="flex flex-col md:flex-row items-center gap-1 md:gap-3 text-sm"> <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24"
                                            fill="none">
                                            <path
                                                d="M12.3707 0.418094C11.4052 -0.139364 10.2156 -0.139365 9.25005 0.418094L1.56035 4.85775C0.594801 5.41521 0 6.44543 0 7.56035V16.4397C0 17.5546 0.594801 18.5848 1.56035 19.1423L9.25005 23.5819C10.2156 24.1394 11.4052 24.1394 12.3707 23.5819L14.7425 22.2126V18.1168C14.2166 18.3242 13.61 18.4967 12.9227 18.6342C12.1974 18.7865 11.5147 18.8627 10.8748 18.8627C9.9605 18.8627 9.11937 18.7317 8.35139 18.4696C7.58341 18.2075 6.93123 17.854 6.39486 17.409C5.85849 16.9641 5.40136 16.446 5.02346 15.8548C4.65166 15.2575 4.37738 14.6266 4.20062 13.9623C4.02387 13.2979 3.93549 12.6122 3.93549 11.9052C3.93549 10.9482 4.09091 10.037 4.40176 9.17151C4.71261 8.306 5.14232 7.55021 5.69088 6.90413C6.23944 6.25805 6.91904 5.74606 7.72969 5.36816C8.54034 4.98417 9.41499 4.79217 10.3536 4.79217C11.0972 4.79217 11.8561 4.92627 12.6302 5.19445C13.4103 5.45654 14.0259 5.84663 14.477 6.36471C14.477 5.45045 14.5958 4.99331 14.8335 4.99331H15.8575C16.1501 4.99331 16.2964 5.31026 16.2964 5.94415V8.20239C16.2964 8.54981 16.2781 8.8058 16.2415 8.97037C16.211 9.12884 16.1684 9.22941 16.1135 9.27208C16.0647 9.30865 15.9794 9.33303 15.8575 9.34522H15.0987C15.0499 9.34522 14.9615 9.27512 14.8335 9.13494C14.7116 8.99475 14.5684 8.82104 14.4038 8.6138C14.2393 8.40048 14.0229 8.17191 13.7547 7.92811C13.4926 7.67821 13.2122 7.44964 12.9136 7.24241C12.6149 7.02908 12.2523 6.85232 11.8256 6.71213C11.405 6.57194 10.9662 6.50185 10.5091 6.50185C9.94221 6.50185 9.41803 6.60547 8.93652 6.8127C8.45501 7.01384 8.04663 7.28812 7.7114 7.63554C7.37617 7.97687 7.08666 8.37914 6.84285 8.84237C6.60514 9.2995 6.42838 9.78407 6.31258 10.2961C6.20287 10.808 6.14801 11.3322 6.14801 11.8686C6.14801 12.3806 6.21201 12.8804 6.34001 13.368C6.4741 13.8495 6.67828 14.3066 6.95256 14.7394C7.22684 15.1721 7.55598 15.5531 7.93997 15.8822C8.33006 16.2053 8.79633 16.4643 9.3388 16.6593C9.88736 16.8483 10.4816 16.9428 11.1216 16.9428C12.298 16.9428 13.4469 16.8026 14.5684 16.5222V14.6388C14.5684 14.4316 14.5532 14.2579 14.5227 14.1177C14.4922 13.9714 14.4313 13.8251 14.3398 13.6788C14.2545 13.5326 14.1113 13.4228 13.9101 13.3497C13.7151 13.2766 13.4682 13.24 13.1696 13.24C13.0538 13.24 12.9745 13.1882 12.9319 13.0846C12.8953 12.9809 12.877 12.795 12.877 12.5269C12.877 12.1185 12.9776 11.7528 13.1787 11.4297C13.965 11.4968 14.7391 11.5303 15.5009 11.5303C15.8118 11.5303 16.1196 11.5242 16.4244 11.512C16.7291 11.4937 16.979 11.4755 17.1741 11.4572C17.3691 11.4389 17.488 11.4297 17.5306 11.4297C17.5794 11.4785 17.6251 11.5943 17.6678 11.7772C17.7165 11.9539 17.7409 12.1124 17.7409 12.2526C17.7409 12.4903 17.7013 12.6792 17.622 12.8194C17.5428 12.9535 17.4453 13.051 17.3295 13.112C17.2198 13.1729 17.107 13.2369 16.9912 13.304C16.8815 13.371 16.787 13.4868 16.7078 13.6514C16.6285 13.8099 16.5889 14.0263 16.5889 14.3005L16.5939 16.369H16.6149V21.1315L20.0605 19.1423C21.026 18.5848 21.6208 17.5546 21.6208 16.4397V7.56035C21.6208 6.44543 21.026 5.41521 20.0605 4.85775L12.3707 0.418094Z"
                                                fill="#9333EA" />
                                        </svg>
                                        <span class="text-left">Posted by Growecom.io on August 30,2023</span>
                                    </p>
                                </div>
                            </div>
                            <img src="/images/blog-image.png " class="max-w-[10rem] md:max-w-[22rem]" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-36 md:mt-[18.69rem]  margin">
            <p class="text-sm md:text-xl text-center font-semibold max-w-[68rem] mx-auto text-white">
                Stay updated with our blog, where industry experts share insights, strategies, and innovative approaches to
                supercharge your marketing efforts. Discover fresh perspectives and actionable tips for success.
            </p>

        </div>


        <div class="bg-black margin container mx-auto py-[6.25rem]">

            <div class="flex flex-wrap   justify-between    gap-y-6 md:gap-y-[6.25rem]">


                <div class=" border basis-[100%] md:basis-[45%] lg:basis-[31%] bg-white hover:scale-95 duration-300  overflow-hidden pb-[3.08rem] flex flex-col items-center shadow-md rounded-[1.88rem]"
                    v-for="item,index in blogData" :key="item.imgUrl">
                    <NuxtLink :to="'/blog/'+index">
                        <div class=" self-start px-4">
                            <div class="flex  gap-2 mt-[0.88rem] text-sm mb-[0.84rem]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24"
                                    fill="none">
                                    <path
                                        d="M12.3707 0.418094C11.4052 -0.139364 10.2156 -0.139365 9.25005 0.418094L1.56035 4.85775C0.594801 5.41521 0 6.44543 0 7.56035V16.4397C0 17.5546 0.594801 18.5848 1.56035 19.1423L9.25005 23.5819C10.2156 24.1394 11.4052 24.1394 12.3707 23.5819L14.7425 22.2126V18.1168C14.2166 18.3242 13.61 18.4967 12.9227 18.6342C12.1974 18.7865 11.5147 18.8627 10.8748 18.8627C9.9605 18.8627 9.11937 18.7317 8.35139 18.4696C7.58341 18.2075 6.93123 17.854 6.39486 17.409C5.85849 16.9641 5.40136 16.446 5.02346 15.8548C4.65166 15.2575 4.37738 14.6266 4.20062 13.9623C4.02387 13.2979 3.93549 12.6122 3.93549 11.9052C3.93549 10.9482 4.09091 10.037 4.40176 9.17151C4.71261 8.306 5.14232 7.55021 5.69088 6.90413C6.23944 6.25805 6.91904 5.74606 7.72969 5.36816C8.54034 4.98417 9.41499 4.79217 10.3536 4.79217C11.0972 4.79217 11.8561 4.92627 12.6302 5.19445C13.4103 5.45654 14.0259 5.84663 14.477 6.36471C14.477 5.45045 14.5958 4.99331 14.8335 4.99331H15.8575C16.1501 4.99331 16.2964 5.31026 16.2964 5.94415V8.20239C16.2964 8.54981 16.2781 8.8058 16.2415 8.97037C16.211 9.12884 16.1684 9.22941 16.1135 9.27208C16.0647 9.30865 15.9794 9.33303 15.8575 9.34522H15.0987C15.0499 9.34522 14.9615 9.27512 14.8335 9.13494C14.7116 8.99475 14.5684 8.82104 14.4038 8.6138C14.2393 8.40048 14.0229 8.17191 13.7547 7.92811C13.4926 7.67821 13.2122 7.44964 12.9136 7.24241C12.6149 7.02908 12.2523 6.85232 11.8256 6.71213C11.405 6.57194 10.9662 6.50185 10.5091 6.50185C9.94221 6.50185 9.41803 6.60547 8.93652 6.8127C8.45501 7.01384 8.04663 7.28812 7.7114 7.63554C7.37617 7.97687 7.08666 8.37914 6.84285 8.84237C6.60514 9.2995 6.42838 9.78407 6.31258 10.2961C6.20287 10.808 6.14801 11.3322 6.14801 11.8686C6.14801 12.3806 6.21201 12.8804 6.34001 13.368C6.4741 13.8495 6.67828 14.3066 6.95256 14.7394C7.22684 15.1721 7.55598 15.5531 7.93997 15.8822C8.33006 16.2053 8.79633 16.4643 9.3388 16.6593C9.88736 16.8483 10.4816 16.9428 11.1216 16.9428C12.298 16.9428 13.4469 16.8026 14.5684 16.5222V14.6388C14.5684 14.4316 14.5532 14.2579 14.5227 14.1177C14.4922 13.9714 14.4313 13.8251 14.3398 13.6788C14.2545 13.5326 14.1113 13.4228 13.9101 13.3497C13.7151 13.2766 13.4682 13.24 13.1696 13.24C13.0538 13.24 12.9745 13.1882 12.9319 13.0846C12.8953 12.9809 12.877 12.795 12.877 12.5269C12.877 12.1185 12.9776 11.7528 13.1787 11.4297C13.965 11.4968 14.7391 11.5303 15.5009 11.5303C15.8118 11.5303 16.1196 11.5242 16.4244 11.512C16.7291 11.4937 16.979 11.4755 17.1741 11.4572C17.3691 11.4389 17.488 11.4297 17.5306 11.4297C17.5794 11.4785 17.6251 11.5943 17.6678 11.7772C17.7165 11.9539 17.7409 12.1124 17.7409 12.2526C17.7409 12.4903 17.7013 12.6792 17.622 12.8194C17.5428 12.9535 17.4453 13.051 17.3295 13.112C17.2198 13.1729 17.107 13.2369 16.9912 13.304C16.8815 13.371 16.787 13.4868 16.7078 13.6514C16.6285 13.8099 16.5889 14.0263 16.5889 14.3005L16.5939 16.369H16.6149V21.1315L20.0605 19.1423C21.026 18.5848 21.6208 17.5546 21.6208 16.4397V7.56035C21.6208 6.44543 21.026 5.41521 20.0605 4.85775L12.3707 0.418094Z"
                                        fill="#9333EA" />
                                </svg>
                                <p>{{ item.time }}</p>
                            </div>
                        </div>
                        <div
                            class="bg-[url('/images/blog-image.png')] min-w-[100%] lg:min-w-[18rem] 2xl:min-w-[24.2459rem] overflow-hidden  h-[14rem] bg-cover">
                        </div>
                        <div
                            class=" xl:mt-[2.25rem] flex flex-col font-sans px-4 md:text-[1.125rem] font-semibold text-text-blue md:max-w-[21.875rem] text-sm md:text-base ">
                            <blockquote>
                                {{ item.text }}
                            </blockquote>
                        </div>
                        <p class="self-start font-semibold text-text-blue items-center flex gap-2 text-sm px-4 mt-3">
                            Read more
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path d="M6.29883 3.16602L11.6322 8.49935L6.29883 13.8327" stroke="#2E2067" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </p>

                    </NuxtLink>
                </div>
            </div>
            <ReusedButton text="text-white" class="my-[6.25rem]" bg="bg-brand-secondary" />

        </div>
        <div class="bg-[#f1f5f9] margin pb-[6rem] rounded-[0_6.25rem_0_0] overflow-hidden ">

            <LazyFaq />
        </div>


        <SectionsFooter />
    </div>
</template>

<script setup lang="ts">
const gridImage = ["/images/post.png",
    "/images/story.png",
    "/images/landscape.png",
    "/images/vertical.png",
    "/images/pin.png",
    "/images/leaderboard.png", "/images/large-leaderboard.png", "/images/half-page.png", "/images/skyscraper.png",
    "/images/medium-banner.png",
]
const brands = [
    "/images/Accenture.png",
    "/images/accenture.png",
    "/images/bing.png",
    "/images/instagram.png",
    "/images/facebook.png",
    "/images/google.png",
    "/images/twitter-1.png",
    "/images/pinterest.png",
    "/images/pinterest.png",
    "/images/spotify.png",
    "/images/linkedin.png",
]
const flags = [
    "/images/English.png",
    "/images/German.png",
    "/images/French.png",
    "/images/spanish.png",
    "/images/italian.png",
    // "/images/google.png",
    "/images/korean.png",
    "/images/empty-1.png",
    "/images/dutch.png",
    "/images/japanese.png",
    "/images/russian.png",
    "/images/danish.png",
    "/images/empty-2.png",
]
const blogData = [
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-image.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-image.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-image.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-image.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-image.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-image.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-img.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-img.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-img.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-img.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-img.png",

    },
    {
        time: "Posted by Growecom.io on August 30,2023",
        text: "At Growecom.io, our AI can generate sales-focused texts and headlines tailored to the platform you're advertising on.",
        author: "John Smith",
        imgUrl: "/images/blog-img.png",

    },

]
</script>

<style scoped></style>