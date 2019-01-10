module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '\\.(ts|tsx|js)$': 'ts-jest',
  },
  testRegex: '.*\\.test\\.(ts|tsx|js)$',
  setupFiles: ['<rootDir>jestSetup.ts'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
