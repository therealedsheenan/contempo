// const webpackConfig = require('./webpack.config');
const { resolve } = require('path');
const Merge = require('webpack-merge');

// dependencies
const bundleConfig = require('./common');
const clientConfig = require('./client/bundleConfig');
const serverConfig = require('./server/bundleConfig');


const CONFIG = {
  output: resolve(__dirname, './public'),
  port: 8000
};

module.exports = function (grunt) {
  const TARGET = grunt.option('target');
  if (TARGET === 'client') {
    grunt.initConfig({
      webpack: {
        prod: Merge(bundleConfig, clientConfig('PROD'))
      },
      'webpack-dev-server': {
        options: {
          webpack: Merge(bundleConfig, clientConfig('DEV')),
          port: CONFIG.port,
          historyApiFallback: true,
          stats: 'errors-only'
        },
        start: {}
      }
    });
    // load tasks
    grunt.loadNpmTasks('grunt-webpack');

    // register tasks
    grunt.registerTask('default', ['webpack-dev-server']);
    grunt.registerTask('prod', ['webpack-dev-server']);
  } else {
    grunt.initConfig({
      webpack: {
        prod: Merge(bundleConfig, serverConfig('PROD')),
        dev: Object.assign({ watch: true, cache: true }, Merge(bundleConfig, serverConfig('DEV')))
      }
    });

    // register tasks
    grunt.loadNpmTasks('grunt-webpack');

    // register tasks
    grunt.registerTask('default', ['webpack:dev']);
    grunt.registerTask('prod', ['webpack:prod']);
  }
};
