module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    "**/*.ts",
    "!**/__tests__**",
    "!**/node_modules/**",
    "!**/.webpack/**"
  ],
  testMatch: ["**/__tests__/**/*.js", "**/?(*.)+(spec|test).js"],
  globals: {
    'ts-jest': {
      diagnostics: {
        pathRegex: /\.(spec|test)\.ts$/,
        warnOnly: true,
        ignoreCodes: [6133]
      }
    }
  },
};