export default defineNuxtConfig({
  modules: ["../src/module", "@nuxt/content"],
  css: ["@/assets/rivet.css"],
  vite: {
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("rvt-icon"),
        },
      },
    },
  },
  myModule: {},
  devtools: { enabled: true },
});
