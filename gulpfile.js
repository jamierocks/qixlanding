var gulp = require('gulp');
var sass = require('gulp-sass');
var serve = require('gulp-serve');

gulp.task('scss', function () {
    return gulp.src('./scss/application.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['scss']);
});

gulp.task('serve', ['watch'], serve('.'));

gulp.task('default', ['scss']);
