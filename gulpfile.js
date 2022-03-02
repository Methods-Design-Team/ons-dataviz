let gulp = require('gulp');
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './',
    },
    port: process.env.PORT || 5000,
  });

  gulp.watch(['*.html', 'css/*.css', 'js/*.js', 'views/*.html', 'template/*.html', './*.html'], { cwd: 'app' }, reload);
});
