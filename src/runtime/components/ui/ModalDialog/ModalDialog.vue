<template>
  <div
    :id="props.modalId"
    class="rvt-dialog"
    role="dialog"
    tabindex="-1"
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    :data-rvt-dialog="props.modalId"
    data-rvt-dialog-modal
    data-rvt-dialog-darken-page
    data-rvt-dialog-disable-page-interaction
    hidden
  >
    <header class="rvt-dialog__header">
      <h1 id="dialog-title" class="rvt-dialog__title">
        <slot name="title">Modal title</slot>
      </h1>
    </header>
    <div id="dialog-scription" class="rvt-dialog__body">
      <slot name="body">Dialog body</slot>
    </div>
    <div v-if="$slots['controls']" class="rvt-dialog__controls">
      <slot name="controls">Dialog controls</slot>
    </div>
    <button
      v-if="closeButton === true"
      class="rvt-button rvt-button--plain rvt-dialog__close"
      data-rvt-dialog-close="dialog-example"
      role="button"
    >
      <span class="rvt-sr-only">Close</span>
      <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16">
        <path
          d="m3.5 2.086 4.5 4.5 4.5-4.5L13.914 3.5 9.414 8l4.5 4.5-1.414 1.414-4.5-4.5-4.5 4.5L2.086 12.5l4.5-4.5-4.5-4.5L3.5 2.086Z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modalId: {
    type: String,
    default: "dialog",
    required: true,
  },
  closeButton: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss">
.rvt-dialog {
  max-width: 50.5rem;
  .rvt-dialog__close:hover {
    background: var(--primary);
  }
}
</style>
