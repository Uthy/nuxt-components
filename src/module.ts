import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  hooks: {
    "components:dirs": (dirs) => {
      const { resolve } = createResolver(import.meta.url);
      dirs.push({
        path: resolve("./runtime/components"),
        pathPrefix: false,
      });
    },
  },
  meta: {
    name: "nuxt-components-test",
    configKey: "nuxtComponentsTest",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Style resources
    if (nuxt.options.dev) {
      // In development, use the SCSS file
      nuxt.options.css.push(resolver.resolve("./runtime/assets/main.scss"));
    } else {
      // In production, use the compiled CSS file
      nuxt.options.css.push(resolver.resolve("./runtime/assets/main.css"));
    }

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin({
      src: resolver.resolve("./runtime/plugins/icons"),
      mode: "client",
    });    
    addPlugin({
      src: resolver.resolve("./runtime/plugins/rivet-client"),
      mode: "client",
    });
  },
});
