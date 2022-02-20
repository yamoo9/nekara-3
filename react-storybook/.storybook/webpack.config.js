const path = require('path');

module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(process.cwd(), 'src'),
  };
  return config;
};
