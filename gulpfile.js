var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var serve = require('gulp-serve');

gulp.task('scss', function () {
    return gulp.src('./scss/application.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('build', ['scss'], function () {
    return gulp.src('./assets/css/application.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('scss/*.scss', ['build']);
});

gulp.task('serve', ['watch'], serve('.'));

gulp.task('default', ['build']);
