<template>
  <div class="rvt-m-top-sm rvt-m-top-sm-md-up rvt-flow rvt-prose">
    <h1 class="rvt-ts-md rvt-text-medium rvt-text-uppercase rvt-m-bottom-sm">
      {{ props.title }}
    </h1>
    <div class="header-intro c-flex">
      <div class="heading-block rvt-grow-1">
        <slot name="content"></slot>
      </div>
      <div v-if="props.image?.src" class="image-block rvt-flex">
        <NuxtImg
          :src="props.image?.src"
          :alt="props.image?.alt"
          format="webp"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Image {
  src: string;
  alt: string;
}

const props = defineProps({
  title: {
    type: String,
    default: "Page title. Prop: {{ title }}",
  },
  image: {
    type: Object as () => Image,
    default: () => {
      return {
        src: "",
        alt: "",
      };
    },
  },
});
</script>

<style scoped lang="scss">
.rvt-c-body {
  padding-left: 0 !important;
}

.c-flex {
  margin-top: 0;
  @media (min-width: 67.5em) {
    display: flex;
    gap: 2rem;
    align-items: center;
    .heading-block {
      width: 50%;
    }

    .image-block {
      width: 50%;
      img {
        max-height: 200px;
      }
    }
  }

  .image-block {
    img {
      max-height: 200px;
      max-width: 200px;
      width: 100%;
    }
  }
}
</style>
