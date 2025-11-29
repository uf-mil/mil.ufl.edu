module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json"],
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "<rootDir>/test/__mocks__/styleMock.js",
    "\\.(gif|jpe?g|ttf|eot|png|svg)$": "<rootDir>/test/__mocks__/fileMock.js",
    "^.+/assets/people/(members|advisors)$":
      "<rootDir>/test/__mocks__/peopleMock.js",
  },
  setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
  globals: {
    BUILD_TIME: "2025-01-01T00:00:00Z",
    COMMIT_HASH: "abcdef1",
  },
};
