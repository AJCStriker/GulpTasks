var gulp = require('gulp')
var uglify = require('gulp-uglify')

var generateTask = function (scriptDirectories, buildDirectory, debugStatus) {
    return function () {
        return gulp.src(scriptDirectories)
            .pipe(uglify({
                compress: {
                    global_defs: {
                        DEBUG: debugStatus
                    }
                }
            }))
            .pipe(gulp.dest(buildDirectory))
    }
}

module.exports = generateTask