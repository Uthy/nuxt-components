<template>
  <div class="rvt-c-text-block-1 rvt-m-top-md rvt-m-top-none-md-up">
    <h2
      v-if="props.title"
      class="rvt-c-text-block-1__heading rvt-m-bottom-sm rvt-ts-md"
    >
      {{ props.title }}
    </h2>
    <div class="rvt-c-text-block-1__body">
      <div class="content rvt-m-bottom-md vertical-line-text rvt-text-regular">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
});
</script>

<style scoped lang="scss">
.rvt-c-text-block-1__body {
  padding-left: 0.5rem;
  .content {
    box-shadow: 8px 0 0 var(--vertical-text-highlight) inset;
    padding-left: 1.5rem;

    p {
      padding: 10px 0;
    }
  }
}
</style>
