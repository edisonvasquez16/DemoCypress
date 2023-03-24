const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7tauio",
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: 'AutomationCypressReport',
    reportDir: 'cypress/results',
    overwrite: true,
    html: true,
    json: true,
    quiet: true,
  },
  chromeWebSecurity: false,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
