<template >
  <div class=" max-w-screen relative overflow-hidden rounded-[0_6.25rem_0_6.25rem] z-30 pb-[5.19rem] bg-[#f1f5f9]">
    <div class="margin relative z-40">

      <div class="container mx-auto flex flex-col items-center relative pt-[5.78rem]">
        <div class="flex flex-col text-center text-text-blue font-['Baloo_Bhai_2'] max-w-[68rem] mx-auto  items-center">
          <p class="text-sec text-[1.5rem]">WHAT WE OFFER</p>
          <h2 class="headings font-sans ">
            The most versatile AI technology
          </h2>
          <p class="font-sans text-[1.125rem]">
            Discover the epitome of versatility in our AI technology From background removal to ad creation, copywriting,
            video optimization, and even AI-driven customer service, experience the limitless potential of a single,
            comprehensive solution. Elevate every facet of your marketing journey with unparalleled versatility.
          </p>

        </div>
        <div class="flex flex-wrap justify-between md:grid-cols-2 content-start gap-x-10 md:gap-y-14">
          <div v-for="item in items" :key="item.title">
            <div
              class="bg-white hover:scale-90 shadow-[0_0_2px_0_#000012] duration-300 cursor-pointer min-w-[minmax(14rem,23rem)] min-h-[13rem] max-h-[13rem] pt-[3.75rem] pl-[1.88rem] mt-[5.08rem] pr-[1.19rem] relative rounded-[1.25rem]  text-text-blue">
              <div class="p-2  flex rounded-lg -top-8 left-1/2 -translate-x-1/2 bg-[#E2E8F0] shadow-sm absolute">
                <div class="p-3 bg-brand-primary">

                  <i v-html="item.icon">

                  </i>
                </div>
              </div>
              <p class="text-text-blue font-semibold md:text-[1.5rem] font-['Baloo_Bhai_2'] ">
                {{ item.title }}
              </p>
              <p class="text-sm md:text-base text-text-sub max-w-[29.62rem]">{{ item.text }}</p>
            </div>
          </div>
        </div>
        <div class="mt-[10rem] flex flex-col gap-2 items-center">

          <CommonButton background="bg-brand-primary" />
          <p>Try 100% free for 7 days. <span class="text-text-misc">

              Cancel Anytime
            </span>
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
const items = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_151058_5956)">
              <path d="M24 10.6667V8H21.3333V5.33333C21.3312 4.62674 21.0496 3.94969 20.55 3.45005C20.0503 2.95041 19.3733 2.66878 18.6667 2.66667H16V0H13.3333V2.66667H10.6667V0H8V2.66667H5.33333C4.62674 2.66878 3.94969 2.95041 3.45005 3.45005C2.95041 3.94969 2.66878 4.62674 2.66667 5.33333V8H0V10.6667H2.66667V13.3333H0V16H2.66667V18.6667C2.66878 19.3733 2.95041 20.0503 3.45005 20.55C3.94969 21.0496 4.62674 21.3312 5.33333 21.3333H8V24H10.6667V21.3333H13.3333V24H16V21.3333H18.6667C19.3733 21.3312 20.0503 21.0496 20.55 20.55C21.0496 20.0503 21.3312 19.3733 21.3333 18.6667V16H24V13.3333H21.3333V10.6667H24ZM18.6667 18.6667H5.33333V5.33333H18.6667V18.6667Z" fill="white"/>
              <path d="M11.1938 7H9.5125L7 17H8.28375L8.86375 14.6562H11.7587L12.3238 17H13.6512L11.1938 7ZM9.0325 13.655L10.305 8.1875H10.3625L11.5912 13.655H9.0325ZM14.7975 7H16.0475V17H14.7975V7Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_151058_5956">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>`,
    title: "Programmed A.I.",
    text: "Our technology is learning and adapting to  provide the latest concepts with the goal of boosting conversions."
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_151058_5956)">
              <path d="M24 10.6667V8H21.3333V5.33333C21.3312 4.62674 21.0496 3.94969 20.55 3.45005C20.0503 2.95041 19.3733 2.66878 18.6667 2.66667H16V0H13.3333V2.66667H10.6667V0H8V2.66667H5.33333C4.62674 2.66878 3.94969 2.95041 3.45005 3.45005C2.95041 3.94969 2.66878 4.62674 2.66667 5.33333V8H0V10.6667H2.66667V13.3333H0V16H2.66667V18.6667C2.66878 19.3733 2.95041 20.0503 3.45005 20.55C3.94969 21.0496 4.62674 21.3312 5.33333 21.3333H8V24H10.6667V21.3333H13.3333V24H16V21.3333H18.6667C19.3733 21.3312 20.0503 21.0496 20.55 20.55C21.0496 20.0503 21.3312 19.3733 21.3333 18.6667V16H24V13.3333H21.3333V10.6667H24ZM18.6667 18.6667H5.33333V5.33333H18.6667V18.6667Z" fill="white"/>
              <path d="M11.1938 7H9.5125L7 17H8.28375L8.86375 14.6562H11.7587L12.3238 17H13.6512L11.1938 7ZM9.0325 13.655L10.305 8.1875H10.3625L11.5912 13.655H9.0325ZM14.7975 7H16.0475V17H14.7975V7Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_151058_5956">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>`,
    title: "Scalable & seamless designs",
    text: "Whether you need lots of concepts per month, our Ai meets your needs, in tune with your brand color and fonts that fits your brand."
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clip-path="url(#clip0_151058_5956)">
              <path d="M24 10.6667V8H21.3333V5.33333C21.3312 4.62674 21.0496 3.94969 20.55 3.45005C20.0503 2.95041 19.3733 2.66878 18.6667 2.66667H16V0H13.3333V2.66667H10.6667V0H8V2.66667H5.33333C4.62674 2.66878 3.94969 2.95041 3.45005 3.45005C2.95041 3.94969 2.66878 4.62674 2.66667 5.33333V8H0V10.6667H2.66667V13.3333H0V16H2.66667V18.6667C2.66878 19.3733 2.95041 20.0503 3.45005 20.55C3.94969 21.0496 4.62674 21.3312 5.33333 21.3333H8V24H10.6667V21.3333H13.3333V24H16V21.3333H18.6667C19.3733 21.3312 20.0503 21.0496 20.55 20.55C21.0496 20.0503 21.3312 19.3733 21.3333 18.6667V16H24V13.3333H21.3333V10.6667H24ZM18.6667 18.6667H5.33333V5.33333H18.6667V18.6667Z" fill="white"/>
              <path d="M11.1938 7H9.5125L7 17H8.28375L8.86375 14.6562H11.7587L12.3238 17H13.6512L11.1938 7ZM9.0325 13.655L10.305 8.1875H10.3625L11.5912 13.655H9.0325ZM14.7975 7H16.0475V17H14.7975V7Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_151058_5956">
                <rect width="24" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>`,
    title: "Generate texts",
    text: "Generate data-driven texts for your ad concepts, social post, blogs and more in your account."
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_151058_5987)">
    <path d="M21.1802 0L0 21.1816L2.81838 24L23.9986 2.81979L21.1802 0ZM4.94346 2.11802C4.5726 2.11765 4.20531 2.19033 3.86254 2.33191C3.51977 2.47348 3.20824 2.68119 2.94574 2.94316C2.68325 3.20514 2.47492 3.51625 2.33266 3.85873C2.19039 4.20122 2.11698 4.56837 2.11661 4.93922C2.11624 5.31008 2.18892 5.67738 2.33049 6.02015C2.47207 6.36292 2.67978 6.67444 2.94175 6.93694C3.20372 7.19944 3.51483 7.40777 3.85732 7.55003C4.1998 7.69229 4.56696 7.76571 4.93781 7.76608C5.68679 7.76683 6.40539 7.47001 6.93553 6.94093C7.46567 6.41186 7.76392 5.69385 7.76466 4.94487C7.76541 4.19589 7.4686 3.47729 6.93952 2.94716C6.41044 2.41702 5.69244 2.11877 4.94346 2.11802ZM19.0636 16.2382C18.3146 16.2374 17.596 16.5342 17.0659 17.0633C16.5357 17.5924 16.2375 18.3104 16.2367 19.0594C16.236 19.8083 16.5328 20.5269 17.0619 21.0571C17.591 21.5872 18.309 21.8855 19.058 21.8862C19.4288 21.8866 19.7961 21.8139 20.1389 21.6723C20.4816 21.5308 20.7932 21.323 21.0557 21.0611C21.3182 20.7991 21.5265 20.488 21.6688 20.1455C21.811 19.803 21.8844 19.4359 21.8848 19.065C21.8852 18.6942 21.8125 18.3269 21.6709 17.9841C21.5293 17.6413 21.3216 17.3298 21.0597 17.0673C20.7977 16.8048 20.4866 16.5965 20.1441 16.4542C19.8016 16.3119 19.4345 16.2385 19.0636 16.2382Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_151058_5987">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>`,
    title: "Better sales & leads",
    text: "Our data-driven ad concepts have shown to lead up to 15x better conversion rates compared to those with no data-driven data strategy."
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_151058_5981)">
    <path d="M12 0C5.3724 0 0 5.3724 0 12C0 18.6276 5.3724 24 12 24C18.6276 24 24 18.6276 24 12C24 5.3724 18.6276 0 12 0ZM18 13.2H13.2V18H10.8V13.2H6V10.8H10.8V6H13.2V10.8H18V13.2Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_151058_5981">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>`,
    title: "Connect platforms",
    text: "Integrate your account with Google, Facebook, ADYOUNEED, Zapier to help you maximize the use of our platform."
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.4615 0H5.53846C2.47965 0 0 2.47965 0 5.53846V18.4615C0 21.5203 2.47965 24 5.53846 24H18.4615C21.5203 24 24 21.5203 24 18.4615V5.53846C24 2.47965 21.5203 0 18.4615 0Z" fill="white"/>
  <path d="M3.69141 12.0362H7.38371L10.1529 7.40234L12.9222 17.5562L16.6145 12.0362H20.3068" fill="white"/>
  <path d="M3.69141 12.0362H7.38371L10.1529 7.40234L12.9222 17.5562L16.6145 12.0362H20.3068" stroke="#9333EA" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
    title: "Insights & Overview",
    text: "Get to know which of your connected platforms perform the best on your ads account."
  },
]
</script>

<style scoped></style>
