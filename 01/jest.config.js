
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  clearMocks: true,
  restoreMocks: true,
  testLocationInResults: true,
  timers: "fake",
  verbose: true,
  "watchPlugins": [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
