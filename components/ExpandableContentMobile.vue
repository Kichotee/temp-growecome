<template>
  <div class="block-content lg:hidden">
    <transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      mode="out-in"
    >
      <div v-if="!isExpanded" class="block-content__preview">
        <p ref="preview" v-html="content" />
      </div>
      <p
      class="text-center lg:text-left"
        v-else
        :class="{
          'block-content__paragraph': true,
          'block-content__paragraph--is-expanded': isExpanded,
        }"
        v-html="content"
      >
        
    </p>
    </transition>
    <button
      v-if="isToggleButtonRequired"
      type="button"
      class="block-content__button"
      aria-label="Toggle button"
      @click="isExpanded = !isExpanded"
    >
      {{ toggleCtaLabel }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, toRefs } from "vue";
export default defineComponent({
  name: "ExpandableBlockContent",
  props: {
    content: { type: String },
    visibleLines: { type: Number, default: 4 },
  },
  setup(props) {
    const { visibleLines } = toRefs(props);
    // Collapsed state
    // Assuming that default line-height is 24px
    const LINE_HEIGHT = 24;
    const maxHeightCollapsed = computed(() => LINE_HEIGHT * visibleLines.value);
    // Expanded state
    const isExpanded = ref(false);
    // Toggle button
    const preview = ref<HTMLElement | null>(null);
    onMounted(() => {
      const previewHeight = (preview.value ?? {}).clientHeight ?? 0;
      isToggleButtonRequired.value = previewHeight > maxHeightCollapsed.value;
    });
    const isToggleButtonRequired = ref(false);
    const toggleCtaLabel = computed(() =>
      isExpanded.value ? "Read less" : "Read more"
    );
    // Animation hooks (omitted to minimize snippet length)
    const onBeforeEnter = (el: Element) => {
      /** ... */
    };
    const onEnter = (el: Element) => {
      /** ... */
    };
    const onAfterEnter = (el: Element) => {
      /** ... */
    };
    const onBeforeLeave = (el: Element) => {
      /** ... */
    };
    const onLeave = (el: Element) => {
      /** ... */
    };
    return {
      isExpanded,
      preview,
      isToggleButtonRequired,
      toggleCtaLabel,
      onBeforeEnter,
      onEnter,
      onAfterEnter,
      onBeforeLeave,
      onLeave,
    };
  },
});
</script>
<style scoped>
.block-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 24px 20px;
  background-color: transparent;
  border-radius: 8px;
  text-align: center;
}
.block-content__preview {
  /* default line-height is 24px */
  max-height: calc(24px * v-bind(visibleLines));
  overflow: hidden;
  color: black;
}
.block-content__paragraph {
  color: black;
  overflow: hidden;
  transition: all 250ms ease-out;
}
.block-content__paragraph.block-content__paragraph--is-expanded {
  overflow: initial;
}
.block-content__button {
  color: rgb(30 64 175);
  text-decoration: underline;
  align-self: flex-end;
}

</style>
