const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'index': './src/index.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    root: path.join(__dirname, './src'),
    modulesDirectories: ['node_modules']
  },

  output: {
    path: path.join(__dirname, './build'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  module: {
    preLoaders: [],

    loaders: [{
      test: /\.ts$/,
      loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader',
        '@angularclass/hmr-loader'
      ],
      exclude: [/\.(spec|e2e)\.ts$/]
    }, {
      test: /\.scss/,
      loader: 'css-to-string!css!sass'
    }, {
      test: /\.html$/,
      loader: 'html-loader',
      exclude: [path.join(__dirname, './src/index.html')]
    }, {
      test: /\.(jpg|png|gif)$/,
      loader: 'file'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),

    new ForkCheckerPlugin(),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

    new webpack.optimize.OccurenceOrderPlugin(true)
  ]
};