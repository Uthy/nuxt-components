<template>
  <div
    :class="['rvt-alert', `rvt-alert--${props.variant}`]"
    role="alert"
    aria-labelledby="information-alert-title"
    :data-rvt-alert="props.variant"
  >
    <div
      v-if="props.title"
      id="information-alert-title"
      class="rvt-alert__title"
    >
      {{ props.title }}
    </div>
    <p v-if="props.message" class="rvt-alert__message">{{ props.message }}</p>
    <button
      v-if="props.dismissable"
      class="rvt-alert__dismiss"
      data-rvt-alert-close
    >
      <span class="rvt-sr-only">Dismiss this alert</span>
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
  variant: {
    type: String,
    default: "info",
    validator: (value: string) => {
      return ["info", "success", "warning", "danger"].includes(value);
    },
  },
  title: {
    type: String,
    default: "",
  },
  message: {
    type: null as any,
    default: "Alert message, html allowed",
  },
  dismissable: {
    type: Boolean,
    default: true,
  },
});
</script>
