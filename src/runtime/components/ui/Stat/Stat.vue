<template>
  <div class="rvt-stat transparent-bg">
    <div class="rvt-stat__content [ rvt-flow ]">
      <div class="rvt-stat__image">
        <img
          :src="props.stat?.icon?.src"
          :alt="props.stat?.icon?.alt"
          style="max-width: 92px"
        />
      </div>
      <div class="rvt-stat__number ncrad-green rvt-p-all-xs h4">
        {{ props.stat?.numbers }}
      </div>
      <div class="rvt-stat__description">{{ props.stat.description }}</div>
      <NuxtLink
        v-if="props.stat?.link"
        :to="props.stat?.link?.url"
        class="rvt-cta"
        >{{ props.stat?.link?.title }}</NuxtLink
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Stat {
  icon: {
    src: string;
    alt: string;
  };
  numbers: string;
  description: string;
  link: {
    url: string;
    title: string;
  };
}

const props = defineProps({
  stat: {
    type: Object as () => Stat,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
.rvt-stat-group > * {
  @media screen and (min-width: 67.5em) {
    border-right: none;
    position: relative;

    &:not(:last-child) {
      &:after {
        content: "";
        position: absolute;
        top: 40%;
        right: 0;
        height: 150px;
        width: 1px;
        background-color: #e2e7e9;
      }
    }
  }
}
</style>
