const gulp = require('gulp');
const rimraf = require('rimraf');

// clean asset files
gulp.task('clean-public', (cb) => {
  rimraf('./public', cb);
});

// Copy all static assets
gulp.task('copy-assets', () => {
  gulp.src('./src/client/assets/**')
    .pipe(gulp.dest('public/assets'));
});

// copying favicon to public directory
gulp.task('copy-favicon', () => {
  gulp.src('./favicon.ico')
    .pipe(gulp.dest('public'));
});


// Rerun the task when a file changes
gulp.task('watch', () => {
  gulp.watch('./src/client/assets/**', ['copy-favicon', 'copy-assets']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'clean-public', 'copy-favicon', 'copy-assets']);
