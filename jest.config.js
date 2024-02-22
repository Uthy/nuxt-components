export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\js$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
