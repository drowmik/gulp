const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const auto_prefixer = require('gulp-autoprefixer');
const uglify_css = require('gulp-uglifycss');
const browser_sync = require('browser-sync').create();


function style() {
    // scss file location
    return gulp.src('./src/scss/*.scss')

    // pass those file to sass compiler
        .pipe(sass())

    // css prefix for browsers compatibility (browsers listed on package.json)
        .pipe(auto_prefixer())
    
    // minify css file
		.pipe(uglify_css())

    // rename output file
        .pipe(rename({suffix: '.min'}))
    
    // set compiled css file location
        .pipe(gulp.dest('./build/css'))

    // stream changes to browser
        .pipe(browser_sync.stream());
}

function watch() {
    browser_sync.init({
        server: {
            baseDir: './build'
        }
    });

    // watch for these file changes
    gulp.watch('./src/scss/**/*.scss', style);
    gulp.watch('./build/*.html').on('change', browser_sync.reload);
    gulp.watch('./build/*.js').on('change', browser_sync.reload);
}

exports.style = style;
exports.watch = watch;