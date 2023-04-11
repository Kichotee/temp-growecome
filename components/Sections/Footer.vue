<template>
  <div class="bg-[#0027A6] text-white h-[34rem] lg:h-[38rem]">
    <Flex :level="1">
      <div class="w-3/4 mx-auto h-full pt-4">
        <Flex :level="2" class="lg:pt-8 gap-4">
            <div class="h-1/3 w-full flex flex-col items-center justify-center gap-4">

                <img src="/images/alpha-logo.png" class="lg:w-24 w-12" alt="" />
                <img src="/images/Logo-name-footer.png" alt="" class="w-48" />
            </div>
          <em class="text-xl hidden lg:block">The Best Of Everything In One App</em>
          <div
            class="lg:h-1/3 h-[4rem] w-[21rem] shadow-md lg:shadow-none justify-center lg:gap-4 flex items-center flex-row lg:w-full px-2 lg:px-0"
          >
            <p class="w-1/3 whitespace-nowrap lg:text-xl text-sm  justify-self-end">Coming soon...</p>
            <Button
              :level="3"
              class="bg-black hidden lg:flex rounded-md lg:items-center px-4 w-1/3 items-start lg:w-1/5"
            >
              <div class="basis-1/3 h-full">
                <img src="/images/Apple-Logo.png" class="" alt="" />
              </div>
              <div class="basis-2/3 text-right">
                <p class="lg:text-sm text-xs">Available on the</p>
                <p>App Store</p>
              </div>
            </Button>
            <Button
              :level="3"
              class="bg-black ml-2 px-4 hidden lg:flex w-1/3 lg:w-1/5"
            >
              <div class="basis-1/3 h-full">
                <img src="/images/Play-store.png" alt="" />
              </div>
              <div class="basis-2/3">
                <p class="text-sm">Get it on</p>
                <p>Google play</p>
              </div>
            </Button>
            <button
              class="flex pl-2 bg-black h-[3rem] lg:hidden rounded-md items-center px-2"
            >
              <div class="basis-1/3 h-full">
                <img src="/images/Apple-Logo.png" class="w-full py-2" alt="" />
              </div>
              <div class="basis-2/3">
                <p class="lg:text-sm text-[6px]">Available on the</p>
                <p class="text-xs">App Store</p>
              </div>
            </button>

            <button
              class="flex bg-black h-[3rem] ml-2 lg:hidden rounded-md items-center px-2"
            >
              <div class="basis-1/3 h-full">
                <img src="/images/Play-store.png" class="w-full py-2" alt="" />
              </div>
              <div class="basis-2/3">
                <p class="lg:text-sm text-[6px]">Available on the</p>
                <p class="text-xs">Play Store</p>
              </div>
            </button>
          </div>
          <div class="flex lg:mt-[3.5rem] flex-col  lg:flex-col-reverse items-center   h-2/5 w-full">
            <div
              class="flex  text-base gap-4 lg:flex-row font-light flex-col items-center h-2/3"
            >
              <p>Dubai UAE</p>
              <p>AlphaWorld@AlphaTech7.com</p>
              <p>+971 58 555 7797</p>
              <em class="lg:hidden">The Best Of Everything In One App</em>
            </div>
            <div class="flex w-full h-1/3 justify-center gap-2 items-center">
                <img src="/images/Instagram-white.png" alt="">
                <img src="/images/Linkedin-white.png" alt="">
            </div>
          </div>
        </Flex>
      </div>
    </Flex>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
