<template>
  <nav
    class="rvt-flex rvt-items-center breadcrumb-wrap"
    role="navigation"
    aria-label="Breadcrumb"
  >
    <ol class="rvt-breadcrumbs rvt-grow-1">
      <li class="home-link">
        <NuxtLink to="/">
          <span class="rvt-sr-only">Home</span>
          <svg
            fill="currentColor"
            class=""
            width="16"
            height="16"
            viewBox="0 0 16 16"
          >
            <path
              d="m8 .798 7 4.667V15H9v-4.444H7V15H1V5.465L8 .798ZM3 6.535V13h2V8.556h6V13h2V6.535L8 3.202 3 6.535Z"
            ></path>
          </svg>
        </NuxtLink>
      </li>
      <li
        v-for="(breadcrumb, index) in breadcrumbs"
        :key="index"
        class="breadcrumb-li"
      >
        <NuxtLink :to="breadcrumb.path" class="breadcrumb-li__a">{{
          breadcrumb.name
        }}</NuxtLink>
      </li>
    </ol>
    <a
      class="sidebar-trigger rvt-hide-md-up rvt-text-regular rvt-ts-14 rvt-inline-flex rvt-items-center rvt-p-tb-xxs rvt-p-lr-xs rvt-link-bold rvt-border-radius rvt-bg-blue-000 rvt-shrink-0"
      @click="scrollToSection"
    >
      <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16">
        <path
          d="M7 1v10.844L2.146 7.737.854 9.263 8 15.31l7.146-6.047-1.292-1.526L9 11.844V1H7Z"
        ></path>
      </svg>
      <span class="rvt-m-left-xs">Section navigation</span>
    </a>
  </nav>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

interface Breadcrumb {
  name: string;
  path: string;
}

const scrollToSection = () => {
  const section = document.querySelector("#section-nav-mob");
  section?.scrollIntoView({ behavior: "smooth" });
};

const { pagePaths } = defineProps({
  pagePaths: {
    type: Array as () => Array<string>,
    default: () => {
      const route = useRoute();
      return route.fullPath.split("/");
    },
  },
});

const breadcrumbs = computed(() => {
  return pagePaths
    ?.map((path: string, index: number): Breadcrumb | undefined => {
      if (path) {
        let name = path;
        if (/[^a-zA-Z0-9]/.test(path)) {
          name = path
            .replace(/[^a-zA-Z0-9]/g, " ")
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        } else {
          name = path.charAt(0).toUpperCase() + path.slice(1);
        }
        return {
          name,
          path: pagePaths.slice(0, index + 1).join("/"),
        };
      }
      return undefined;
    })
    .filter(Boolean) as Breadcrumb[];
});
</script>

<style lang="scss" scoped>
.breadcrumb-wrap {
  .sidebar-trigger {
    cursor: pointer;
  }
  color: var(--breadcrumbs-color);
  ol {
    li {
      a {
        color: var(--breadcrumbs-color);

        svg {
          fill: var(--breadcrumbs-color);
        }
      }

      &:last-child {
        a {
          color: var(--black);
          pointer-events: none;
        }
      }
    }
  }
}
</style>
