<template>
    <NuxtLink to="/">
        <div class="flex items-center gap-2" >
            <img class="w-[3rem] h-[3rem]" src="/images/logo.png" alt="">
            <p class="text-base md:text-2xl !font-['Baloo_Bhai_2']  font-semibold text-text-blue" :class="props.colour">Growecom</p>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
    const props = defineProps<{colour?:string}>()
</script>

<style lang="scss" scoped></style>