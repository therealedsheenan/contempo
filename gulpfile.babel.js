import gulp from 'gulp';

// Copy all static assets
gulp.task('copy-assets', () => {
  gulp.src('./src/client/assets/**')
    .pipe(gulp.dest('public/assets'));
});

// Copy html to public
gulp.task('copy-server-html', () => {
  gulp.src('./src/server/index.html')
    .pipe(gulp.dest('public'));
});

// running default tasks
gulp.task('default', () => {
  gulp.run('copy-assets');
  gulp.run('copy-client-html');

  gulp.watch([
    './src/client/assets/**',
    './src/client/index.html'
  ], () => {
    gulp.run('copy-assets');
    gulp.run('copy-client-html');
  });
});
