module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    "**/*.ts",
    "!**/__tests__**",
    "!**/node_modules/**",
    "!**/.webpack/**"
  ],
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