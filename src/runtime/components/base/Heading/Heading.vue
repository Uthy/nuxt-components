<template>
  <component :is="'h' + props.level" v-bind="$attrs">
    {{ props.text }}
  </component>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: {
    type: String,
    default: "",
  },
  level: {
    type: null as any,
    default: 1,
  },
});
</script>
