import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "",
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results.json',
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'QA Automation',
      overwrite: true,
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      autoOpen: false
    },
  },
  env: {
    grepFilterSpecs: true,
    grepOmitFiltered: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },
    baseUrl: 'https://front.serverest.dev/login',
    specPattern: 'cypress/*/*/*.cy.js',
    fixturesFolder: 'cypress/fixtures/',
    screenshotsFolder: 'screenshots/',
    supportFile: 'cypress/support/',
    video: false,
    defaultCommandTimeout: 40000,
    pageLoadTimeout: 40000,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    testIsolation: false,
    screenshotOnRunFailure: true,
    chromeWebSecurity: false
  },
});