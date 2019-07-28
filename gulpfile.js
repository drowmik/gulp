const gulp = require('gulp');
const sass = require('gulp-sass');
const browser_sync = require('browser-sync').create();


function style() {
    // 1. scss file location
    return gulp.src('./src/scss/*.scss')

    // 2. pass those file to sass compiler
        .pipe(sass())
    
    // 3. compiled css file location
        .pipe(gulp.dest('./build/css'))
}

exports.style = style;