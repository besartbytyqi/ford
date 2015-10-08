var gulp = require('gulp'),
  connect = require('gulp-connect'),
  watch = require('gulp-watch');

gulp.task('html', function() {
  return gulp.src('index.html')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch('index.html', ['html']);
});

gulp.task('default', ['watch', 'connect', 'html']);
