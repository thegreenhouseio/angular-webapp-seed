const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'main': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    modules: [
      __dirname + '/src',
      "node_modules"
    ]
  },

  module: {
    rules: [{
      test: /\.ts$/,
      loaders: [
        'awesome-typescript-loader',
        'angular2-template-loader',
        '@angularclass/hmr-loader'
      ],
      exclude: [/\.(spec|e2e)\.ts$/]
    },
    {
      test: /\.scss/,
      loader: "css-to-string!css!sass"
    },
    {
      test: /\.html$/,
      loader: 'html-loader',
      exclude: [__dirname + './src/index.html']
    },
    {
      test: /\.(jpg|png|gif)$/,
      loader: 'file'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file-loader"
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      test: /\.ts$/, // may apply this only for some modules
      options: {
        tslint: { //prod linting by default
          emitErrors: true,
          failOnHint: true,
          resourcePath: 'src'
        }
      }
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
    }),

    new ForkCheckerPlugin(),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    })
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