import Vue from "vue";
import { FluentBundle, FluentResource } from "@fluent/bundle";

import { createFluentVue } from "fluent-vue";

// Create bundles for locales that will be used
const enBundle = new FluentBundle("en");
const frBundle = new FluentBundle("fr");
const deBundle = new FluentBundle("de");

// Add global resources to the bundles
enBundle.addResource(new FluentResource("key = World"));
enBundle.addResource(new FluentResource("another-key = Hello, {$name}"));

// Create plugin istance
// bundles - The current negotiated fallback chain of languages
const fluent = createFluentVue({
  bundles: [enBundle]
});

const components = new Map()

Vue.mixin({
  created () {
    components.set(this, true)
  },
  destroyed () {
    components.delete(this)
  }
})

export function changeLocale (locale) {
  if (locale === "fr") {
    fluent.bundles = [frBundle, enBundle]
  }

  if (locale === "de") {
    fluent.bundles = [deBundle, enBundle]
  }

  if (locale === "en") {
    fluent.bundles = [enBundle]
  }

  // Not sure why this is needed with nuxt 2
  for (const component of components.keys()) {
    component.$forceUpdate()
  }
}

// Install Vue plugin
Vue.use(fluent);
