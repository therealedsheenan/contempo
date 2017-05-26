// const webpackConfig = require('./webpack.config');
const { resolve } = require('path');
const Merge = require('webpack-merge');

// dependencies
const bundleConfig = require('./common');
const clientConfig = require('./client/bundleConfig');
const serverConfig = require('./server/bundleConfig');

// tasks configs
const copyConfig = require('./tools/copy');
const cleanConfig = require('./tools/clean');


const CONFIG = {
  output: resolve(__dirname, './public'),
  port: 8000
};

module.exports = function (grunt) {
  const TARGET = grunt.option('target');

  if (TARGET === 'client') {
    /* SERVER-SIDE RENDERING CONDFIGURATIONS */

    grunt.initConfig(
      Object.assign(
        copyConfig,
        cleanConfig, {
          webpack: {
            prod: Merge(bundleConfig, clientConfig('PROD'))
          },
          'webpack-dev-server': {
            options: {
              webpack: Merge(bundleConfig, clientConfig('DEV')),
              port: CONFIG.port,
              historyApiFallback: true,
              stats: 'errors-only',
              contentBase: CONFIG.output
            },
            start: {}
          }
        }
      )
    );
    // load tasks
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // register tasks
    grunt.registerTask('default', ['clean', 'copy', 'webpack-dev-server']);
    grunt.registerTask('prod', ['clean', 'copy', 'webpack-dev-server']);
  } else {
    /* CLIENT-SIDE RENDERING CONDFIGURATIONS */

    grunt.initConfig(
      Object.assign(
        copyConfig,
        cleanConfig, {
          webpack: {
            prod: Merge(bundleConfig, serverConfig('PROD')),
            dev: Object.assign({ watch: true, cache: true }, Merge(bundleConfig, serverConfig('DEV')))
          }
        }
      )
    );

    // register tasks
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // register tasks
    grunt.registerTask('default', ['clean', 'copy', 'webpack:dev']);
    grunt.registerTask('prod', ['clean', 'copy', 'webpack:prod']);
  }
};
