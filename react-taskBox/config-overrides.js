/* eslint-disable react-hooks/rules-of-hooks */

const path = require('path');
const { override, addWebpackAlias, useBabelRc } = require('customize-cra');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const {NODE_ENV: mode } = process.env;

module.exports = override(
  /* webpack 사용자 정의 구성 덮어쓰기 */
  (config) => {

    /* 개발 모드 */
    if (mode === 'development') {
      config.module = {
        rules: [
          ...config.module.rules,
          {
            test: /\.jsx?$/i,
            exclude: /node_modules|public/,
            loader: 'esbuild-loader',
            options: {
              loader: 'jsx',
              target: 'es2015',
            },
          },
        ],
      };
    }

    /* 배포 모드 */
    if (mode === 'production') {
      config.devtool = false;
      config.plugins = [...config.plugins, new SpeedMeasurePlugin()];
    }

    return config;
  },

  useBabelRc(),
  
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })

);
