module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/infrastructure', '<rootDir>/tests'],
  testMatch: ['**/*.test.js'],
  testPathIgnorePatterns: ['tests/e2e/'],
};
