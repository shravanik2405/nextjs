const { defaults } = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js?$': 'babel-jest'
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsConfig: 'tsconfig.jest.json',
      diagnostics: true
    }
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'setupTests.js'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
