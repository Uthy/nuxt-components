<template>
  <div class="rvt-tabs" data-rvt-tabs="tabset">
    <div
      class="rvt-tabs__tablist"
      role="tablist"
      :aria-label="ariaLabel"
      data-rvt-tablist
    >
      <button
        v-for="(tab, index) in props.tabs"
        :key="index"
        class="rvt-tabs__tab rvt-c-tabs__tab"
        :data-rvt-tab="index"
      >
        {{ tab.title }}
      </button>
    </div>
    <div
      v-for="(tab, index) in props.tabs"
      :key="`panel-${index}`"
      :data-rvt-tab-panel="index"
      class="rvt-tabs__panel"
      :data-rvt-tab-init="tab.selected ? 'true' : ''"
    >
      {{ tab.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  ariaLabel: {
    type: String,
    default: "Tablist",
  },
  tabs: {
    type: Array as () => Array<{
      title: string;
      selected?: boolean;
      content: string;
    }>,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.rvt-c-tabs__tab {
  &:hover {
    background-color: var(--tab-hover-bg);
    &:after {
      background-color: var(--tab-hover-border);
    }
  }

  &[aria-selected="true"] {
    background-color: var(--tab-active-bg);
    &:after {
      background-color: var(--tab-active-border);
    }
  }
}
</style>
