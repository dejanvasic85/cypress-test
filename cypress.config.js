const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalSessionAndOrigin: true,
    baseUrl: "https://ouasc.local.dev",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
