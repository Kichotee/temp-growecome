<template>
  <div :class="type">
    <slot> </slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  level: 1 | 2;
}>();
const type = computed(() => {
  switch (props.level) {
    case 1:
      return "flex flex-row items-center justify-center w-full h-full";
    case 2:
      return "flex flex-col items-center  w-full h-full";

    default:
      break;
  }
});
</script>

<style scoped></style>
