const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "7tauio",
  reporter: 'mochawesome',
  reporterOptions: {
      reportFilename: 'index',
      reportDir: 'cypress/results',
      overwrite: true,
      html: true,
      json: true,
  },
  chromeWebSecurity: false,
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
    
    },
  },
});
