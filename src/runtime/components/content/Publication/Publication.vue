<template>
  <div>
    <div class="top-details rvt-row">
      <div class="left rvt-cols">
        <span class="rvt-text-uppercase rvt-ts-xs">{{ pub.journal }}</span>
        <p class="rvt-text-bold rvt-ts-xs">{{ pub.title }}</p>
        <p class="rvt-text-regular rvt-ts-xs">{{ pub.author }}</p>
        <p class="rvt-text-regular rvt-ts-xs">
          {{
            `${pub.year || ""} ${pub.volume ? "Volume " + pub.volume : ""} ${
              pub.issue ? "Issue " + pub.issue : ""
            } ${pub.pages ? "Pages " + pub.pages : ""}`.trim()
          }}
        </p>
        <NuxtLink
          v-if="pub.link.text"
          :to="pub.link.href"
          class="rvt-cta rvt-text-medium rvt-ts-xs"
          :target="pub.link.external ? '_blank' : '_self'"
          >{{ pub.link.text }}</NuxtLink
        >
        <div v-if="pub.abstract" class="abstract">
          <AbstractAccordion :accordions="abstract" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AbstractAccordion from "../../ui/AbstractAccordion/AbstractAccordion.vue";

interface Link {
  text: string;
  href: string;
  external: boolean;
}

interface Publication {
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

const props = defineProps({
  pub: {
    type: Object as () => Publication,
    default: () => ({
      title:
        "Variants in ACPP are associated with cerebrospinal fluid Prostatic Acid Phosphatase levels",
      author:
        "Staley LA Ebbert MT, Bunker D, Bailey M; Alzheimer’s Disease Neuroimaging Initiative, Ridge PG, Goate AM, Kauwe JS.",
      journal: "Bmc genomics",
      year: "2016",
      link: {
        text: "View NCRAD samples used in this study: NIA-LOAD Family Study",
        href: "#",
        external: false,
      },
      abstract: "Abstract Content here",
      issue: "3",
      pages: "439",
      volume: "17",
    }),
  },
});

const abstract = [{ title: "Abstract", content: props.pub.abstract }];
</script>

<style lang="scss">
.top-details {
  .left {
    p {
      margin: 0.25rem 0;
    }
  }
}
</style>
