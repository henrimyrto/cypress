const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
