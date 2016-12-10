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
webpackConfig.plugins[3] = function() {};


module.exports = function(config) {
  const logLevel = isProductionBuild ? config.LOG_DEBUG : config.LOG_INFO;

  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      //karma needs these files and (mostly for phantomjs) polyfills first
      {pattern: 'node_modules/reflect-metadata/Reflect.js', watched: false},
      {pattern: 'node_modules/babel-polyfill/browser.js', watched: false},
      {pattern: 'node_modules/zone.js/dist/zone.js', watched: false},
      {pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js', watched: false},
      {pattern: 'node_modules/zone.js/dist/proxy.js', watched: false},
      {pattern: 'node_modules/zone.js/dist/sync-test.js', watched: false},
      {pattern: 'node_modules/zone.js/dist/jasmine-patch.js', watched: false},
      {pattern: 'node_modules/zone.js/dist/async-test.js', watched: false},
      {pattern: 'node_modules/zone.js/dist/fake-async-test.js', watched: false},
      {pattern: 'node_modules/intl/dist/intl.js', watched: false},
      {pattern: 'src/**/*.spec.ts', watched: false}
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