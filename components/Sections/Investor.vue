<template >
  <div class=" max-w-screen relative overflow-hidden z-30 pb-[5.19rem] bg-brand-primary">
    <div class="px-[7.5rem] relative z-40">

      <div class="container mx-auto flex flex-col items-center relative pt-[5.81rem] pb-[7.81rem]">
        <div class="flex flex-col font-['Baloo_Bhai_2']  text-white w-full items-start">
          <div class="">

            <h2 class="text-[2.5rem] text-left font-semibold font-['Baloo_Bhai_2'] ">
              Discover our pricing plans
            </h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="427" height="12" viewBox="0 0 427 12" fill="none">
              <path d="M1 9C34.5952 -1.8418 374.799 4.43703 426 9" stroke="url(#paint0_linear_151059_6052)"
                stroke-width="5" />
              <defs>
                <linearGradient id="paint0_linear_151059_6052" x1="213.5" y1="3" x2="213.5" y2="9"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#9333EA" />
                  <stop offset="1" stop-color="#CE6697" />
                </linearGradient>
              </defs>
            </svg>
            <p class="pt-[0.19rem] text-[1.25rem]">
              Pick a plan to grow your brand and business
            </p>
          </div>
        </div>
        <div class="grid grid-cols-3 w-full mt-[5.94rem] gap-x-10 gap-y-14">
          <div v-for="item in items" :key="item.tier">
            <div class="border hover:scale-95 duration-300 bg-[#581C87] rounded-[0.63rem] overflow-hidden text-white  ">
              <div class="py-[1.8rem] px-[2.87rem]">

                <p class="font-bold text-[2rem]">

                  {{ item.tier }}
                </p>
                <p class="">
                  {{ `Features of the ${item.tier.toLowerCase()} plan` }}
                </p>
              </div>
              <hr>
              <div class="px-[2.87rem]">

                <ul class=" mt-[2.69rem] pb-[1.88rem] flex flex-col gap-[0.94rem]">
                  <li v-for="data in item.title" class="flex  gap-4">
                    <div class="px-2 py-2 rounded-full bg-text-blue">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10.125 3.375L4.875 8.62477L2.25 6" stroke="#FAF5FF" stroke-linecap="round"
                          stroke-linejoin="round" />
                      </svg>
                    </div>
                    <p>
                      {{ data }}
                    </p>

                  </li>
                </ul>
                <div class="flex text-center mb-4 items-baseline justify-center">
                  
                  <span class="mr-1 text-lg">
                    <small>$</small>
                  </span>
                  <p class="mr1 text-[2rem]">
                    {{ item.price }}
                  </p>
                  <p>Monthly</p>
                </div>
                <Button class="mb-12 text-[1.25rem] py-[0.62rem] font-bold rounded-[0.63rem]" :class="item.tier ==='Enterprise'?'bg-brand-secondary':'bg-brand-primary'">
                  Get started
                </Button>
              </div>


            </div>
          </div>
        </div>
        <Button
          class="bg-brand-secondary text-[1.25rem] w-max mt-[4.05rem] rounded-[0.63rem] flex !flex-row gap-[0.5rem] px-16 py-[0.62rem] text-white">
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
    tier: "Basic",

    title: ["10 monthly credits", "10 brands", "Unlimited generation", "Social & email connections", "!0 user numbers"],
    price: "20"
  },
  {
    tier: "Premium",

    title: ["10 monthly credits", "10 brands", "Unlimited generation", "Social & email connections", "!0 user numbers"],
    price: "49"
  },
  {
    tier: "EnterPrise",

    title: ["10 monthly credits", "10 brands", "Unlimited generation", "Social & email connections", "!0 user numbers"],
    price: "99"
  },


]
</script>

<style scoped></style>
