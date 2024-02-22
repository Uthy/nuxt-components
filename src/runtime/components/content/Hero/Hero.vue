<template>
  <div
    v-if="background"
    class="rvt-hero rvt-c-custom-hero"
    :style="{ backgroundImage: `url(${props.background})` }"
  >
    <div class="rvt-container-xl rvt-c-custom-container">
      <div
        class="rvt-flex rvt-hero__inner rvt-c-custom-inner rvt-justify-center rvt-items-center"
      >
        <div
          class="rvt-c-custom-body rvt-flex rvt-justify-center rvt-items-center rvt-hero__body [ rvt-flow ]"
        >
          <h1
            class="rvt-hero__title rvt-color-white rvt-text-center rvt-text-uppercase rvt-ts-20 rvt-ts-32-md-up"
          >
            {{ props.overlayTitle }}
          </h1>
        </div>
      </div>
    </div>
  </div>
  <div class="rvt-bg-white rvt-p-tb-xl rvt-p-tb-xxl-md-up">
    <div class="rvt-container-lg rvt-c-hero-body">
      <h1
        v-if="props.contentTitle"
        class="rvt-hero__title rvt-text-uppercase rvt-ts-20 rvt-ts-32-md-up"
      >
        {{ props.contentTitle }}
      </h1>
      <div class="rvt-ts-18"><slot name="content" /></div>
      <div
        v-if="cta.link"
        class="rvt-justify-center rvt-items-center rvt-m-tb-lg rvt-text-center"
      >
        <Button
          :variant="cta.variant"
          :href="cta?.link"
          :target="cta?.external ? '_blank' : '_self'"
          :label="cta?.text"
        ></Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "../../base/Button/Button.vue";

interface Cta {
  text: string;
  link: string;
  external: boolean;
  variant: string;
}

const props = defineProps({
  background: {
    type: String,
    default: "",
  },
  contentTitle: {
    type: String,
    default: "",
  },
  overlayTitle: {
    type: String,
    default: "",
  },
  cta: {
    type: Object as () => Cta,
    default: () => ({
      text: "",
      link: "",
      external: false,
      variant: "",
    }),
  },
});
</script>

<style lang="scss" scoped>
.rvt-c-custom-hero {
  background-size: cover;
  background-position: center;
  height: 260px;

  @media (min-width: 1080px) {
    height: 440px;
  }

  .rvt-c-custom-container {
    width: 100%;
    height: 100%;
    .rvt-c-custom-inner {
      height: 100%;
      .rvt-c-custom-body {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.rvt-c-hero-body {
  text-align: center;
  @media screen and (max-width: 764px) {
    text-align: left !important;
  }
}
</style>
