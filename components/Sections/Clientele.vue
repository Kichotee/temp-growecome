<template>
  <div class="md:-translate-y-[15rem] pb-8 md:pb-[5rem] margin  ">
    <div class="container mx-auto">

      <div class="flex flex-col gap-[2.5rem]">
        <h2 class=" text-center font-semibold mt-0text-[1.75rem] mt-8 md: md:text-[2rem] text-text-blue"> Built for Everyone</h2>
        <marquee class="text-sm md:text-[1.5rem]" behavior="left" direction="left">
          <ul class="flex gap-6 ">
            <li>Students</li>
            <li>Blogger</li>
            <li>Founders</li>
            <li>Influencers</li>
            <li>Youtubers</li>
            <li>Marketers</li>
            <li>Youtubers</li>
          </ul>
        </marquee>
      </div>
      <div class="mt-[3rem] md:mt-[7.5rem]">
        <p class="text-[0.9rem] md:text-[2.5rem] text-[#2E2067] text-center md:text-left flex gap-4 font-semibold">
        <p class="text-center text-[1.5rem]  md:text-left">

          Harness the
        </p>
        <span class="flex flex-col text-[1.5rem]  items-center text-center md:text-left md:items-start">
          Power of Artificial Intelligence.
          <svg class="hidden" xmlns="http://www.w3.org/2000/svg" width="527" height="16" viewBox="0 0 527 16" fill="none">
            <path d="M1.5 12.638C43.0543 -3.00883 463.318 2.82913 526.5 12.638" stroke="url(#paint0_linear_151058_5769)"
              stroke-width="5" />
            <defs>
              <linearGradient id="paint0_linear_151058_5769" x1="264" y1="2.96973" x2="264" y2="12.638"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#9333EA" />
                <stop offset="1" stop-color="#CE6697" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        </p>
        <p class="text-text-sub text-center md:text-left max-w-[63rem] text-[0.875rem] md:text-[1.25rem] leading-normal">
          In 2023, virtually everything in Digital Marketing is optimized by Artificial Intelligence, except for
          creatives.
          Growecom is here to revolutionize that, making data-backed, high-performing ad creatives easily accessible.
        </p>
      </div>
      <div class="mt-[4.06rem]">
        <div class="grid gap-x-[1.8rem] w-full  gap-y-10  2xl:justify-start 2xl:grid-cols-3">
          <div v-for="item in items" class="justify-center" :key="item.text">
            <div class="relative hover:scale-90 duration-300">
              <img src="/images/Rectangle.png" class="max-w-[100%] md:max-w-[23rem]" alt="">
              <div class="absolute top-6 flex px-[1.39rem] flex-col">
                <div
                  class="bg-gradient-to-r  max-w-[3.43rem] max-h-[3.43rem] rounded-lg flex justify-center from-[#9333EA] py-2 px-2 to-[#CE6697]">

                  <i class="mx-auto" v-html="item.icon"></i>
                </div>
                <div class="flex-col gap-3 md:gap-5 flex">


                  <p
                    class="text-[1.5rem] md:text-[2rem] text-text-blue mt-5 md:mt-[2.87rem] font-semibold leading-[150.2%]">
                    {{ item.title }}
                  </p>
                  <p class="text-[0.675rem]  md:text-[1.5rem] max-w-[14rem] md:max-w-[20.4375rem]">
                    {{ item.text }}
                  </p>
                  <div class=" text-base items-center !flex flex-row gap-2 font-semibold  text-brand-secondary">
                    <p>

                      Learn more
                    </p>
                    <svg class="mt-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                      fill="none">
                      <path d="M6.75 3.375L12.375 9L6.75 14.625" stroke="#9333EA" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
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
const items = [
  {
    title: "Generative Creative",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_151059_8149)">
              <path d="M24 10.6667V8H21.3333V5.33333C21.3312 4.62674 21.0496 3.94969 20.55 3.45005C20.0503 2.95041 19.3733 2.66878 18.6667 2.66667H16V0H13.3333V2.66667H10.6667V0H8V2.66667H5.33333C4.62674 2.66878 3.94969 2.95041 3.45005 3.45005C2.95041 3.94969 2.66878 4.62674 2.66667 5.33333V8H0V10.6667H2.66667V13.3333H0V16H2.66667V18.6667C2.66878 19.3733 2.95041 20.0503 3.45005 20.55C3.94969 21.0496 4.62674 21.3312 5.33333 21.3333H8V24H10.6667V21.3333H13.3333V24H16V21.3333H18.6667C19.3733 21.3312 20.0503 21.0496 20.55 20.55C21.0496 20.0503 21.3312 19.3733 21.3333 18.6667V16H24V13.3333H21.3333V10.6667H24ZM18.6667 18.6667H5.33333V5.33333H18.6667V18.6667Z" fill="white"/>
              <path d="M11.1938 7H9.5125L7 17H8.28375L8.86375 14.6562H11.7587L12.3238 17H13.6512L11.1938 7ZM9.0325 13.655L10.305 8.1875H10.3625L11.5912 13.655H9.0325ZM14.7975 7H16.0475V17H14.7975V7Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_151059_8149">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>`,
    text: "Create high-converting ad creatives quickly, maintaining brand consistency. Test more creatives while reducing design time."
  },
  {
    title: "Copywriting AI",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <rect width="24" height="24" rx="5" fill="white"/>
  <path d="M6 6.09375C6 5.86997 6.08889 5.65536 6.24713 5.49713C6.40536 5.33889 6.61997 5.25 6.84375 5.25H16.9688C17.1925 5.25 17.4071 5.33889 17.5654 5.49713C17.7236 5.65536 17.8125 5.86997 17.8125 6.09375V7.78125C17.8125 8.00503 17.7236 8.21964 17.5654 8.37787C17.4071 8.53611 17.1925 8.625 16.9688 8.625C16.745 8.625 16.5304 8.53611 16.3721 8.37787C16.2139 8.21964 16.125 8.00503 16.125 7.78125V6.9375H12.75V17.0625H14.1562C14.38 17.0625 14.5946 17.1514 14.7529 17.3096C14.9111 17.4679 15 17.6825 15 17.9062C15 18.13 14.9111 18.3446 14.7529 18.5029C14.5946 18.6611 14.38 18.75 14.1562 18.75H9.65625C9.43247 18.75 9.21786 18.6611 9.05963 18.5029C8.90139 18.3446 8.8125 18.13 8.8125 17.9062C8.8125 17.6825 8.90139 17.4679 9.05963 17.3096C9.21786 17.1514 9.43247 17.0625 9.65625 17.0625H11.0625V6.9375H7.6875V7.78125C7.6875 8.00503 7.59861 8.21964 7.44037 8.37787C7.28214 8.53611 7.06753 8.625 6.84375 8.625C6.61997 8.625 6.40536 8.53611 6.24713 8.37787C6.08889 8.21964 6 8.00503 6 7.78125V6.09375Z" fill="#9333EA"/>
</svg>`,
    text: "Generate sales-focused texts and headlines tailored to the advertising platform. Let our AI handle your copywriting"
  },
  {
    title: "Performance Insights",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_151059_8154)">
    <path d="M21.1802 0L0 21.1816L2.81838 24L23.9986 2.81979L21.1802 0ZM4.94346 2.11802C4.5726 2.11765 4.20531 2.19033 3.86254 2.33191C3.51977 2.47348 3.20824 2.68119 2.94574 2.94316C2.68325 3.20514 2.47492 3.51625 2.33266 3.85873C2.19039 4.20122 2.11698 4.56837 2.11661 4.93922C2.11624 5.31008 2.18892 5.67738 2.33049 6.02015C2.47207 6.36292 2.67978 6.67444 2.94175 6.93694C3.20372 7.19944 3.51483 7.40777 3.85732 7.55003C4.1998 7.69229 4.56696 7.76571 4.93781 7.76608C5.68679 7.76683 6.40539 7.47001 6.93553 6.94093C7.46567 6.41186 7.76392 5.69385 7.76466 4.94487C7.76541 4.19589 7.4686 3.47729 6.93952 2.94716C6.41044 2.41702 5.69244 2.11877 4.94346 2.11802ZM19.0636 16.2382C18.3146 16.2374 17.596 16.5342 17.0659 17.0633C16.5357 17.5924 16.2375 18.3104 16.2367 19.0594C16.236 19.8083 16.5328 20.5269 17.0619 21.0571C17.591 21.5872 18.309 21.8855 19.058 21.8862C19.4288 21.8866 19.7961 21.8139 20.1389 21.6723C20.4816 21.5308 20.7932 21.323 21.0557 21.0611C21.3182 20.7991 21.5265 20.488 21.6688 20.1455C21.811 19.803 21.8844 19.4359 21.8848 19.065C21.8852 18.6942 21.8125 18.3269 21.6709 17.9841C21.5293 17.6413 21.3216 17.3298 21.0597 17.0673C20.7977 16.8048 20.4866 16.5965 20.1441 16.4542C19.8016 16.3119 19.4345 16.2385 19.0636 16.2382Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_151059_8154">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>`,
    text: "Discover which creatives perform best in your ad accounts. Get inspired by top-performing creatives and let our AI learn from your data."
  },
  {
    title: "Social Media Creatives",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12.0004 9.99893C13.0611 9.99893 14.0784 9.57756 14.8285 8.82752C15.5785 8.07747 15.9999 7.06019 15.9999 5.99947C15.9999 4.93874 15.5785 3.92146 14.8285 3.17142C14.0784 2.42137 13.0611 2 12.0004 2C10.9397 2 9.92242 2.42137 9.17237 3.17142C8.42232 3.92146 8.00095 4.93874 8.00095 5.99947C8.00095 7.06019 8.42232 8.07747 9.17237 8.82752C9.92242 9.57756 10.9397 9.99893 12.0004 9.99893ZM6.6678 8.66578C6.6678 9.37293 6.38688 10.0511 5.88685 10.5511C5.38682 11.0512 4.70864 11.3321 4.00149 11.3321C3.29434 11.3321 2.61615 11.0512 2.11612 10.5511C1.61609 10.0511 1.33518 9.37293 1.33518 8.66578C1.33518 7.95863 1.61609 7.28044 2.11612 6.78041C2.61615 6.28038 3.29434 5.99947 4.00149 5.99947C4.70864 5.99947 5.38682 6.28038 5.88685 6.78041C6.38688 7.28044 6.6678 7.95863 6.6678 8.66578ZM0.655267 18.4325C0.427679 18.3031 0.257247 18.0927 0.177997 17.8432C-0.0568973 17.0824 -0.0593605 16.2688 0.170923 15.5066C0.401206 14.7444 0.853754 14.0683 1.47061 13.5649C2.08748 13.0614 2.84057 12.7535 3.63346 12.6807C4.42635 12.6078 5.22294 12.7733 5.92123 13.1558C4.48626 14.566 3.58812 16.4325 3.38157 18.4338C3.35091 18.7298 3.36291 19.0231 3.4149 19.3057C2.44191 19.2216 1.49955 18.9234 0.655267 18.4325ZM20.5859 19.3044C21.5588 19.2206 22.5012 18.9229 23.3456 18.4325C23.5727 18.3029 23.7426 18.0925 23.8215 17.8432C24.0568 17.0823 24.0595 16.2685 23.8294 15.5061C23.5993 14.7436 23.1468 14.0673 22.5298 13.5636C21.9129 13.0599 21.1596 12.7519 20.3665 12.6791C19.5735 12.6062 18.7767 12.7717 18.0783 13.1545C19.5145 14.5646 20.4136 16.4317 20.6206 18.4338C20.6503 18.7246 20.6386 19.0182 20.5859 19.3057V19.3044ZM22.6657 8.66578C22.6657 9.37293 22.3847 10.0511 21.8847 10.5511C21.3847 11.0512 20.7065 11.3321 19.9994 11.3321C19.2922 11.3321 18.614 11.0512 18.114 10.5511C17.614 10.0511 17.333 9.37293 17.333 8.66578C17.333 7.95863 17.614 7.28044 18.114 6.78041C18.614 6.28038 19.2922 5.99947 19.9994 5.99947C20.7065 5.99947 21.3847 6.28038 21.8847 6.78041C22.3847 7.28044 22.6657 7.95863 22.6657 8.66578ZM5.73992 19.5843C5.60844 19.4666 5.50651 19.3195 5.44236 19.1551C5.37821 18.9907 5.35364 18.8135 5.37064 18.6378C5.54021 16.9973 6.3119 15.4779 7.53656 14.3733C8.76121 13.2688 10.3519 12.6574 12.0011 12.6574C13.6503 12.6574 15.241 13.2688 16.4656 14.3733C17.6903 15.4779 18.462 16.9973 18.6315 18.6378C18.6486 18.8135 18.6241 18.9907 18.56 19.1552C18.4958 19.3196 18.3938 19.4666 18.2622 19.5843C16.5481 21.14 14.3153 22.0005 12.0004 21.9973C9.68599 22.0002 7.45368 21.1398 5.73992 19.5843Z" fill="white"/>
            </svg>`,
    text: "Create engaging social media post creatives. Generate perfectly sized creatives for various platforms."
  },
  {
    title: "Real-time Analytics",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18.4615 0H5.53846C2.47965 0 0 2.47965 0 5.53846V18.4615C0 21.5203 2.47965 24 5.53846 24H18.4615C21.5203 24 24 21.5203 24 18.4615V5.53846C24 2.47965 21.5203 0 18.4615 0Z" fill="white"/>
            <path d="M3.69141 12.0372H7.38371L10.1529 7.40332L12.9222 17.5572L16.6145 12.0372H20.3068" fill="white"/>
            <path d="M3.69141 12.0372H7.38371L10.1529 7.40332L12.9222 17.5572L16.6145 12.0372H20.3068" stroke="#9333EA" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>`,
    text: "Track and measure the impact of your creatives in real-time. Stay informed about what's working and make informed decisions to enhance your campaigns."
  },
  {
    title: "Consistent Branding",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g clip-path="url(#clip0_151059_8149)">
              <path d="M24 10.6667V8H21.3333V5.33333C21.3312 4.62674 21.0496 3.94969 20.55 3.45005C20.0503 2.95041 19.3733 2.66878 18.6667 2.66667H16V0H13.3333V2.66667H10.6667V0H8V2.66667H5.33333C4.62674 2.66878 3.94969 2.95041 3.45005 3.45005C2.95041 3.94969 2.66878 4.62674 2.66667 5.33333V8H0V10.6667H2.66667V13.3333H0V16H2.66667V18.6667C2.66878 19.3733 2.95041 20.0503 3.45005 20.55C3.94969 21.0496 4.62674 21.3312 5.33333 21.3333H8V24H10.6667V21.3333H13.3333V24H16V21.3333H18.6667C19.3733 21.3312 20.0503 21.0496 20.55 20.55C21.0496 20.0503 21.3312 19.3733 21.3333 18.6667V16H24V13.3333H21.3333V10.6667H24ZM18.6667 18.6667H5.33333V5.33333H18.6667V18.6667Z" fill="white"/>
              <path d="M11.1938 7H9.5125L7 17H8.28375L8.86375 14.6562H11.7587L12.3238 17H13.6512L11.1938 7ZM9.0325 13.655L10.305 8.1875H10.3625L11.5912 13.655H9.0325ZM14.7975 7H16.0475V17H14.7975V7Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_151059_8149">
              <rect width="24" height="24" fill="white"/>
              </clipPath>
              </defs>
              </svg>`,
    text: "Maintain brand consistency across different platforms. Our AI understands your brand's colors and fonts to create seamless designs that align with your branding guidelines."
  },
]
</script>

<style scoped></style>