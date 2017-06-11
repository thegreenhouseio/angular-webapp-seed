const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
// const ProvidePlugin = require('webpack/lib/ProvidePlugin');
// const DefinePlugin = require('webpack/lib/DefinePlugin');
// const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
// const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: './build',
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  plugins: [

    new WebpackMd5Hash(),
    new DedupePlugin(),

    //  new DefinePlugin({
    //  'ENV': JSON.stringify(METADATA.ENV),
    //  'HMR': METADATA.HMR,
    //  'process.env': {
    //    'ENV': JSON.stringify(METADATA.ENV),
    //    'NODE_ENV': JSON.stringify(METADATA.ENV),
    //    'HMR': METADATA.HMR,
    //  }
    //  }),

    new UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true, keep_fnames: true },  // eslint-disable-line camelcase
      compress: { screw_ie8: true }, // eslint-disable-line camelcase
      comments: false
    }),

    new FaviconsWebpackPlugin({
      logo: './src/components/bootstrap/images/favicon.png',
      emitStats: true,
      prefix: 'icons/',
      statsFilename: 'icons/stats.json',
      inject: true,
      title: 'The Greenhouse',
      background: '#efefef',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: true,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: true,
        windows: true
      }
    })
  ],

  new webpack.LoaderOptionsPlugin({
    test: /\.html$/,
    options: {
      // prod linting by default
      htmlLoader: {
        minimize: true,
        removeAttributeQuotes: false,
        caseSensitive: true,
        customAttrSurround: [
          [/#/, /(?:)/],
          [/\*/, /(?:)/],
          [/\[?\(?/, /(?:)/]
        ],
        customAttrAssign: [/\)?\]?=/]
      }
    }
  })

  // TODO is this needed?
  // node: {
  //  global: 'window',
  //  crypto: 'empty',
  //  process: false,
  //  module: false,
  //  clearImmediate: false,
  //  setImmediate: false
  // }

});