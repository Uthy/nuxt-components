import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    const script1 = document.createElement("script");
    script1.src = "https://unpkg.com/rivet-icons@2.0.0/dist/rivet-icons.js";
    script1.defer = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://unpkg.com/rivet-icons@2.0.0/dist/rivet-icon-element.js";
    script2.defer = true;
    document.body.appendChild(script2);
  }
});
