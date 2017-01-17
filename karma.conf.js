var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'], // our test files here
    // things we wanna do with our test files
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap'] // run webpack so we can load in our components using require
      // sourcemap so error messages don't use bundle.js file but actual .jsx files
    },
    reporters: ['mocha'], // shows which tests pass/fail; how we want test to be displayed: this will show it with some nice checkmarks
    client: {
      mocha: {
        timeout: '5000' // after 5 seconds, if test isn't finished, cancel it
      }
    },
    // we don't care about this info, we aren't using webpack server
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
}
