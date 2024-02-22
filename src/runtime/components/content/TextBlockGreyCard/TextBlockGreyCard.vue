<template>
  <div>
    <div class="rvt-row rvt-row-loose rvt-items-start">
      <div class="rvt-cols-7-lg">
        <div class="rvt-billboard">
          <div class="rvt-billboard__body rvt-grow-2 rvt-c-billboard-body">
            <slot name="left" />
          </div>
        </div>
      </div>

      <div
        class="rvt-cols-5-lg rvt-flex rvt-items-center rvt-flex-column grey-cards"
      >
        <div
          class="rvt-c-featured rvt-flex rvt-items-center rvt-justify-center rvt-grow-1"
        >
          <div class="rvt-p-all-lg rvt-bg-black-000">
            <slot name="right" />
          </div>
        </div>

        <div
          v-if="$slots['right2']"
          class="rvt-c-featured rvt-flex rvt-items-center rvt-justify-center rvt-grow-1"
        >
          <div class="rvt-p-all-lg rvt-bg-black-000">
            <slot name="right2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.rvt-c-billboard-body {
  margin-top: 0;
  @media screen and (min-width: 46.25em) {
    flex-basis: 90%;
  }
}

.grey-cards {
  @media screen and (min-width: 46.25em) {
    gap: 1rem;
  }
}
.rvt-c-featured {
  @media screen and (max-width: 1080px) {
    margin-top: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>
