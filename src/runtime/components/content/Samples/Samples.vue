<template>
  <div class="rvt-p-tb-xl rvt-p-tb-3-lg-md-up">
    <div
      v-if="title || filterable"
      class="rvt-row header rvt-p-tb-md rvt-border-bottom rvt-m-bottom-md"
    >
      <div v-if="title" class="rvt-cols-6-md">
        <h3 class="title ncrad-blue rvt-ts-md">{{ title }}</h3>
      </div>
      <div v-if="filterable" class="rvt-cols-6-md rvt-flex rvt-items-center">
        <div class="rvt-flex rvt-items-center rvt-c-filter w-100">
          <div
            class="rvt-form__control-group rvt-flex rvt-items-center w-150 w-100 rvt-flow rvt-c-justify-flex-end"
          >
            <label
              class="rvt-ts-xs rvt-text-bold rvt-m-right-sm rvt-label rvt-text-uppercase ncrad-blue rvt-text-medium"
              for="filter"
              >Filter by:
            </label>
            <select
              id="filter"
              v-model="selectedFilterValue"
              class="rvt-select rvt-c-select rvt-flex-grow-1 w-50 rvt-ts-xs"
            >
              <option value="" disabled default>Sample Type</option>
              <option value="">All</option>
              <option
                v-for="(sample, index) in sampleTypes"
                :key="index"
                :value="sample"
              >
                {{ sample }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <SampleBlock
      v-for="(study, index) in filteredStudies"
      :key="index"
      :study="study"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watchEffect } from "vue";
import SampleBlock from "../SampleBlock/SampleBlock.vue";

interface Study {
  studyName: string;
  description: string;
  samples: string[];
  url?: string;
}

const selectedFilterValue = ref("");

const props = defineProps({
  title: {
    type: String,
    default: "Available Samples",
  },
  filterable: {
    type: Boolean,
    default: true,
  },
  studies: {
    type: Array as () => Study[],
    default: () => [
      {
        studyName: "Study Name",
        description:
          '<p class="rvt-ts-xs rvt-text-regular"><strong>Population:</strong> People aged 90 years and older</p>',
        samples: ["DNA", "RNA", "GENOMIC DNA", "RNA", "RNA", "RNA"],
        url: "/",
      },
      {
        studyName: "Study Name",
        description:
          '<p class="rvt-ts-xs rvt-text-regular"><strong>Population:</strong> People aged 10000 years and older</p>',
        samples: ["CNA", "RNA", "GENOMIC DNA", "RNA", "RNA", "RNA"],
        url: "/",
      },
    ],
  },
});

const sampleTypes = computed(() => {
  const types = new Set();
  localStudies.value.forEach((study) => {
    study.samples.forEach((sample) => {
      types.add(sample);
    });
  });
  return Array.from(types);
});

const localStudies = ref<Study[]>([...props.studies]);

watchEffect(() => {
  localStudies.value = [...props.studies];
});

const filteredStudies = computed(() => {
  if (!selectedFilterValue.value) {
    return localStudies.value;
  }
  return localStudies.value.filter((study) =>
    study.samples.includes(selectedFilterValue.value),
  );
});
</script>

<style lang="scss" scoped>
.rvt-c-filter {
  flex-direction: row;
  justify-content: flex-end;
}

.rvt-c-justify-flex-end {
  @media screen and (min-width: 1080px) {
    justify-content: flex-end;
  }
}
</style>
