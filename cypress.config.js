const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "q56qsd",
  e2e: {
    baseUrl: "http://qamid.tmweb.ru",
    setupNodeEvents(on, config) {},
  },
});
