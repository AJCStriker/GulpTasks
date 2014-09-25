var gulp = require('gulp')
var react = require('gulp-react')

var generateTask = function (scriptEntryPoint, buildDirectory) {
    return function () {
        return gulp.src(scriptEntryPoint)
            .pipe(react())
            .pipe(gulp.dest(buildDirectory));
    }
}