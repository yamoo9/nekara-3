const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const devConfig = require('./dev');
const { setPathBasedOnRoot } = require('./utils');

const buildConfig = (env) =>
  merge(devConfig, {
    cache: false,
    devtool: false,
    mode: 'production',

    entry: {
      main: {
        import: setPathBasedOnRoot('src/main.js'),
        dependOn: 'vender',
      },
      vender: ['react', 'react-dom'],
    },
    output: {
      path: setPathBasedOnRoot('build'),
    },

    module: {
      rules: devConfig.module.rules.map((rule) => {
        const { test: reg } = rule;
        return reg.test('.css')
          ? {
              test: /\.css$/i,
              use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
          : rule;
      }),
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
      }),
      new SpeedMeasurePlugin(),
    ],

    optimization: {
      minimize: true,
      runtimeChunk: true,
      splitChunks: {
        cacheGroups: {
          vendor: {
            enforce: true,
            chunks: 'initial',
            test: /[\\/]node_modules[\\/]/,

            // vender.js 파일 하나를 생성할 때
            name: 'vender',

            // 종속성 패키지 마다 파일을 생성할 때
            // name(module) {
            //   const packageName = module.context.match(
            //     /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            //   )[1];
            //   console.log(packageName);
            //   return `npm.${packageName.replace('@', '')}`;
            // },

            priority: -10,
            reuseExistingChunk: true,
            minSize: { javascript: 20000, 'css/mini-extra': 10000 },
          },
        },
      },

      minimizer: [
        new TerserPlugin(),
        new CssMinimizerPlugin(),
        env.analyzer && new BundleAnalyzerPlugin(),
      ].filter(Boolean),
    },
  });

module.exports = buildConfig;
