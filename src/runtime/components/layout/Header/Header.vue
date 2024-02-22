<template>
  <header :key="$route.path" class="rvt-header-wrapper rvt-c-header-wrapper">
    <a class="rvt-header-wrapper__skip-link" href="#main-content"
      >Skip to main content</a
    >
    <div class="rvt-header-global">
      <div :class="`rvt-container-${size}`">
        <div class="rvt-header-global__inner">
          <div class="rvt-header-global__logo-slot rvt-flex rvt-align-center">
            <NuxtLink class="rvt-lockup" to="/">
              <div class="logo">
                <nuxt-img
                  :src="props.logo?.desktop.src"
                  :alt="props.logo?.desktop.alt"
                  class="rvt-hide-lg-down desktop-logo"
                  format="webp"
                />
                <nuxt-img
                  :src="props.logo?.mobile.src"
                  :alt="props.logo?.mobile.alt"
                  class="rvt-hide-lg-up mobile-logo"
                  format="webp"
                />
              </div>
            </NuxtLink>
          </div>
          <div class="rvt-header-global__controls rvt-items-end">
            <!-- Navigation -->
            <div
              data-rvt-disclosure="menu"
              data-rvt-close-click-outside
              class="custom-header-dsktp"
            >
              <button
                aria-expanded="false"
                class="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
                data-rvt-disclosure-toggle="menu"
              >
                <span class="rvt-sr-only">Menu</span>
                <svg
                  class="rvt-global-toggle__open"
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15 4H1V2h14v2Zm0 5H1V7h14v2ZM1 14h14v-2H1v2Z"
                  ></path>
                </svg>
                <svg
                  class="rvt-global-toggle__close"
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m3.5 2.086 4.5 4.5 4.5-4.5L13.914 3.5 9.414 8l4.5 4.5-1.414 1.414-4.5-4.5-4.5 4.5L2.086 12.5l4.5-4.5-4.5-4.5L3.5 2.086Z"
                  ></path>
                </svg>
              </button>
              <nav
                aria-label="Main"
                class="rvt-header-menu rvt-c-topbar-menu"
                data-rvt-disclosure-target="menu"
                hidden
              >
                <ul class="rvt-header-menu__list">
                  <li
                    v-for="(item, index) in props.topMenu"
                    :key="index"
                    class="rvt-header-menu__item"
                  >
                    <Button :href="item.url" variant="secondary-btn">{{
                      item.title
                    }}</Button>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              data-rvt-disclosure="menu"
              data-rvt-close-click-outside
              class="custom-header-mobile"
            >
              <button
                aria-expanded="false"
                class="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
                data-rvt-disclosure-toggle="menu"
              >
                <span class="rvt-sr-only">Menu</span>
                <svg
                  class="rvt-global-toggle__open"
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15 4H1V2h14v2Zm0 5H1V7h14v2ZM1 14h14v-2H1v2Z"
                  ></path>
                </svg>
                <svg
                  class="rvt-global-toggle__close"
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="m3.5 2.086 4.5 4.5 4.5-4.5L13.914 3.5 9.414 8l4.5 4.5-1.414 1.414-4.5-4.5-4.5 4.5L2.086 12.5l4.5-4.5-4.5-4.5L3.5 2.086Z"
                  ></path>
                </svg>
              </button>
              <nav
                aria-label="Secondary"
                class="rvt-header-menu rvt-c-header-menu"
                data-rvt-disclosure-target="local-header-menu"
                hidden
              >
                <ul class="rvt-header-menu__list">
                  <li
                    v-for="(item, index) in props.mainMenu"
                    :key="`secondary-${index}`"
                    class="rvt-header-menu__item"
                  >
                    <div
                      v-if="item.children && item.children.length > 0"
                      class="rvt-header-menu__dropdown rvt-dropdown"
                      :data-rvt-dropdown="`secondary-nav-` + index"
                    >
                      <div
                        :class="[
                          'rvt-header-menu__group  rvt-secondary-menu-group',
                          isActiveLink(item.url) ? 'rvt-c-link-active' : '',
                        ]"
                      >
                        <NuxtLink
                          class="rvt-header-menu__link rvt-text-uppercase"
                          :to="item.url"
                          :target="item.external ? '_blank' : ''"
                        >
                          {{ item.title }}</NuxtLink
                        >

                        <button
                          v-if="item.children && item.children.length > 0"
                          aria-expanded="false"
                          class="rvt-dropdown__toggle rvt-header-menu__toggle rvt-c-menu-toggle"
                          :data-rvt-dropdown-toggle="`secondary-nav-` + index"
                        >
                          <span class="rvt-sr-only">Toggle Sub-navigation</span>
                          <svg
                            class="rvt-global-toggle__open"
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
                      <div
                        v-if="item.children && item.children.length > 0"
                        class="rvt-header-menu__submenu rvt-dropdown__menu rvt-dropdown__menu--right rvt-c-secondary-submenu"
                        :data-rvt-dropdown-menu="`secondary-nav-${index}`"
                        hidden
                      >
                        <ul
                          class="rvt-header-menu__submenu-list rvt-c-secondary-submenu-list"
                        >
                          <li
                            v-for="(subitem, subIndex) in item.children"
                            :key="`secondary-sub-${index}-${subIndex}`"
                            :class="[
                              'rvt-header-menu__submenu-item',
                              isActiveLink(subitem.url)
                                ? 'rvt-c-link-active'
                                : '',
                            ]"
                          >
                            <NuxtLink
                              v-if="!subitem.children"
                              class="rvt-header-menu__submenu-link"
                              :to="subitem.url"
                              :target="subitem.external ? '_blank' : ''"
                              >{{ subitem.title }}</NuxtLink
                            >
                            <!-- Level 2  -->
                            <div
                              v-else
                              :data-rvt-dropdown="
                                `secondary-sub-nav-` + subIndex
                              "
                            >
                              <div class="rvt-header-menu__group">
                                <NuxtLink
                                  class="rvt-header-menu__link"
                                  :to="subitem.url"
                                  :target="subitem.external ? '_blank' : ''"
                                >
                                  {{ subitem.title }}</NuxtLink
                                >
                                <button
                                  v-if="
                                    subitem.children &&
                                    subitem.children.length > 0
                                  "
                                  aria-expanded="false"
                                  class="rvt-dropdown__toggle rvt-header-menu__toggle rvt-m-lr-xs submenu-toggle"
                                  :data-rvt-dropdown-toggle="`secondary-sub-nav-${subIndex}`"
                                >
                                  <span class="rvt-sr-only"
                                    >Toggle Sub-navigation</span
                                  >
                                  <svg
                                    class="rvt-global-toggle__open"
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
                                <div class="placeholder-toggle"></div>
                              </div>
                              <div
                                v-if="
                                  subitem.children &&
                                  subitem.children.length > 0
                                "
                                class="sub-submenu"
                                :data-rvt-dropdown-menu="
                                  `secondary-sub-nav-` + subIndex
                                "
                                hidden
                              >
                                <ul
                                  class="rvt-header-menu__submenu-list rvt-c-secondary-submenu-list"
                                >
                                  <li
                                    v-for="(
                                      grandChild, grandChildIndex
                                    ) in subitem.children"
                                    :key="`secondary-sub-${index}-${subIndex}-${grandChildIndex}`"
                                    :class="[
                                      'rvt-header-menu__submenu-item',
                                      isActiveLink(subitem.url)
                                        ? 'rvt-c-link-active'
                                        : '',
                                    ]"
                                  >
                                    <NuxtLink
                                      class="rvt-header-menu__submenu-link"
                                      :to="grandChild.url"
                                      :target="
                                        grandChild.external ? '_blank' : ''
                                      "
                                      >{{ grandChild.title }}
                                    </NuxtLink>
                                    <!-- Sub -->
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <!-- Level 2 : End -->
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      v-if="!item.children"
                      :class="[
                        'rvt-header-menu__group  rvt-secondary-menu-group rvt-text-uppercase',
                        isActiveLink(item.url) ? 'rvt-c-link-active' : '',
                      ]"
                    >
                      <NuxtLink
                        class="rvt-header-menu__link simple-link"
                        :to="item.url"
                        :target="item.external ? '_blank' : ''"
                        >{{ item.title }}</NuxtLink
                      >
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            <div
              v-if="allowSearch"
              data-rvt-disclosure="search"
              data-rvt-close-click-outside
              class="rvt-c-search"
            >
              <button
                class="rvt-global-toggle"
                data-rvt-disclosure-toggle="search"
                aria-expanded="false"
              >
                <span class="rvt-sr-only">Search</span>
                <svg
                  class="rvt-global-toggle__search"
                  fill="currentColor"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M7 2a5 5 0 1 0 0 10A5 5 0 0 0 7 2ZM0 7a7 7 0 1 1 12.606 4.192l3.101 3.1-1.414 1.415-3.1-3.1A7 7 0 0 1 0 7Z"
                  ></path>
                </svg>
              </button>
              <!-- Search field -->
              <form
                class="rvt-header-global__search"
                data-rvt-disclosure-target="search"
                role="search"
                method="get"
                hidden
                @submit.prevent="onSearch"
              >
                <label class="rvt-sr-only" for="search">Search</label>
                <div class="rvt-input-group">
                  <input
                    id="search"
                    v-model="searchQuery"
                    class="rvt-input-group__input rvt-text-input"
                    type="text"
                    name="q"
                  />
                  <div class="rvt-input-group__append">
                    <Button variant="primary">Search</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Secondary header area -->
    <div class="rvt-header rvt-c-header__secondary">
      <div class="rvt-container-xl">
        <div
          class="rvt-header-local__inner rvt-border-top rvt-c-header-inner"
          data-rvt-disclosure="local-header-menu"
          data-rvt-close-click-outside
        >
          <span class="rvt-hide-lg-up rvt-header-local__title">Menu</span>

          <button
            aria-expanded="false"
            class="rvt-global-toggle rvt-global-toggle--menu rvt-hide-lg-up"
            data-rvt-disclosure-toggle="local-header-menu"
          >
            <span class="rvt-sr-only">Toggle local menu</span>
            <svg fill="currentColor" width="16" height="16" viewBox="0 0 16 16">
              <path
                d="m15.146 6.263-1.292-1.526L8 9.69 2.146 4.737.854 6.263 8 12.31l7.146-6.047Z"
              ></path>
            </svg>
          </button>
          <!-- Secondary navigation links -->
          <nav
            aria-label="Secondary"
            :class="[
              'rvt-header-menu rvt-c-header-menu',
              centered ? 'centered' : '',
            ]"
            data-rvt-disclosure-target="local-header-menu"
            hidden
          >
            <ul class="rvt-header-menu__list">
              <li
                v-for="(item, index) in props.mainMenu"
                :key="`secondary-${index}`"
                class="rvt-header-menu__item"
              >
                <div
                  v-if="item.children && item.children.length > 0"
                  class="rvt-header-menu__dropdown rvt-dropdown"
                  :data-rvt-dropdown="`secondary-nav-` + index"
                >
                  <div
                    :class="[
                      'rvt-header-menu__group  rvt-secondary-menu-group',
                      isActiveLink(item.url) ? 'rvt-c-link-active' : '',
                    ]"
                  >
                    <NuxtLink
                      class="rvt-header-menu__link rvt-text-uppercase"
                      :to="item.url"
                      :target="item.external ? '_blank' : ''"
                    >
                      {{ item.title }}</NuxtLink
                    >

                    <button
                      v-if="item.children && item.children.length > 0"
                      aria-expanded="false"
                      class="rvt-dropdown__toggle rvt-header-menu__toggle rvt-c-menu-toggle"
                      :data-rvt-dropdown-toggle="`secondary-nav-` + index"
                    >
                      <span class="rvt-sr-only">Toggle Sub-navigation</span>
                      <svg
                        class="rvt-global-toggle__open"
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
                  <div
                    v-if="item.children && item.children.length > 0"
                    class="rvt-header-menu__submenu rvt-dropdown__menu rvt-dropdown__menu--right rvt-c-secondary-submenu"
                    :data-rvt-dropdown-menu="`secondary-nav-${index}`"
                    hidden
                  >
                    <ul
                      class="rvt-header-menu__submenu-list rvt-c-secondary-submenu-list"
                    >
                      <li
                        v-for="(subitem, subIndex) in item.children"
                        :key="`secondary-sub-${index}-${subIndex}`"
                        :class="[
                          'rvt-header-menu__submenu-item',
                          isActiveLink(subitem.url) ? 'rvt-c-link-active' : '',
                        ]"
                      >
                        <NuxtLink
                          v-if="!subitem.children"
                          class="rvt-header-menu__submenu-link"
                          :to="subitem.url"
                          :target="subitem.external ? '_blank' : ''"
                          >{{ subitem.title }}</NuxtLink
                        >
                        <!-- Level 2 Submenu Starts Here -->
                        <div
                          v-else
                          :data-rvt-dropdown="`secondary-sub-nav-` + subIndex"
                        >
                          <div class="rvt-header-menu__group">
                            <NuxtLink
                              class="rvt-header-menu__link"
                              :to="subitem.url"
                              :target="subitem.external ? '_blank' : ''"
                            >
                              {{ subitem.title }}</NuxtLink
                            >
                            <button
                              v-if="
                                subitem.children && subitem.children.length > 0
                              "
                              aria-expanded="false"
                              class="rvt-dropdown__toggle rvt-header-menu__toggle rvt-m-lr-xs submenu-toggle"
                              :data-rvt-dropdown-toggle="`secondary-sub-nav-${subIndex}`"
                            >
                              <span class="rvt-sr-only"
                                >Toggle Sub-navigation</span
                              >
                              <svg
                                class="rvt-global-toggle__open"
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
                            <div class="placeholder-toggle"></div>
                          </div>
                          <div
                            v-if="
                              subitem.children && subitem.children.length > 0
                            "
                            class="sub-submenu"
                            :data-rvt-dropdown-menu="
                              `secondary-sub-nav-` + subIndex
                            "
                            hidden
                          >
                            <ul
                              class="rvt-header-menu__submenu-list rvt-c-secondary-submenu-list"
                            >
                              <li
                                v-for="(
                                  grandChild, grandChildIndex
                                ) in subitem.children"
                                :key="`secondary-sub-${index}-${subIndex}-${grandChildIndex}`"
                                :class="[
                                  'rvt-header-menu__submenu-item',
                                  isActiveLink(subitem.url)
                                    ? 'rvt-c-link-active'
                                    : '',
                                ]"
                              >
                                <NuxtLink
                                  class="rvt-header-menu__submenu-link"
                                  :to="grandChild.url"
                                  :target="grandChild.external ? '_blank' : ''"
                                  >{{ grandChild.title }}</NuxtLink
                                >
                                <!-- Sub of This SubMenu Goes Here-->
                              </li>
                            </ul>
                          </div>
                        </div>
                        <!-- Level 2 Submenu : End -->
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  v-if="!item.children"
                  :class="[
                    'rvt-header-menu__group  rvt-secondary-menu-group rvt-text-uppercase',
                    isActiveLink(item.url) ? 'rvt-c-link-active' : '',
                  ]"
                >
                  <NuxtLink
                    class="rvt-header-menu__link simple-link"
                    :to="item.url"
                    :target="item.external ? '_blank' : ''"
                    >{{ item.title }}
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "../../base/Button/Button.vue";

const emit = defineEmits(["search"]);
const searchQuery = ref("");
const onSearch = () => {
  emit("search", searchQuery.value);
};

const props = defineProps({
  centered: { type: Boolean, default: false },
  allowSearch: { type: Boolean, default: false },
  logo: {
    type: Object as () => {
      mobile: { src: string; alt: string };
      desktop: { src: string; alt: string };
    },
    default: () => ({
      mobile: { src: "", alt: "" },
      desktop: { src: "", alt: "" },
    }),
  },
  size: {
    type: String,
    default: "xl",
    validator: (value: string) =>
      ["sm", "md", "lg", "xl", "xxl"].includes(value),
  },
  topMenu: {
    type: Array as () => Array<{
      title: string;
      url: string;
      external: boolean;
    }>,
    default: () => [
      { title: "Donate", url: "/" },
      { title: "Get Updates", url: "/" },
    ],
  },
  mainMenu: {
    type: Array as () => Array<{
      title: string;
      url: string;
      external: boolean;
      children?: Array<{
        title: string;
        url: string;
        external: boolean;
        children?: Array<{ title: string; url: string; external: boolean }>;
      }>;
    }>,
    default: () => [
      {
        title: "About",
        url: "/about",
        external: false,
        children: [
          { title: "Services", url: "/components/accordion", external: false },
          { title: "Team", url: "/about/team", external: false },
          { title: "Committees", url: "/about/committees", external: false },
          { title: "Newsletters", url: "/about/newsletters", external: false },
        ],
      },
      {
        title: "Bank Samples",
        url: "/bank_samples",
        external: false,
        children: [
          {
            title: "Apply to Bank",
            url: "/bank_samples/apply_to_bank",
            external: false,
          },
          {
            title: "Sample Types We Bank",
            url: "/bank_samples/sample_we_bank",
            external: false,
            children: [
              { title: "Sample One", url: "/sample_one", external: false },
              { title: "Sample Two", url: "/two", external: false },
              { title: "Sample Three", url: "/three", external: false },
            ],
          },
          {
            title: "IPSCs & Fibroblasts",
            url: "/bank_samples/ipsc_fibroblasts",
            external: false,
          },
          {
            title: "APOE Genotyping",
            url: "/bank_samples/apoe_genotyping",
            external: false,
          },
          {
            title: "Shipping Samples",
            url: "/bank_samples/mta_in",
            external: false,
          },

          {
            title: "Sample Management",
            url: "/bank_samples/recommended_consent_language",
            external: false,
          },
        ],
      },
    ],
  },
});
</script>

<script lang="ts">
export default {
  methods: {
    isActiveLink(link: string) {
      return this.$route?.path?.includes(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.desktop-logo {
  width: 275px;
}

.mobile-logo {
  width: 100px;
}

.rvt-c-header__secondary,
.custom-header-dsktp {
  @media screen and (max-width: 1080px) {
    display: none;
  }
}

.custom-header-mobile,
.rvt-header-menu__mobile,
.rvt-c-search {
  @media screen and (min-width: 1080px) {
    display: none;
  }
}

.rvt-c-header-wrapper {
  @media screen and (min-width: 67em) {
    box-shadow: none;
  }

  .rvt-c-header-inner {
    @media screen and (min-width: 67em) {
      border-top: 1px solid #8f8f8f !important;
    }
  }
}

.rvt-c-header-menu {
  z-index: 1000;

  .rvt-header-menu__list {
    .rvt-header-menu__item {
      .rvt-secondary-menu-group {
        width: 100%;
        position: relative;

        @media screen and (min-width: 67.5em) {
          padding: 0.55rem 0.75rem;
        }

        &:focus-within {
          box-shadow: 0 0 0 2px var(--nav-link-focus-outline);
        }

        &:hover,
        &:focus,
        &:active {
          background-color: #edfafd;

          a {
            outline: none;
          }
        }

        a {
          font-size: 0.75rem;
          font-weight: 520;

          &:focus,
          &:active {
            outline: none;
          }
        }
      }

      .rvt-header-menu__submenu {
        top: unset;
        .rvt-c-secondary-submenu-list {
          .rvt-header-menu__submenu-item {
            padding: 0 0 0 1.5rem;

            @media (max-width: 67.5em) {
              padding: 0 0 0 2.2rem;
            }

            &:hover,
            &:focus,
            &:active {
              background-color: var(--nav-link-hover-bg);
              outline: none;
            }

            &:hover {
              background: unset;
            }

            a {
              &:hover,
              &:focus,
              &:active {
                background-color: var(--nav-link-hover-bg) !important;
                color: var(--black) !important;
                outline: none;
                box-shadow: none !important;
              }

              @media (min-width: 67.5em) {
                padding-right: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
}

.rvt-c-menu-toggle,
.submenu-toggle {
  width: 1rem;
  height: 1rem;
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: transparent;
    outline: none;
    color: inherit;
  }

  &:active {
    outline: none;
  }
}

.rvt-c-menu-toggle {
  background-color: #c6ecf6;
}

.submenu-toggle {
  @media screen and (max-width: 67.5em) {
    position: absolute;
    right: 0;
  }
}

.rvt-c-secondary-submenu {
  padding: 0;
  left: 0;
  background: #f8f9fa;

  @media screen and (min-width: 67.5em) {
    border-radius: 0;
  }

  &-list {
    border-left: none;

    li {
      a {
        padding-left: 1rem;
        outline: none;
        box-shadow: none;
        font-weight: 420;
        border-left: 0.3rem solid var(--submenu-outline-1);

        &:focus,
        &:active,
        &[aria-current]:not([aria-current="false"]) {
          outline: none;
          background-color: #c6ecf6;
          color: inherit;
          box-shadow: none;
        }
      }
    }
  }

  .sub-submenu {
    li {
      padding: 0 0 0 2rem !important;

      a {
        border-left: 0.3rem solid var(--submenu-outline-2);
      }
    }
  }
}

.custom-header-mobile {
  .rvt-c-header-menu {
    left: unset;
    right: -3rem;
    // width: 50%;
    box-shadow: 0 0.25rem 1rem rgba(36, 49, 66, 0.2);

    .rvt-header-menu__list {
      padding: 0;
      margin: 0;

      .rvt-header-menu__item {
        .rvt-secondary-menu-group {
          padding: 0.2rem 1.2rem;
        }
      }
    }
  }
}

.centered {
  @media screen and (min-width: 67.5em) {
    width: 100%;
    justify-content: center;
  }
}
</style>
