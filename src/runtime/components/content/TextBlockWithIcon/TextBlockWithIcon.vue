<template>
  <div
    :class="[
      'rvt-billboard rvt-c-flex rvt-m-tb-xl',
      props.reversed ? 'rvt-billboard--reverse' : '',
    ]"
  >
    <div class="rvt-billboard__image rvt-m-bottom-lg icon-wrapper">
      <div>
        <div class="bg"></div>
        <div
          :class="['icon-box', props.reversed ? 'gradient-2' : 'gradient-1']"
        >
          <NuxtImg :src="props.icon?.src" :alt="props.icon?.alt" class="icon" />
        </div>
      </div>
    </div>
    <div class="rvt-billboard__body rvt-grow-2 rvt-c-billboard-body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: Object as () => { src: string; alt: string },
    default: () => ({
      src: "",
      alt: "",
    }),
  },
  reversed: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
.rvt-billboard {
  @media screen and (min-width: 46.25em) {
    flex-direction: row;
  }
}

.rvt-c-flex {
  gap: 4rem;
}
.rvt-c-billboard-body {
  margin-top: 0;
  @media screen and (min-width: 46.25em) {
    flex-basis: 90%;
  }
}

.icon-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100%;

  .bg {
    background: #f8f9f8;
    height: 200px;
    width: 80%;
    margin-left: auto;
    @media (max-width: 749px) {
      height: 150px;
    }
  }
  .icon-box {
    position: absolute;
    top: 30px;
    left: 0;
    width: 80%;
    height: 70%;
    display: flex;
    align-items: center;
    border-radius: 500px;
    justify-content: flex-start;

    @media (max-width: 749px) {
      height: 60%;
    }
    .icon {
      width: auto;
      max-width: 100%;
      height: 70%;
      margin-left: 8%;

      @media (max-width: 749px) {
        height: 60%;
      }
    }
  }
}

.rvt-billboard--reverse {
  @media screen and (min-width: 46.25em) {
    flex-direction: row-reverse;
  }
  .icon-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 100%;

    .bg {
      background: #f8f9f8;
      height: 200px;
      width: 80%;
      margin-left: 0;

      @media (max-width: 749px) {
        height: 150px;
      }
    }

    .icon-box {
      position: absolute;
      top: 30px;
      left: unset;
      right: 0;
      width: 80%;
      height: 70%;
      display: flex;
      align-items: center;
      border-radius: 500px;
      justify-content: flex-end;
      @media (max-width: 749px) {
        height: 60%;
      }
      .icon {
        width: auto;
        max-width: 100%;
        height: 70%;
        margin-right: 15%;

        @media (max-width: 749px) {
          height: 60%;
        }
      }
    }
  }
}
</style>
