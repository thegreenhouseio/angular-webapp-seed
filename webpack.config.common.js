const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    'polyfills': './polyfills.ts',
    'vendor': './vendor.ts',
    'index': './index.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: ['node_modules']
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  module: {
    rules: [{
      test: /\.ts$/,
      loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader'
      ],
      exclude: [/\.(spec|e2e)\.ts$/]
    }, {
      test: /\.scss/,
      loader: 'css-to-string-loader!css-loader!sass-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader',
      exclude: ['./src/index.html']
    }, {
      test: /\.(jpg|png|gif)$/,
      loader: 'file-loader'
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
      name: 'common'
    }),

    new webpack.LoaderOptionsPlugin({
      test: /\.ts$/,
      options: {
        // prod linting by default
        tslint: {
          emitErrors: true,
          failOnHint: true,
          resourcePath: 'src'
        }
      }
    }),

    new ForkCheckerPlugin(),

    new HtmlWebpackPlugin({
      template: './index.html',
      chunksSortMode: 'dependency'
    }),

    new webpack.ProvidePlugin({
      Reflect: 'core-js/es7/reflect'
    })
  ]
};