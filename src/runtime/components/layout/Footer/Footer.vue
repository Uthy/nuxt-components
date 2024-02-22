<template>
  <footer>
    <div
      aria-labelledby="resources-heading"
      class="rvt-footer-resources rvt-container-xxl rvt-c-footer-section"
      role="complementary"
    >
      <h2 id="resources-heading" class="rvt-sr-only">Additional resources</h2>
      <div class="rvt-container-xl">
        <div class="rvt-row">
          <div v-if="props.quickLinks" class="rvt-cols-3-md quick-links">
            <h3 class="rvt-footer-resources__heading">Quick Links</h3>
            <ul class="rvt-footer-resources__list rvt-c-footer-links">
              <li
                v-for="(item, index) in props.quickLinks"
                :key="index"
                class="rvt-footer-resources__list-item"
              >
                <NuxtLink
                  :to="item.url"
                  class="rvt-button rvt-button--plain rvt-button--full-width rvt-bg-white rvt-c-custom-footer-btn"
                  >{{ item.title }}</NuxtLink
                >
              </li>
            </ul>
          </div>

          <div v-if="props.siteMap" class="rvt-cols-3-md rvt-ts-xs site-map">
            <h3 class="rvt-footer-resources__heading">Site Map</h3>
            <ul class="rvt-footer-resources__list rvt-c-footer-links">
              <li
                v-for="(item, index) in props.siteMap"
                :key="index"
                class="rvt-footer-resources__list-item"
              >
                <NuxtLink :to="item.url" class="site-map-link">{{
                  item.title
                }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div v-if="props.contact" class="rvt-cols-3-md rvt-ts-xs contact">
            <h3 class="rvt-footer-resources__heading">Contact Us</h3>
            <ul class="rvt-footer-resources__list rvt-c-footer-links">
              <li class="rvt-footer-resources__list-item rvt-ts-xs">
                <p>
                  <strong>Email: </strong
                  ><a
                    class="rvt-text-regular rvt-display-inline"
                    :href="`mailto:${props.contact?.email}`"
                    >{{ props.contact?.email }}</a
                  >
                </p>
              </li>
              <li class="rvt-footer-resources__list-item rvt-ts-xs">
                <p>
                  <strong>Phone: </strong
                  ><a
                    class="rvt-text-regular rvt-display-inline"
                    :href="`tel:${props.contact?.phone}`"
                    >{{ props.contact.phone }}</a
                  >
                </p>
              </li>
              <li class="rvt-footer-resources__list-item rvt-ts-xs location">
                <p>
                  <strong>Location: </strong
                  ><span
                    class="rvt-text-regular rvt-display-inline"
                    v-html="props.contact?.location"
                  ></span>
                </p>
              </li>
            </ul>
          </div>

          <div v-if="props.hours" class="rvt-cols-3-md rvt-ts-xs hours">
            <h3 class="rvt-footer-resources__heading">Hours</h3>
            <div v-html="hours"></div>
          </div>
        </div>
        <div
          v-if="props.footerText"
          class="footer-text rvt-text-center rvt-ts-xs"
        >
          <p>{{ props.footerText }}</p>
        </div>
      </div>
    </div>

    <footer class="rvt-footer-base rvt-bg-blue rvt-container-xxl">
      <div class="rvt-container-xl">
        <div class="rvt-footer-base__inner">
          <ul class="rvt-footer-base__list rvt-c-footer-links">
            <li
              v-for="(item, index) in props.footerBaseLinks"
              :key="index"
              class="footer-base-links rvt-footer-base__item rvt-ts-xxs"
            >
              <NuxtLink class="rvt-footer-base__link" :to="item.url">{{
                item.title
              }}</NuxtLink>
            </li>
            <li class="rvt-footer-base__item rvt-ts-xxs">
              <a
                class="rvt-footer-base__link"
                href="https://www.iu.edu/copyright/index.html"
                >Copyright</a
              >
              © 2023 The Trustees of
              <a class="rvt-footer-base__link" href="https://www.iu.edu"
                >Indiana University</a
              >
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </footer>
</template>

<script lang="ts" setup>
const props = defineProps({
  quickLinks: {
    type: Array as () => Array<{ title: string; url: string }>,
    default: () => [{ title: "Sample Types We bank", url: "/sample-types" }],
  },
  siteMap: {
    type: Array as () => Array<{ title: string; url: string }>,
    default: () => [
      { title: "About", url: "/about" },
      { title: "Services We Offer", url: "/services" },
    ],
  },
  contact: {
    type: Object as () => { email: string; phone: string; location: any },
    default: () => ({
      email: "alszstudy@iu.edu",
      phone: "800-526-2839",
      location:
        "NCRAD <br/> Indiana University School of Medicine <br/> 351 W. 10th St TK-217 <br/> Indianapolis, IN 46202",
    }),
  },
  hours: {
    type: null as any,
    default: "<p><strong>Monday through Friday: </strong>8 a.m to 5 p.m </p>",
  },
  footerText: {
    type: String,
    default:
      "NCRAD is grateful for the invaluable support it receives from the National Institute on Aging (NIA) under a cooperative grant (U24 AG021886)",
  },
  footerBaseLinks: {
    type: Array as () => Array<{ title: string; url: string }>,
    default: () => [
      { title: "Disclaimer", url: "/disclaimer" },
      { title: "Privacy Notice", url: "/privacy" },
    ],
  },
});
</script>

<style lang="scss" scoped>
.rvt-footer-resources {
  background-color: var(--footer-bg);

  .rvt-footer-resources__heading {
    color: var(--footer-heading-color);
  }

  > * {
    line-height: 1.8;
  }
}
.rvt-c-custom-footer-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--footer-quick-links-color);
  font-weight: 900 !important;
  border: 0.125rem solid var(--footer-quick-links-border-color);
  &:hover {
    text-decoration: none;
    color: var(--footer-quick-links-color);
  }
  &:active,
  &:focus {
    box-shadow:
      0 0 0 0.125rem #fff,
      0 0 0 0.25rem var(--footer-quick-links-border-color);
    outline: none;
  }
}
.rvt-c-footer-section {
  .rvt-c-footer-links {
    a {
      font-weight: 420;
    }
  }
}
</style>
