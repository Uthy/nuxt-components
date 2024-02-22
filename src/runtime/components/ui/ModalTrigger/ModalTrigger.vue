<template>
  <button
    type="button"
    class="modal-btn"
    :data-rvt-dialog-trigger="props.targetModal"
  >
    <slot name="trigger"></slot>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  targetModal: {
    type: String,
    default: "dialog",
    required: true,
  },
});
</script>
