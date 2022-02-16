const path = require('path');
const setRootPath = (_path) => path.resolve(process.cwd(), _path);

module.exports = {

  stories: [
    '../src/**/*.stories.mdx', 
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    '@storybook/addon-a11y',
  ],
  
  framework: '@storybook/react',
  
  core: {
    builder: 'webpack5',
  },
  
  webpackFinal: async (
    config,
    { configType /* DEVELOPMENT or PRODUCTION */ }
  ) => {

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': setRootPath('src'),
      '@emotion/core': setRootPath('node_modules/@emotion/react'),
      // '@emotion/styled': setRootPath('node_modules/@emotion/styled'),
    };

    return config;
  },

  babel: async (options) => {
  
    const config = {
      ...options,
      presets: [require.resolve("@emotion/babel-preset-css-prop"), ...options.presets],
      plugins: [require.resolve("@emotion/babel-plugin"), ...options.plugins],
    }

    return config;
  },
  
};
