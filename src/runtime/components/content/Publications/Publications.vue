<template>
  <div class="publications">
    <div
      class="header rvt-flex rvt-ts-xs rvt-items-center rvt-justify-space-between"
    >
      <div class="search">
        <label for="search" class="rvt-label rvt-sr-only">Search</label>
        <input
          id="search"
          v-model="searchTerm"
          type="text"
          class="rvt-text-input rvt-c-input"
          placeholder="Search"
        />
      </div>
      <div class="sort rvt-flex rvt-items-center">
        <label
          for="sort-by"
          class="rvt-label rvt-text-uppercase rvt-text-medium w-100"
          >Sort By:</label
        >
        <select
          id="sort-by"
          v-model="sortKey"
          class="rvt-select rvt-c-select w-100"
        >
          <option disabled value="">Select a Field</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="journal">Journal</option>
          <option value="year">Year</option>
        </select>
      </div>
    </div>

    <div ref="pubsList" class="publications-list rvt-p-tb-lg">
      <template v-for="(pub, index) in pagedPubs" :key="index">
        <Publication :pub="pub as Pub" />
      </template>

      <template v-if="pubs.length > perPage">
        <Pagination
          :total-pages="totalPages"
          :current-page="currentPage"
          @update:current-page="updateCurrentPage"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import Publication from "../Publication/Publication.vue";
import Pagination from "../../ui/Pagination/Pagination.vue";

interface Link {
  text: string;
  href: string;
  external: boolean;
}

interface Pub {
  title: string;
  author: string;
  journal: string;
  year: string;
  link: Link;
  abstract: string;
  issue: string;
  pages: string;
  volume: string;
}

/*
const samplePubs: Pub[] = [
  ...Array.from({ length: 12 }, (_, i) => ({
    title: `Sample Publication ${i + 3}`,
    author: `Author ${i + 7}, Author ${i + 8}, Author ${i + 9}`,
    journal: `Sample Journal ${i + 3}`,
    year: `${2020 + i}`,
    link: {
      text: `View Sample Publication ${i + 3}`,
      href: "#",
      external: false,
    },
    abstract: `This is the abstract for Sample Publication ${i + 3}`,
    download: "#",
    issue: `${i + 3}`,
    pages: `${100 * (i + 3)}`,
    volume: `${20 + i}`,
  })),
];
*/

const props = defineProps({
  perPage: {
    type: Number,
    default: 5,
  },
  pubs: {
    type: Array as () => Pub[],
    default: () => [],
  },
});

const currentPage = ref(1);
const pubsList = ref<HTMLElement | null>(null);
const searchTerm = ref("");
const sortKey = ref("");

const filteredAndSortedPubs = computed(() => {
  let result = props.pubs;

  if (searchTerm.value) {
    const term = searchTerm.value.toLowerCase();
    result = result.filter(
      (pub) =>
        pub.title?.toLowerCase().includes(term) ||
        pub.author?.toLowerCase().includes(term) ||
        pub.journal?.toLowerCase().includes(term) ||
        pub.year?.toString().includes(term),
    );
  }

  if (sortKey.value) {
    result = [...result].sort((a, b) => {
      const aValue = a[sortKey.value as keyof typeof a];
      const bValue = b[sortKey.value as keyof typeof b];

      if (typeof aValue === "string" && typeof bValue === "string") {
        return aValue.localeCompare(bValue);
      } else if (typeof aValue === "number" && typeof bValue === "number") {
        return aValue - bValue;
      } else {
        return aValue.toString().localeCompare(bValue.toString());
      }
    });
  }
  return result;
});

const totalPages = computed(() =>
  Math.ceil(filteredAndSortedPubs.value?.length / props.perPage),
);

const pagedPubs = computed(() => {
  const start = (currentPage.value - 1) * props.perPage;
  const end = start + props.perPage;
  return filteredAndSortedPubs?.value?.slice(start, end);
});

const updateCurrentPage = (page: number) => {
  currentPage.value = page;
  pubsList.value?.scrollIntoView();
};
</script>

<style lang="scss" scoped>
.publications {
  .publications-list {
    > * {
      margin-bottom: 3rem;
    }
  }
  .header {
    @media screen and (max-width: 767px) {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start !important;
      gap: 1rem;
    }

    .search {
      @media screen and (max-width: 767px) {
        width: 60%;
      }
    }

    .sort {
      @media screen and (max-width: 767px) {
        width: 60%;
      }

      label {
        @media screen and (max-width: 767px) {
          width: 50%;
        }
      }
    }
  }
}
</style>
