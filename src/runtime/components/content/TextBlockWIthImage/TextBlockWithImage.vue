<template>
  <div class="rvt-p-tb-xl rvt-p-tb-3-xl-md-up">
    <div
      :class="['rvt-billboard', props.reversed ? 'rvt-billboard--reverse' : '']"
    >
      <div class="rvt-billboard__image rvt-m-bottom-sm">
        <NuxtImg :src="props.image.src" :alt="props.image.alt" format="webp" />
      </div>
      <div class="rvt-billboard__body rvt-grow-2 rvt-c-billboard-body">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: {
    type: Object as () => { src: string; alt: string },
    default: () => ({
      src: "",
      alt: "",
    }),
  },
  reversed: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.rvt-c-billboard-body {
  margin-top: 0;
  @media screen and (min-width: 46.25em) {
    flex-basis: 90%;
  }
}
</style>
