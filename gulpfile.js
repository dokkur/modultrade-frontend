var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat');

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
    	.pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cssmin())
        .pipe(gulp.dest('www/css/'));
});

gulp.task('watch', ['css'], function () {
    gulp.watch('scss/*.scss', ['css']);
});