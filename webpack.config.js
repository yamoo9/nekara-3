const path = require('path');

/* DEVLOP PLUGINS ----------------------------------------------------------- */
const HtmlPlugin = require('html-webpack-plugin');

/* BUILD PLUGINS ------------------------------------------------------------ */
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

/* DEVELOP CONFIGURATION ---------------------------------------------------- */
let webpackConfig = ({ production: isProd, analyzer: isAnalyzer }) => ({
  cache: !isProd,
  target: ['web'],
  mode: !isProd ? 'development' : 'production',

  devtool: !isProd ? 'eval-cheap-source-map' : false,

  devServer: {
    port: 3000,
    static: ['public'],
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  entry: {
    main: {
      import: './src/main.js',
      dependOn: 'vender',
    },
    vender: ['react', 'react-dom'],
  },

  output: {
    path: path.resolve(__dirname, !isProd ? 'public' : 'build'),
    filename: 'js/[name].js',
    clean: isProd,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules|public/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          !isProd ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    isProd && new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './public/assets'),
          to: path.resolve(__dirname, './build/assets'),
        },
      ],
    }),
    isProd && new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    isProd && new SpeedMeasurePlugin(),
  ].filter(Boolean),

  optimization: isProd && {
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
          //     )[1];
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
      isAnalyzer && new BundleAnalyzerPlugin(),
    ].filter(Boolean),
  },

});


module.exports = webpackConfig;
