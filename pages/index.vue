<template>
    <NuxtLayout name="default">



        <div class=" overflow-x-hidden">
            <SectionsHero />
            <SectionsClientele />

            <SectionsGridPage />
            <SectionsInfo />
            <SectionsInvestor />
            <SectionsMerch />
            <SectionsTestimonial />

        </div>
    </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({layout:false})
</script>

<style scoped></style>