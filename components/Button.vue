<template>
    <div :class="type" class="">
       <slot>

       </slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  level: 1 | 2|3;
}>();
const type = computed(() => {
  switch (props.level) {
    case 1:
      return "lg:py-2 lg:px-4 py-[0.175rem] px-2 flex justify-center rounded-md items-center border border-1 border-white";
    case 2:
      return "flex flex-col items-center   w-full h-full";
    case 3:
      return "flex flex-row rounded-xl lg:py-3  items-center  ";

    default:
        return "flex flex-col items-center ";
      break;
  }
});
</script>

<style scoped>

</style>