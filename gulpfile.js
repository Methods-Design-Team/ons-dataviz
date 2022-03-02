let gulp = require('gulp');
let runSeq = require('run-sequence');

gulp.task('heroku:production', function() {
  runSeq('clean', 'build', 'minify');
});
