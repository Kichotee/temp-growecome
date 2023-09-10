<template>
    <!-- navbar configuration -->
    <div
        class="  margin  bg-white text-white ">
        <div class="container  flex py-4 justify-between font-sans  text-lg items-center w-full mx-auto">

            <LazyLogo />
            <div class="md:flex hidden  gap-5 basis-1/3 text-text-sub bg-br">
                <div v-for="item in links" :key="item.name">
                    <NuxtLink active-class="font-bold text-text-blue" :to="item.link">

                        {{ item.name }}
                    </NuxtLink>
                </div>
            </div>
            <div class="flex   gap-4  justify-between rounded-md">
                <Button class="flex gap-2  px-4 py-2 items-center rounded-md border-brand-primary text-brand-secondary">
                    Log in

                </Button>
                <Button class="flex gap-2  px-4 py-2 items-center rounded-md bg-brand-secondary">
                    Register

                </Button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const links = [
    {
        name: "Homepage",
        link: "/"
    },
    {
        name: "Features",
        link: "/features"
    },
    {
        name: "Solution",
        link: ""
    },
    {
        name: "Pricing",
        link: ""
    },
    {
        name: "Blog",
        link: ""
    },
]
</script>

<style scoped></style>