<template>
  <div class="rvt-accordion rvt-c-accordion" data-rvt-accordion="accordion">
    <template v-for="(item, index) in props.accordions" :key="index">
      <h3 class="rvt-accordion__summary rvt-c-accordion__summary">
        <button
          class="rvt-accordion__toggle rvt-c-accordion__toggle"
          data-rvt-accordion-trigger
        >
          <span
            class="rvt-accordion__toggle-text rvt-text-uppercase rvt-ts-xs rvt-text-medium"
            >{{ item.title }}</span
          >
          <div class="rvt-accordion__toggle-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g fill="currentColor">
                <path
                  class="rvt-accordion__icon-bar"
                  d="M8,15a1,1,0,0,1-1-1V2A1,1,0,0,1,9,2V14A1,1,0,0,1,8,15Z"
                />
                <path d="M14,9H2A1,1,0,0,1,2,7H14a1,1,0,0,1,0,2Z" />
              </g>
            </svg>
          </div>
        </button>
      </h3>

      <div
        class="rvt-accordion__panel rvt-c-accordion__panel rvt-ts-xs"
        data-rvt-accordion-panel
      >
        {{ item.content }}
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  accordions: {
    type: Array as () => Array<{ title: String; content: any }>,
    default: () => [],
  },
});
</script>

<style scoped lang="scss">
.rvt-c-accordion__summary {
  border-top: none;
}

.rvt-c-accordion {
  margin-top: 0;
  border-bottom: none;
}

.rvt-c-accordion__toggle {
  padding: 1.5rem 0;
  border-bottom: 1px solid #e2e7e9;

  &:hover {
    background-color: transparent;
  }

  span,
  svg {
    color: var(--accordion-accent);
  }

  .rvt-accordion__toggle-text {
    letter-spacing: 1.9px;
  }
}

.rvt-c-accordion__panel {
  padding: 0.5rem 1rem;
  margin: 2rem 0 0 2rem;
  border-left: 3px solid #edfafd;
}
</style>
