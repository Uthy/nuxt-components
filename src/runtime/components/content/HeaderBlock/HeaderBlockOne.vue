<template>
  <div
    class="rvt-m-top-md rvt-m-top-sm-md-up rvt-flow rvt-prose rvt-m-bottom-xl"
  >
    <h1 class="rvt-text-medium rvt-text-uppercase rvt-ts-md">
      {{ props.title }}
    </h1>
    <div class="rvt-content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "Page title. Prop: {{ title }}",
  },
});
</script>
