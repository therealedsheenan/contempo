// tasks configs
const copyConfig = require('./tools/copy');
const cleanConfig = require('./tools/clean');

module.exports = function gruntFile(grunt) {
  grunt.initConfig(
    Object.assign(
      copyConfig,
      cleanConfig
    )
  );
  // load tasks
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // register tasks
  grunt.registerTask('default', ['clean', 'copy']);
};
