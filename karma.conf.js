const isProductionBuild = process.env.NODE_ENV === 'production';
const shouldWatch = !isProductionBuild;
const shouldSingleRun = isProductionBuild;
const webpackConfig = require('./webpack.config.common');

process.env.CHROME_BIN = require('puppeteer').executablePath();

// known issues with karma and CommonChunksPlugin
// https://github.com/webpack/karma-webpack/issues/24
// https://github.com/webpack-contrib/karma-webpack/issues/22
webpackConfig.plugins[0] = function() {};

module.exports = function(config) {
  const logLevel = isProductionBuild ? config.LOG_DEBUG : config.LOG_INFO;

  config.set({
    basePath: './',
    frameworks: ['jasmine'],
    files: [
      // karma needs these files and (mostly for phantomjs) polyfills first
      { pattern: 'node_modules/reflect-metadata/Reflect.js', watched: false },
      { pattern: 'node_modules/babel-polyfill/browser.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/zone.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/proxy.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/sync-test.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/async-test.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/fake-async-test.js', watched: false },
      { pattern: 'node_modules/intl/dist/Intl.js', watched: false },
      { pattern: 'node_modules/intl/locale-data/jsonp/en.js', watched: false },
      { pattern: 'src/**/**/*.spec.js', watched: true }
    ],

    preprocessors: {
      'src/**/*.js': ['webpack', 'babel', 'coverage'],
      'src/**/*.ts': ['webpack', 'coverage']
    },

    webpack: webpackConfig,

    reporters: ['progress', 'dots', 'junit', 'coverage'],
    port: 9876,
    logLevel: logLevel,
    autoWatch: shouldWatch,
    browsers: ['ChromeHeadless'],
    customLaunchers: {
      ChromeHeadless: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox'] // https://github.com/Googlechrome/puppeteer/issues/290#issuecomment-322852784
      }
    },
    singleRun: shouldSingleRun,
    concurrency: Infinity,
    junitReporter: {
      outputDir: './reports/',
      outputFile: 'test-results.xml',
      suite: 'seed-webapp',
      useBrowserName: false
    },
    coverageReporter: {
      type: 'cobertura',
      dir: './reports',
      subdir: 'coverage'
    }
  });

};