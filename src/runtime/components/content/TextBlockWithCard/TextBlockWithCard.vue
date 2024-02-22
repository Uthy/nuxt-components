<template>
  <div class="rvt-p-tb-lg">
    <div class="rvt-row rvt-row-loose">
      <div class="rvt-cols-7-md">
        <div class="rvt-billboard">
          <div class="rvt-billboard__body rvt-grow-2 rvt-c-billboard-body">
            <div class="rvt-billboard__content [ rvt-flow ]">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>

      <div class="rvt-cols-5-md rvt-c-featured">
        <slot name="card"></slot>
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
.rvt-c-featured {
  @media screen and (max-width: 46.25em) {
    margin-top: 1rem;
  }
}
</style>
