<template>
  <div class="bg-blue-50/50 relative mt-[8rem] h-[32rem] lg:h-[42.75rem] w-full">
    <Flex :level="1">
      <div class="h-1/2 relative border-black w-full">
        <Flex :level="1" class="relative z-[1000]">
            <!-- desktop cards -->
          <div class="w-full h-1/2 lg:grid hidden  grid-cols-3">
            <div class="w-full h-full relative">
              <img
                src="/images/info-card-3.png"
                class="absolute w-[60%] top-1/4 left-12"
                alt=""
              />
            </div>
            <div class="w-full h-full relative">
              <img
                src="/images/info-card-2.png"
                class="absolute -bottom-1/2 left-[20%]"
                alt=""
              />
            </div>
            <div class="w-full h-full relative">
              <img
                src="/images/info-card-1.png"
                class="absolute top-1/5 right-2"
                alt=""
              />
            </div>
        </div>

        <!-- mobile cards -->
          <div class="w-full h-3/4 lg:hidden grid  grid-cols-2 grid-rows-2">
            
            <div class="w-full h-full relative">
              <img
                src="/images/info-card-2.png"
                class="absolute w-[50%] top-1/2 left-[30%]"
                alt=""
              />
            </div>
            <div class="w-full col-start-2 row-start-1 h-full  relative">
            <img
              src="/images/info-card-4.png"
              class="absolute top-[45%] left-8 z-[1004]"
              alt=""
            />
          </div>
            <div class="w-full h-full col-start-2 row-start-2 relative">
              <img
                src="/images/info-card-1.png"
                class="absolute top-10 right-2"
                alt=""
              />
            </div>
            <div class="w-full col-start-1 row-start-2 h-full  relative">
            <img
              src="/images/info-card-3.png"
              class="absolute -bottom-[54%] left-2 z-[1004]"
              alt=""
            />
          </div>
            
        </div>
        <img
          src="/images/lady.png"
          class="absolute w-[20rem] block lg:hidden  translate-x-1/2 translate-y-1/2  right-1/2 bottom-4"
          alt=""
        />
          <img
            src="/images/lady.png"
            class="absolute w-[45%] hidden lg:block right-0 -bottom-1/2"
            alt=""
          />
        </Flex>
      </div>
    </Flex>
    <div
      class="absolute w-[80%] lg:w-1/3 overflow-scroll h-[48%] lg:overflow-hidden -top-[13%] py-4 z-[1001] shadow-[#000000]/25 drop-shadow-2xl -translate-x-1/2 left-1/2 bg-white"
    >
      <Flex :level="2" class="items-start gap-4 px-8 pb-4">
        <h2 class="basis-1/4 text-xl lg:text-3xl    font-bold text-[#0027A6]">
          The Only App You Need?
        </h2>
        <p class="text-sm hidden lg:block text-[#7B7B7B]">
          With it being impossible to find one secure platform that solves all
          our digital needs without tracking us or abusing our data for monetary
          gains, AlphaTech7 a fast growing Dubai based Tech & Marketing Company
          embarked to create a One Stop Shop To For All Digital Needs where
          users have control to share and earn or erase their data from its
          cloud database
          <br />
          <br class="hidden lg:block" />
          Now you have a transparent lifelong partner in the digital space
        </p>
        <p class="text-[16px] lg:hidden h-4/5  overflow-hidden text-[#7B7B7B] leading-[32px]">
            {{infoBox}}
        </p>
      </Flex>
    </div>
  </div>
</template>

<script setup lang="ts">
const infoBox='With it being impossible to find one secure platform that solves all\
          our digital needs without tracking us or abusing our data for monetary\
          gains, AlphaTech7 a fast growing Dubai based Tech & Marketing Company\
          embarked to create a One Stop Shop To For All Digital Needs where\
          users have control to share and earn or erase their data from its\
          cloud database'
</script>

<style scoped>
.shadow {
  filter: drop-shadow(0px -2px 4px rgba(227, 224, 224, 0.15))
    drop-shadow(3px 3px 4px rgba(227, 224, 224, 0.15));
}
</style>
