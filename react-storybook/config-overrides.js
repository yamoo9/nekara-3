const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

module.exports = override(
  /* webpack 사용자 정의 구성 덮어쓰기 */
  (config) => {

    /* 개발 모드 */
    if (process.env.NODE_ENV === 'development') {
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
    if (process.env.NODE_ENV === 'production') {
      config.devtool = false;
      config.plugins = [...config.plugins, new SpeedMeasurePlugin()];
    }

    return config;
  },
  
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })

);
