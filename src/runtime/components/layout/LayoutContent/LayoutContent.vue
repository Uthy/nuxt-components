<template>
  <div class="rvt-layout__content rvt-c-top-padding rvt-p-bottom-none">
    <Breadcrumbs />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs.vue";
</script>

<style scoped lang="scss">
@media screen and (min-width: 46.25em) {
  .rvt-c-top-padding {
    padding-top: 3rem;
  }
}
</style>
