const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7tauio",
  //reporter: 'mochawesome',
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json"
    //  reportFilename: 'AutomationCypressReport',
    //  reportDir: 'cypress/reports',
    //  overwrite: true,
    //  html: true,
    //  json: true,
  },
  chromeWebSecurity: false,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
