const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7tauio",
  //reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity : false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
