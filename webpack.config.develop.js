const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.ts$/,
      options: {
        tslint: {
          emitErrors: false,
          failOnHint: false,
          resourcePath: 'src'
        }
      }
    })
  ],

  devServer: {
    port: 1981,
    host: 'localhost',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: './build',
    proxy: {
      '/api/*': {
        target: 'http://your-domai.com',
        secure: false,
        changeOrigin: true
      }
    }
  }

});