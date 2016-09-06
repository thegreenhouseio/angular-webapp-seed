const isProductionBuild = process.env.NODE_ENV === 'production';
const shouldWatch = !isProductionBuild;
const shouldSingleRun = isProductionBuild;
const browser = isProductionBuild ? 'PhantomJS' : 'Chrome';
const webpackConfig = require('./webpack.config.common');

//*** webpack hacks *** //
// use this to allow spec.ts to be processed by Karma.  TODO better way to do this?
webpackConfig.module.loaders[0].exclude = [];

// TODO issues with karma and CommonChunksPlugin
// https://github.com/webpack/karma-webpack/issues/24
webpackConfig.plugins[2] = function() {};


module.exports = function(config) {
  const logLevel = isProductionBuild ? config.LOG_DEBUG : config.LOG_INFO;

  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      //PhantomJS is missing these files
      {pattern: 'node_modules/reflect-metadata/Reflect.js'},
      //PhantomJS is missing these files - https://github.com/wallabyjs/public/issues/542
      {pattern: 'node_modules/babel-polyfill/browser.js'},
      {pattern: 'src/**/*.spec.ts'}
    ],

    preprocessors: {
      '**/*.spec.ts': ['webpack', 'coverage']
    },

    webpack: webpackConfig,

    reporters: ['progress', 'dots', 'junit', 'coverage'],
    port: 9876,
    logLevel: logLevel,
    autoWatch: shouldWatch,
    browsers: [browser],
    singleRun: shouldSingleRun,
    concurrency: Infinity,
    junitReporter: {
      outputDir: './reports/',
      outputFile: 'test-results.xml',
      suite: 'seed-webapp',
      useBrowserName: false
    },
    coverageReporter: {
      type : 'cobertura',
      dir : './reports',
      subdir: 'coverage'
    }
  });

};