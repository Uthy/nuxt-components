<template>
  <div class="rvt-border-bo rvt-p-tb-xl">
    <div class="rvt-container-xl">
      <div class="section-title rvt-p-bottom-xl">
        <h2 class="rvt-c-text-block-1__heading rvt-ts-md rvt-text-center">
          {{ title }}
        </h2>
      </div>
      <div class="rvt-c-section-group">
        <div
          v-for="(section, index) in props.sections"
          :key="index"
          class="content-section"
        >
          <div class="content [ rvt-flow ] rvt-text-center rvt-m-bottom-md">
            <h4 class="rvt-ts-xs rvt-text-bold">{{ section.title }}</h4>
            <p class="rvt-ts-xs">{{ section.text }}</p>
          </div>
        </div>
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
  sections: {
    type: Array as () => Array<{ title: string; text: string }>,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.rvt-c-section-group {
  display: flex;
  flex-wrap: wrap;

  > * {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    min-width: 200px;
    @media screen and (min-width: 67.5em) {
      position: relative;

      &:not(:last-child) {
        &:after {
          content: "";
          position: absolute;
          top: 5%;
          right: 0;
          height: 80%;
          width: 1px;
          background-color: #e2e7e9;
        }
      }
    }

    &:last-child {
      border-right: none;
    }
  }

  .content-section {
    color: #243142;
    text-decoration: none;
    transition: all 0.2s ease;
    display: flex;
    justify-content: center;
    @media screen and (min-width: 46.25em) {
      padding: 2.5rem;
    }
  }
}
</style>
