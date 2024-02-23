<template>
  <div v-if="timeline" class="rvt-timeline rvt-m-bottom-xxl rvt-p-bottom-none">
    <div
      v-for="(item, index) in timeline"
      :key="index"
      class="rvt-timeline__item"
    >
      <div
        class="rvt-timeline__marker rvt-c-timeline__marker"
        aria-hidden="true"
      ></div>
      <div class="rvt-timeline__content">
        <span class="rvt-timeline__date rvt-c-timeline__date">{{
          item.dates
        }}</span>
        <h2 class="rvt-timeline__heading rvt-c-timeline__heading">
          {{ item.title }}
        </h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  timeline: {
    type: Array as () => Array<{
      dates: string;
      title: string;
      description: string;
    }>,
    default: () => [
      {
        dates: "1990 - 2002",
        title: "The Early Years",
        description:
          "NCRAD's roots trace back to its establishment as the Cell Bank Core, operating under the umbrella of the Indiana Alzheimer's Disease Center. During this period, our focus was on the recruitment of multiplex families for groundbreaking linkage studies. These foundational years set the stage for what NCRAD would become. ",
      },
    ],
  },
});
</script>

<style scoped lang="scss">
.rvt-c-timeline__marker {
  background-color: var(--timeline-accent);
}

.rvt-c-timeline__date {
  color: var(--timeline-dates-color);
}

.rvt-c-timeline__heading {
  color: var(--timeline-accent);
}
</style>
