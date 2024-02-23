<template>
  <div id="section-nav" class="rvt-layout__sidebar rvt-c-top-padding">
    <nav class="rvt-sidenav" aria-labelledby="section-pages" data-rvt-sidenav>
      <span id="section-pages" class="rvt-sidenav__label ncrad-blue">{{
        props.sideBarTitle ? props.sideBarTitle : defaultTitle
      }}</span>
      <ul class="rvt-sidenav__list">
        <li
          v-for="(item, index) in props.navItems"
          :key="index"
          class="rvt-sidenav__item rvt-c-sidenav__item"
        >
          <div class="rvt-sidenav__item-wrapper">
            <NuxtLink
              :to="item.url"
              :target="item.external ? '_blank' : '_self'"
              class="rvt-sidenav__link rvt-c-sidenav__link"
              :aria-current="$route.path === item.url ? 'page' : null"
              >{{ item.title }}</NuxtLink
            >
            <button
              v-if="item.children && item.children.length > 0"
              class="rvt-sidenav__toggle"
              :data-rvt-sidenav-toggle="'toggle-' + index"
            >
              <span class="rvt-sr-only">Toggle {{ item.title }} menu</span>
              <svg
                fill="currentColor"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  d="m15.146 6.263-1.292-1.526L8 9.69 2.146 4.737.854 6.263 8 12.31l7.146-6.047Z"
                ></path>
              </svg>
            </button>
          </div>
          <ul
            v-if="item.children && item.children.length > 0"
            class="rvt-sidenav__list"
            :data-rvt-sidenav-list="'toggle-' + index"
          >
            <li
              v-for="(child, childIndex) in item.children"
              :key="`child-${childIndex}`"
              class="rvt-sidenav__item rvt-c-sidenav__item"
            >
              <div class="rvt-sidenav__item-wrapper">
                <NuxtLink
                  :to="child.url"
                  :target="child.external ? '_blank' : '_self'"
                  class="rvt-sidenav__link"
                  >{{ child.title }}</NuxtLink
                >
                <button
                  v-if="child.children && child.children.length > 0"
                  class="rvt-sidenav__toggle"
                  :data-rvt-sidenav-toggle="
                    'toggle-' + index + '-' + childIndex
                  "
                >
                  <span class="rvt-sr-only">Toggle {{ child.title }} menu</span>
                  <svg
                    fill="currentColor"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="m15.146 6.263-1.292-1.526L8 9.69 2.146 4.737.854 6.263 8 12.31l7.146-6.047Z"
                    ></path>
                  </svg>
                </button>
              </div>
              <ul
                v-if="child.children && child.children.length > 0"
                class="rvt-sidenav__list"
                :data-rvt-sidenav-list="'toggle-' + index + '-' + childIndex"
              >
                <li
                  v-for="(grandChild, grandChildIndex) in child.children"
                  :key="`grandchild-${grandChildIndex}`"
                  class="rvt-sidenav__item rvt-c-sidenav__item submenu"
                >
                  <div class="rvt-sidenav__item-wrapper">
                    <NuxtLink
                      :to="grandChild.url"
                      :target="grandChild.external ? '_blank' : '_self'"
                      class="rvt-sidenav__link"
                      >{{ grandChild.title }}</NuxtLink
                    >
                    <button
                      v-if="
                        grandChild.children && grandChild.children.length > 0
                      "
                      class="rvt-sidenav__toggle"
                      :data-rvt-sidenav-toggle="
                        'toggle-' + index + '-' + childIndex
                      "
                    >
                      <span class="rvt-sr-only"
                        >Toggle {{ grandChild.title }} sub menu</span
                      >
                      <svg
                        fill="currentColor"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m15.146 6.263-1.292-1.526L8 9.69 2.146 4.737.854 6.263 8 12.31l7.146-6.047Z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts" setup>
interface NavItem {
  title: string;
  url: string;
  external?: boolean;
  children?: NavItem[];
}

const props = defineProps({
  sideBarTitle: {
    type: String,
    default: "",
  },
  navItems: {
    type: Array as () => Array<NavItem>,
    default: () => [],
  },
});
</script>

<script lang="ts">
export default {
  computed: {
    defaultTitle() {
      const route = this.$route;
      const title = () => {
        const pathArray = route.path.split("/");
        return pathArray.length > 1
          ? pathArray[1].charAt(0).toUpperCase() +
              pathArray[1].slice(1).replace(/-/g, " ")
          : "";
      };
      return title();
    },
  },
};
</script>

<style lang="scss" scoped>
.rvt-c-sidenav__link[aria-current="page"] {
  color: #006298;
  font-weight: bold;
}

.rvt-c-sidenav__link[aria-current="page"] + .rvt-sidenav__toggle {
  background-color: #c6ecf6;
}

.rvt-c-sidenav__link[aria-current="page"] + .rvt-sidenav__toggle > svg {
  color: #006298;
}

.rvt-c-sidenav__item .rvt-c-sidenav__item.submenu {
  border-left: 0.25rem solid #191919 !important;
}
</style>
