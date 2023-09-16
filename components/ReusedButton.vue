<template>
    <div>
        <div class=" flex flex-col items-center gap-[1.25rem]">
            <CommonButton :background=props.bg />
            <p :class="text">Try 100% free for 7 days. <span class="text-text-misc">

                    Cancel Anytime
                </span>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props= defineProps<{
    bg:string
    text?:string
}>()
</script>

<style scoped></style>