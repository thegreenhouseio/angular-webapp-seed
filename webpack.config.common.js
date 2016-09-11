//TODO get rid of helpers?
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor':    './src/vendor.ts',
    'main':      './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js', '.json'],
    root: __dirname + './src',
    modulesDirectories: ['node_modules'],
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
    },
    {
      test: /\.less/,
      loader: "to-string!css!less"
    },
    {
      test: /\.html$/,
      loader: 'html-loader',
      exclude: [__dirname + './src/index.html']
    },
    {
      test: /\.(jpg|png|gif)$/,
      loader: 'file'
    }]
  },


  plugins: [
    new ForkCheckerPlugin(),

    new webpack.optimize.OccurenceOrderPlugin(true),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),

    new CopyWebpackPlugin([{
      from: './src/components/bootstrap/images/favicon.png',
      to: './assets/images/favicon.png'
    }, {  //TODO add using import?
      from: './node_modules/bootstrap/dist/css/bootstrap.min.css',
      to: './assets/vendor/bootstrap.min.css'
    }, {  //TODO add using import?
      from: './node_modules/font-awesome/css/font-awesome.css',
      to: './assets/vendor/font-awesome.css'
    }, {  //TODO add using import?
      context: './node_modules/bootstrap/dist/fonts/',
      from: '*',
      to: './assets/fonts/'  //bootstrap hardcoded path to fonts one directory up from the CSS... >:
    }, {  //TODO add using import?
      context: './node_modules/font-awesome/fonts/',
      from: '*',
      to: './assets/fonts/'  //bootstrap hardcoded path to fonts one directory up from the CSS... >:
    }]),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

  ],

  //TODO is this needed?
  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }

};