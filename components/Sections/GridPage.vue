<template >
  <div class=" max-w-screen relative overflow-hidden z-30 pb-[5.19rem] bg-brand-primary">
    <div class="px-[7.5rem] relative z-40">

      <div class="container mx-auto flex flex-col items-center relative pt-[5.78rem]">
        <div class="flex flex-col font-['Baloo_Bhai_2']  text-white items-center">

          <h2 class="text-[3.5rem] font-medium">
            Why <span class="font-bold">Growecom?</span>
          </h2>
          <svg xmlns="http://www.w3.org/2000/svg" width="427" height="12" viewBox="0 0 427 12" fill="none">
            <path d="M1 9C34.5952 -1.8418 374.799 4.43703 426 9" stroke="url(#paint0_linear_151059_6027)"
              stroke-width="5" />
            <defs>
              <linearGradient id="paint0_linear_151059_6027" x1="213.5" y1="3" x2="213.5" y2="9"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#9333EA" />
                <stop offset="1" stop-color="#CE6697" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="grid grid-cols-3 gap-x-10 gap-y-14">
          <div v-for="item in items" :key="item.title">
            <div
              class="bg-white hover:scale-90 duration-300 cursor-pointer min-w-[23rem] min-h-[13rem] max-h-[13rem] pt-[3.75rem] pl-[1.88rem] mt-[5.08rem] pr-[1.19rem] relative rounded-[1.25rem]  text-text-blue">
              <div class="p-2  flex rounded-lg -top-8  bg-[#E2E8F0] shadow-sm absolute">
                <div class="p-3 bg-brand-primary">

                  <i v-html="item.icon">

                  </i>
                </div>
              </div>
              <p class="text-text-blue font-semibold text-[1.5rem] font-['Baloo_Bhai_2'] ">
                {{ item.title }}
              </p>
              <p class="text-base text-text-sub max-[20.62rem]">{{ item.text }}</p>
            </div>
          </div>
        </div>
        <Button class="bg-brand-secondary text-[1.25rem] w-max mt-[4.05rem] rounded-[0.63rem] flex !flex-row gap-[0.5rem] px-16 py-[0.62rem] text-white">
          <p>Get Started</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12.3565 17.3566L12.3551 17.3581C12.3086 17.405 12.2533 17.4421 12.1924 17.4675C12.1315 17.4929 12.0661 17.506 12.0001 17.506C11.9341 17.506 11.8687 17.4929 11.8078 17.4675C11.7469 17.4421 11.6916 17.405 11.6451 17.3581L11.6422 17.3552C11.5953 17.3087 11.5581 17.2534 11.5328 17.1925C11.5074 17.1315 11.4943 17.0662 11.4943 17.0002C11.4943 16.9342 11.5074 16.8688 11.5328 16.8079C11.5581 16.747 11.5953 16.6917 11.6422 16.6452L11.6431 16.6443L14.9431 13.3543L15.7998 12.5002H14.5901H7.0001C6.8675 12.5002 6.74032 12.4475 6.64655 12.3537C6.55278 12.26 6.5001 12.1328 6.5001 12.0002C6.5001 11.8676 6.55278 11.7404 6.64655 11.6466C6.74032 11.5529 6.8675 11.5002 7.0001 11.5002H14.5901H15.7998L14.9431 10.6461L11.6437 7.35663C11.6436 7.35658 11.6436 7.35653 11.6435 7.35647C11.5491 7.26195 11.496 7.1338 11.496 7.00019C11.496 6.86649 11.5491 6.73827 11.6437 6.64374C11.7382 6.5492 11.8664 6.49609 12.0001 6.49609C12.0663 6.49609 12.1319 6.50913 12.193 6.53447C12.2542 6.5598 12.3097 6.59693 12.3565 6.64374L12.7101 6.29019L12.3566 6.64374L17.352 11.6392C17.3961 11.6861 17.4307 11.741 17.4539 11.8009L17.4538 11.801L17.4576 11.8102C17.5076 11.9319 17.5076 12.0685 17.4576 12.1902L17.4575 12.1901L17.4539 12.1994C17.4307 12.2594 17.3961 12.3143 17.352 12.3612L12.3565 17.3566Z"
              fill="#9333EA" stroke="white" />
          </svg>
        </Button>
      </div>


    </div>
    <div class=" absolute z-20  rounded-3xl w-screen min-h-[18rem] bottom-16 bg-[#9351EA45] blur-[100px] filter">

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
