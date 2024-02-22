import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const link = document.createElement("link");
    link.rel = "preload";
    link.href = "https://unpkg.com/rivet-core/js/rivet.min.js";
    link.as = "script";
    document.head.appendChild(link);

    const script = document.createElement("script");
    script.src = "https://unpkg.com/rivet-core/js/rivet.min.js";
    script.defer = true;
    script.onload = () => Rivet.init();
    document.head.appendChild(script);
  }
});
