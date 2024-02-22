<template>
  <div class="rvt-row rvt-p-tb-md">
    <div class="rvt-cols-3-md rvt-cols-2-lg">
      <div class="rvt-billboard__image rvt-m-bottom-lg icon-wrapper">
        <div>
          <div class="bg"></div>
          <div class="icon-box">
            <span class="step-number rvt-color-white rvt-ts-lg rvt-text-bold">{{
              props.step
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="rvt-cols-md rvt-m-left-xl-md-up">
      <div class="rvt-billboard__body rvt-grow-2 rvt-c-billboard-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  step: {
    type: null as any,
    default: "1",
  },
});
</script>

<style lang="scss" scoped>
.rvt-c-billboard-body {
  margin-top: 1rem;
}
.icon-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 100%;

  .bg {
    background: #f8f9f8;
    height: 100px;
    width: 100%;
    @media (max-width: 749px) {
      width: 95%;
      height: 100px;
    }
  }
  .icon-box {
    position: absolute;
    top: 10px;
    right: -35px;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    background: linear-gradient(
      90deg,
      var(--gradient-color-1) 0%,
      var(--gradient-color-2) 60%
    );
    border-radius: 50%;
    justify-content: center;

    @media (max-width: 749px) {
      right: -10px;
    }

    .step-number {
      font-family: "brandon-grotesque", sans-serif;
      font-weight: 700;
      font-size: 3.5rem !important;
      font-style: italic;
    }
  }
}
</style>
