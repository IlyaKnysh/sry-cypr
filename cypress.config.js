const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '8m4zo2',
  video: true,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://google.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
