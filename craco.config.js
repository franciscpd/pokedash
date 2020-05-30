const path = require('path');
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');

module.exports = {
  plugins: [
    {
      plugin: reactHotReloadPlugin,
    },
  ],
  webpack: {
    alias: {
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@styles': path.resolve(__dirname, 'src', 'styles'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@(.*)$': '<rootDir>/src$1',
      },
    },
  },
};
