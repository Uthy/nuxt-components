<template>
  <div
    :class="[
      'rvt-card',
      'rvt-card--raised',
      'rvt-m-bottom-sm',
      props.horizontal ? 'rvt-card--horizontal' : '',
      classes,
    ]"
  >
    <div v-if="props.image && props.image.src" class="rvt-card__image">
      <NuxtImg :src="props.image?.src" :alt="props.image?.alt" />
    </div>
    <div class="rvt-card__body">
      <div
        class="rvt-card__title rvt-text-uppercase rvt-c-card_title rvt-ts-xs rvt-p-right-none"
      >
        {{ props.title }}
      </div>
      <div
        v-if="$slots['content']"
        class="rvt-card__content rvt-c-card_content rvt-p-tb-xs"
      >
        <slot name="content" />
      </div>
      <div v-if="$slots['actions']" class="card--actions">
        <slot name="actions" />
      </div>
      <div v-if="$slots['meta']" class="rvt-card__meta rvt-ts-xxs rvt-m-top-sm">
        <slot name="meta" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
interface Image {
  src: string;
  alt: string;
}
const props = defineProps({
  image: {
    type: Object as () => Image,
    default: () => ({
      src: "",
      alt: "",
    }),
  },
  title: {
    type: String,
    default: "",
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  xs: {
    type: String,
    default: "",
  },
  sm: {
    type: String,
    default: "",
  },
  md: {
    type: String,
    default: "",
  },
  lg: {
    type: String,
    default: "",
  },
  xl: {
    type: String,
    default: "",
  },
});

const sizes = ["xs", "sm", "md", "lg", "xl"];
const classes = computed(() => {
  let classes = "";
  for (const size of sizes) {
    if (props[size as keyof typeof props]) {
      classes += ` rvt-cols-${props[size as keyof typeof props]}-${size}`;
    }
  }
  return classes.trim();
});
</script>

<style lang="scss">
.rvt-c-card_title {
  font-size: 1rem;
  letter-spacing: 1.5px;
  font-weight: 520;
  color: var(--card-title-color);
}

.rvt-c-card_content {
  margin-top: 1rem;
  * {
    font-size: 0.875rem;
  }
}
</style>
