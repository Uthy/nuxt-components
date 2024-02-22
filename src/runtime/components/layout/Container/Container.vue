<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
const props = defineProps({
  size: {
    type: String,
    default: "",
  },
});

const containerClass = computed(() => {
  return [`rvt-container-${props.size}`];
});
</script>
