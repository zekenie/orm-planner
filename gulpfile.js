var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    notify = require('gulp-notify');

gulp.task('styles', function() {
  gulp.src(['public/*.scss', 'public/**/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('public'))
})

gulp.task('bower', function() {
    gulp.src('public/index.html')
      .pipe(wiredep())
      .pipe(gulp.dest('public'))
})

gulp.task('watch', function() {
  gulp.watch(['public/*.scss', 'public/**/*.scss'], ['styles'])
  
})

gulp.task('default', function() {
  gulp.start('bower')
  gulp.start('styles')
})
