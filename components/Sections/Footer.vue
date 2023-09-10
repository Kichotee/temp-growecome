<template>
  <footer class=" text-text-blue px-8 lg:pl-[7.5rem] md:pt-[7.13rem] pt-6  lg:pr-[12.5rem] ">
    <div class="flex  items-start  md:justify-between flex-col md:flex-row">
      <div class="flex w-full md:w-max items-center gap-2">
        <LazyLogo />
      </div>
      <div class="flex flex-wrap gap-4 justify-between md:justify-evenly  w-full">

        <div v-for="item,index in footer" class="flex flex-col gap-[1.87rem] mt-3" :key="item.title">
          <h5 :class="index===footer.length+1 ? ' md:text-[1.5rem]':''" class="font-['Baloo_Bhai_2'] text-[1.25rem]">
            {{ item.title }}
          </h5>
          <ul class="flex flex-col gap-[0.94rem]">
            <li v-for="data in item.links" class="text-sm md:text-base text-text-sub">
            {{ data }}
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div class="text-center text-sm  md:text-base border-t mt-[5rem] py-[1.25rem]">
      © 2023 Growecom Technologies, Inc. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
const footer = [
  {
    title: "Pages",
    links: [
      "Home Page", "Features", "Solutions", "Pricing", "Blog"
    ]
  },
  {
    title: "Features",
    links: [
      "Ad concepts",
      "Social concepts",
      "Text content",
      "AI customer service",
      "Concept insight",
      "Support"
    ]
  },
  {
    title: "Solutions",
    links: [
      "Startup",
      "Ecommerce",
      "Agencies",
      "Enterprise"
    ]
  },
  {
    title: "Growe.io",
    links: [
      "Terms and conditions",
      "Privacy policy",
    ]
  },
]
</script>

<style scoped></style>
