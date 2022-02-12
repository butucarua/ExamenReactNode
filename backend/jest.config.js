process.env.TZ = "UTC";
const config = {
  globalSetup: "./jest.global-setup.js",
  globalTeardown: "@databases/pg-test/lib/jest/globalTeardown.js",
  reporters: ["default", ["jest-junit", { outputName: "junit-unit.xml" }]],
  testRunner: "jest-circus/runner",
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/$1",
  },
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: "src",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage",
  testEnvironment: "node",
};

module.exports = config;
