<template>
  <div
    :class="[
      'rvt-layout__wrapper',
      'rvt-layout__wrapper--details',
      `rvt-container-${props.size}`,
    ]"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  size: {
    type: String,
    default: "xl",
  },
});
</script>

<style lang="scss" scoped>
.rvt-layout__wrapper {
  padding-bottom: 4rem;
}
</style>
