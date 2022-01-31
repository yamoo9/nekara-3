const devServer = {
  client: {
    logging: 'info',
    progress: true,
  },
  port: 3000,
  static: ['public'],
  historyApiFallback: true,
  watchFiles: ['src/**/*.js', 'src/**/*.css'],
  compress: true,
  proxy: {
    // '/api': 'http://localhost:5000',
  },
}

module.exports = devServer;