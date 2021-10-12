import { createApp } from "vue";
import { FluentBundle, FluentResource } from "@fluent/bundle";

import { createFluentVue } from "fluent-vue";

import App from "./App";

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
  bundles: [enBundle, ukBundle]
});

createApp(App)
  // Install Vue plugin
  .use(fluent);
