<template>
  <div
    class="lg:h-[61rem] h-[28rem] bg-[#F0F3F9] overflow-hidden w-full relative"
  >
    <Flex :level="2" class="lg:mt-24 mt-4">
      <div class="w-[90%] mx-auto lg:w-3/4 lg:h-1/2 h-full">
        <Flex :level="2" class="py-4 gap-4 lg:items-center">
          <h2 class="mb-2 text-3xl font-bold text-black">
            Are you an investor
          </h2>
          <h3 class="text-[#1e1e1e]/90 text-center lg:text-left text-xl">
            Are you an investor interested in The Super App For Everything?
            Contact us now <span>
              <a target="_blank" href="https://wa.link/hnx1mz">

                <img class="inline ml-1 mb-1" src="/images/Whatsapp-black.png" alt="">
              </a>
            </span>
          </h3>
          <div class="lg:h-1/2 h-4/5 w-full">
            <Flex :level="1" class="lg:w-[80%] hidden lg:flex mx-auto py-4">
              <div
                class="basis-1/3 flex flex-col justify-center gap-6 items-center h-full"
              >
                <img src="/images/House.png" class="w-1/3" alt="" />
                <div class="flex flex-col h-1/3">
                  <h3 class="text-xl text-gray-900 font-semibold">Location</h3>
                  <p class="text-gray-600 text-sm">Dubai, UAE</p>
                </div>
              </div>
              <div
                class="basis-1/3 gap-6 flex flex-col justify-center items-center h-full"
              >
                <img src="/images/Message.png" class="w-1/3" alt="" />
                <div class="flex flex-col h-1/3">
                  <div class="flex flex-col items-center h-1/3">
                    <h3 class="text-xl font-semibold">Email Address</h3>
                    <p class="text-gray-600 text-sm">
                      AlphaWorld@AlphaTech7.com
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="basis-1/3 gap-6 flex flex-col justify-center items-center h-full"
              >
                <img src="/images/Phone.png" class="w-1/3" alt="" />

                <div class="flex flex-col h-1/3">
                  <h3 class="text-xl font-semibold">Phone Number</h3>
                  <p class="text-gray-600 text-sm">+971 58 555 7797</p>
                </div>
              </div>
            </Flex>
            <!-- mobile -->
            <div
              
              class="lg:hidden flex flex-col w-full h-full items-start justify-start mx-auto py-4"
            >
              <div
                class="basis-1/3 flex flex-row justify-start gap-4 items-start h-full"
              >
                <img src="/images/House.png" class="w-[4rem]" alt="" />
                <div class="flex flex-col h-1/3">
                  <h3 class="text-xl text-gray-900 font-semibold">Location</h3>
                  <p class="text-gray-600 text-sm">Dubai, UAE</p>
                </div>
              </div>
              <div
                class="basis-1/3 gap-4 flex flex-row justify-start items-start h-full"
              >
                <img src="/images/Message.png" class="w-[4rem]" alt="" />
                <div class="flex flex-col h-1/3">
                  <div class="flex flex-col items-start h-1/3">
                    <h3 class="text-xl font-semibold">Email Address</h3>
                    <p class="text-gray-600 text-sm">
                      AlphaWorld@AlphaTech7.com
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="basis-1/3 gap-4 flex flex-row justify-center items-start h-full"
              >
                <img src="/images/Phone.png" class="w-[4rem]" alt="" />

                <div class="flex flex-col items-start h-1/3">
                  <h3 class="text-xl font-semibold">Phone Number</h3>
                  <p class="text-gray-600 text-sm">+971 58 555 7797</p>
                </div>
              </div>
            </div>
          </div>
        </Flex>
        <div
          class="mt-12 w-full hidden lg:flex text-[#1E1E1EE5]/90 mx-auto gap-6 h-full flex-col items-center"
        >
          <p class="text-lg">Or contact us on all our social media Platforms</p>
          <div class="flex w-1/4 justify-between mx-auto">
            <img src="/images/Facebook.png" alt="" />
            <a target="_blank" href="https://chat.whatsapp.com/Iz4YdJb4wko9s6lhM81858">

              <img src="/images/Whatsapp-black.png" alt="" />
            </a>
            <a target="_blank" href="">

              <img src="/images/Instagram-black.png" alt="" />
            </a>
            <a href="">

              <img src="/images/Twitter.png" alt="" />
            </a>
            <a href="">

              <img src="/images/LinkedIn.png" alt="" />
            </a>
          </div>
        </div>
      </div>

      <img
        src="/images/Abstract.png"
        class="hidden lg:block absolute bottom-8 mt-12 w-[6rem]"
        alt=""
      />
    </Flex>
    <img
      src="/images/Alpha-bg.png"
      class="absolute w-[46.3rem] -left-6 -bottom-1/3 lg:-bottom-0 z-[1000]"
      alt=""
    />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
