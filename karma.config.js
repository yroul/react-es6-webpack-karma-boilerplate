var webpack = require('karma-webpack');

var path = require('path');

module.exports = function (config) {
  config.set({
    frameworks: [ 'jasmine' ],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/**/*_spec.js'
    ],
    plugins: [webpack, 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-coverage', 'karma-spec-reporter','karma-chrome-launcher'],
    browsers: [ 'PhantomJS','Chrome' ],
    preprocessors: {
      'tests/**/*_spec.js': ['webpack'],
      'src/**/*.js': ['webpack'],
      'src/**/*.ts': ['webpack']
    },
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: {
        resolve: {
            extensions: ['', '.js', '.jsx','.ts','.tsx']
        },
      module: {
        loaders: [{
          test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
          loader: 'babel-loader'
        },
          {
            test: /\.tsx?$/,
            exclude: /(bower_components|node_modules)/,
            loaders: ['react-hot', 'babel','ts-loader'],
            include: path.resolve(__dirname, "src")
          }
        ],
        postLoaders: [{
          test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components|tests)/,
          loader: 'istanbul-instrumenter'
        }]
      }
    },
    webpackMiddleware: { noInfo: true }
  });
};
