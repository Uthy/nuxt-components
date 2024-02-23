<template>
  <div
    :class="[
      'rvt-border-bo rvt-p-tb-xl rvt-p-tb-1-xl-md-up rvt-m-bottom-lg',
      type,
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: "gradient",
  },
});
</script>
