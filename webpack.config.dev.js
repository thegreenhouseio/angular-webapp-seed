const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');
// const DefinePlugin = require('webpack/lib/DefinePlugin');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',

  output: {
    path: './build',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
    //  new DefinePlugin({
    //  'ENV': JSON.stringify(METADATA.ENV),
    //  'HMR': METADATA.HMR,
    //  'process.env': {
    //    'ENV': JSON.stringify(METADATA.ENV),
    //    'NODE_ENV': JSON.stringify(METADATA.ENV),
    //    'HMR': METADATA.HMR,
    //  }
    //  }),

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
        target: 'http://<your-domain>',
        secure: false,
        changeOrigin: true
      }
    }
  }

  //  TODO is this needed?
  //  node: {
  //  global: true,
  //  crypto: 'empty',
  //  process: true,
  //  module: false,
  //  clearImmediate: false,
  //  setImmediate: false
  //  }

});