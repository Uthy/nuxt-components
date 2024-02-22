<template>
  <nav role="navigation" aria-label="More pages of items">
    <ul class="rvt-pagination">
      <li v-if="currentPage > 1" class="rvt-pagination__item">
        <a
          href="#0"
          aria-label="Go to first page"
          @click.prevent="changePage(1)"
        >
          <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16">
            <path d="M.586 8 7 14.414 8.414 13l-5-5 5-5L7 1.586.586 8Z"></path>
            <path
              d="M6.586 8 13 14.414 14.414 13l-5-5 5-5L13 1.586 6.586 8Z"
            ></path>
          </svg>
        </a>
      </li>
      <li v-if="currentPage > 1" class="rvt-pagination__item">
        <a
          href="#"
          aria-label="Go to previous page"
          @click.prevent="changePage(currentPage - 1)"
        >
          <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M9.737.854 3.69 8l6.047 7.146 1.526-1.292L6.31 8l4.953-5.854L9.737.854Z"
            ></path>
          </svg>
        </a>
      </li>
      <li
        v-for="page in displayedPages"
        :key="page"
        class="rvt-pagination__item"
      >
        <a
          href="#"
          :aria-label="'Page ' + page"
          :aria-current="page === currentPage ? 'page' : undefined"
          @click.prevent="changePage(page)"
        >
          {{ page }}
        </a>
      </li>
      <li v-if="currentPage < totalPages" class="rvt-pagination__item">
        <a
          href="#0"
          aria-label="Go to next page"
          @click.prevent="changePage(currentPage + 1)"
        >
          <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16">
            <path
              d="M6.263 15.146 12.31 8 6.263.854 4.737 2.146 9.69 8l-4.953 5.854 1.526 1.292Z"
            ></path>
          </svg>
        </a>
      </li>
      <li v-if="currentPage < totalPages" class="rvt-pagination__item">
        <a
          href="#0"
          aria-label="Go to last page"
          @click.prevent="changePage(totalPages)"
        >
          <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16">
            <path d="M9.414 8 3 1.586 1.586 3l5 5-5 5L3 14.414 9.414 8Z"></path>
            <path
              d="M15.414 8 9 1.586 7.586 3l5 5-5 5L9 14.414 15.414 8Z"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
const emit = defineEmits(["update:currentPage"]);

const props = defineProps({
  currentPage: {
    type: Number,
    default: 1,
  },
  totalPages: {
    type: Number,
    default: 1,
  },
});

const startPage = ref(1);

const displayedPages = computed(() => {
  const endPage = Math.min(startPage.value + 9, props.totalPages);
  return Array.from(
    { length: endPage - startPage.value + 1 },
    (_, i) => startPage.value + i,
  );
});

const changePage = (newPage: number) => {
  if (newPage > startPage.value + 9) {
    startPage.value += 10;
  } else if (newPage < startPage.value) {
    startPage.value -= 10;
  }
  emit("update:currentPage", newPage);
};
</script>

<style lang="scss">
.rvt-pagination {
  flex-wrap: wrap;
}
</style>
