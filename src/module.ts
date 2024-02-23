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
    const {resolve} = createResolver(import.meta.url);
    const runtimeDir = resolve('./runtime')
    nuxt.options.build.transpile.push(runtimeDir)

    // Style resources
    if (nuxt.options.dev) {
      // In development, use the SCSS file
      nuxt.options.css.push(resolve(runtimeDir, 'main.scss'))
    } else {
      // In production, use the compiled CSS file
      nuxt.options.css.push(resolve(runtimeDir, 'main.css'))
    }

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`  
    addPlugin({
      src: resolve(runtimeDir, 'plugins', 'icons'),
      mode: "client",
    });
    addPlugin({
      src: resolve(runtimeDir, 'plugins', 'rivet-client'),
      mode: "client",
    })
  },
});
