const HtmlPlugin = require('html-webpack-plugin');
const { setPathBasedOnRoot } = require('./utils');
const devServer = require('./server');

const devConfig = {
  devServer,
  cache: true,
  target: ['web', 'es2015'],
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  resolve: {
    alias: {
      '@': setPathBasedOnRoot('src'),
    },
  },

  entry: setPathBasedOnRoot('src/main.js'),
  output: {
    path: setPathBasedOnRoot('public'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
  },

  module: {
    rules: [
      // {
      //   test: /\.jsx?$/i,
      //   exclude: /node_modules|public/,
      //   use: 'babel-loader'
      // },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules|public/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  plugins: [
    new HtmlPlugin({
      template: setPathBasedOnRoot('public/index.html'),
    }),
  ],
};

module.exports = devConfig;