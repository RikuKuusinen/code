// jest.config.js
// Sync object
const jestConfig = {
  verbose: true,
  testURL: "http://localhost/",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: ["**/tests/*.js?(x)"],
};

module.exports = jestConfig;
