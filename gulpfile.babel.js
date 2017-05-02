const gulp = require('gulp');
const rimraf = require('rimraf');

// clean asset files
gulp.task('clean-assets', (cb) => {
  rimraf('./public/assets', cb);
});

// Copy all static assets
gulp.task('copy-assets', () => {
  gulp.src('./src/client/assets/**')
    .pipe(gulp.dest('public/assets'));
});

// running default tasks
gulp.task('default', ['clean-assets', 'copy-assets'], () => {
  gulp.watch([
    './src/client/assets/**'
  ], () => {
    gulp.run('clean-assets');
    gulp.run('copy-assets');
  });
});
