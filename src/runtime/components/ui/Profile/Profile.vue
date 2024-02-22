<template>
  <div :class="['rvt-row rvt-m-bottom-sm', props.stacked ? 'stacked' : '']">
    <div :class="[props.stacked ? '' : 'rvt-cols-2-md rvt-m-right-sm-md-up']">
      <div class="rvt-avatar rvt-avatar--lg">
        <NuxtImg
          class="rvt-avatar__image"
          :src="props.image?.url"
          :alt="props.image?.alt"
          format="webp"
        />
      </div>
    </div>
    <div :class="[props.stacked ? '' : 'rvt-cols-8-md rvt-m-left-md-md-up']">
      <div class="profile-details">
        <p class="rvt-text-medium rvt-ts-sm rvt-m-tb-xs">{{ props.name }}</p>
        <div v-html="props.description"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  name: {
    type: String,
    default: "Jeff Dage, Ph.D.",
  },
  description: {
    type: String,
    default:
      "Senior Research Professor of Neurology and Primary Member, Stark Neurosciences Research Institute. He is a NCRAD co-investigator and is the Scientific Director of the Biomarker Assay Laboratory.",
  },
  image: {
    type: Object,
    default: () => ({
      url: "https://rivet.iu.edu/img/placeholder/avatar-1.webp",
      alt: "Jeff Dage",
    }),
  },
  stacked: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.stacked {
  flex-direction: column;
  padding: 0 0.75rem;
}
.rvt-avatar {
  background: var(--primary);
}
</style>
