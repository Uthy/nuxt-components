<template>
  <div class="image-wrapper rvt-m-tb-lg">
    <div :class="['gradient-background', props.gradientType]"></div>
    <NuxtImg
      :src="props.image?.src"
      class="overlay-image"
      :alt="props.image?.alt"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: {
    type: Object as () => { src: string; alt: string },
    default: () => ({
      src: "https://www.iu.edu/images/home/brand-campaign/homepage-overview-ai.webp",
      alt: "Gradient Image Alt Text",
    }),
  },
  gradientType: {
    type: String,
    default: "gradient",
  },
});
</script>

<style scoped lang="scss">
.image-wrapper {
  position: relative;
  width: 100%;
  height: 540px;
  max-height: 100%;

  @media screen and (max-width: 982.25px) {
    height: 300px;
  }

  .gradient-background {
    position: absolute;
    right: 0;
    width: 80%;
    height: 100%;
    z-index: 2;
  }

  .overlay-image {
    position: absolute;
    max-width: 100%;
    top: 60px;
    left: 0;
    width: 80%;
    height: 400px;
    z-index: 3;
    object-fit: cover;
    border-radius: 12px;

    @media screen and (max-width: 982.25px) {
      top: 30px;
      height: 240px;
    }
  }
}
</style>
