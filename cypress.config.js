const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7tauio",
  reporter: 'mochawesome',
  reporterOptions: {
    reportFilename: 'AutomationCypressReport',
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  chromeWebSecurity: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
