/**
---------------------------------------------------
                  KARMA CONFIG
---------------------------------------------------

Config file for your karma tests

*/

var webpackConfig = require("./webpack.config.js");

module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha', 'chai'],
    files: [
      'vendors/vendors.js',
      'app/app.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'tests/**/*.js'
    ],
    preprocessors: {
      'vendors/vendors.js': ['webpack'],
      'tests/**/*.js':['webpack'],
      'app/app.js': ['webpack']
    },
    webpack:{
      module:webpackConfig.module,
      cache: webpackConfig.cache,
      plugins: webpackConfig.plugins
    },
    plugins:[
      'karma-mocha-reporter',
      'karma-mocha',
      'karma-chai',
      'karma-webpack',
      // 'karma-chrome-launcher',
      'karma-phantomjs-launcher'
    ],
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
