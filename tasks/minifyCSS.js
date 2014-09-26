var gulp = require('gulp')
var dedupe = require('gulp-dedupe')
var concat = require('gulp-concat')
var minify = require('gulp-minify-css')

var generateTask = function (scriptDirectories, buildDirectory) {
    return function () {
        return gulp.src(scriptDirectories)
            .pipe(dedupe())
            .pipe(concat('style.min.css'))
            .pipe(minify())
            .pipe(gulp.dest(buildDirectory))
    }
}

module.exports = generateTask