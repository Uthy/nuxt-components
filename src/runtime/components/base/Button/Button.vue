<template>
  <NuxtLink
    v-if="href"
    :to="href"
    :class="buttonClasses"
    :target="external ? '_blank' : '_self'"
    ><slot />{{ label }}</NuxtLink
  >
  <button v-else :class="buttonClasses"><slot />{{ label }}</button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
  },
  href: {
    type: String,
    default: "",
  },
  external: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
});

const buttonClasses = computed(() => {
  return ["rvt-button", `rvt-button--${props.variant}`];
});
</script>
