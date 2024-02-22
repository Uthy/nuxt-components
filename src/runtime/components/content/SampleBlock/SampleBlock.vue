<template>
  <div class="rvt-row rvt-row-loose rvt-border-bottom rvt-p-tb-md">
    <div class="rvt-cols-6-lg">
      <div class="sample-details">
        <NuxtLink
          :to="study.url"
          class="rvt-cta rvt-ts-xs rvt-text-bold ncrad-blue rvt-text-bold"
          v-html="study.studyName"
        ></NuxtLink>
        <div v-html="study.description"></div>
      </div>
    </div>
    <div class="rvt-cols-6-lg">
      <div class="sample-types rvt-flex rvt-c-justify-flex-end">
        <div class="items rvt-flex rvt-c-justify-flex-end">
          <span
            v-for="(sampleType, index) in props.study.samples"
            :key="index"
            class="rvt-c-capsule item capsule rvt-ts-xs"
            >{{ sampleType }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  study: {
    type: Object,
    default: () => ({
      studyName: "Study Name",
      description:
        '<p class="rvt-ts-xs rvt-text-regular"><strong>Population:</strong> People aged 90 years and older</p>',
      samples: ["DNA", "RNA", "GENOMIC DNA", "RNA", "RNA", "RNA"],
      url: "/",
    }),
  },
});
</script>

<style lang="scss" scoped>
.rvt-c-justify-flex-end {
  @media screen and (min-width: 1080px) {
    justify-content: flex-end;
  }
}

.items {
  gap: 4px;
  flex-wrap: wrap;
}

.rvt-c-capsule {
  background-color: var(--sample-capsule-bg);
  color: var(--sample-capsule-text);
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 0.2rem 1rem;
  border-radius: 25rem;
  display: inline-block;
}
</style>
