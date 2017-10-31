var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('css', function () {
    return gulp.src('scss/style.scss')
    	.pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(cssmin())
        .pipe(gulp.dest('www/css/'));
});

gulp.task('js', function() {
    var js = gulp.src(['js/**/*.js'])
        .pipe(plumber())
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('www/js'));
});

gulp.task('watch', ['css', 'js'], function () {
    gulp.watch('scss/**/*.scss', ['css']);
    gulp.watch('js/**/*.js', ['js']);
});