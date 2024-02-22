<template>
  <div :class="['rvt-m-top-md rvt-m-top-none-md-up ]', classes]">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  [key: string]: any;
  xs?: any;
  sm?: any;
  md?: any;
  lg?: any;
  xl?: any;
}>();

const sizes = ["xs", "sm", "md", "lg", "xl"];

const classes = computed(() => {
  let classes = "";
  for (const size of sizes) {
    if (props[size]) {
      classes += ` rvt-cols-${props[size]}-${size}`;
    }
  }
  return classes.trim();
});
</script>
