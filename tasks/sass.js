var gulp = require('gulp')
var sass = require('gulp-sass')

var generateTask = function (inputDirectory, buildDirectory, includePaths) {
    return function () {
        return gulp.src(inputDirectory)
            .pipe(sass({
                includePaths: includePaths
            }))
            .pipe(gulp.dest(buildDirectory))
    }
}

module.exports = generateTask