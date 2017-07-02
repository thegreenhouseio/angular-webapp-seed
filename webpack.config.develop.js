const commonConfig = require('./webpack.config.common.js');
const path = require('path');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(commonConfig, {
  debug: true,
  devtool: 'cheap-module-source-map',

  tslint: {
    emitErrors: false,
    failOnHint: false,
    resourcePath: 'src'
  },

  devServer: {
    port: '1981',
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: path.join(__dirname, './build'),
    proxy: {
      '/api/*': {
        target: 'http://<your-domain>',
        secure: false,
        changeOrigin: true
      }
    }
  }

});