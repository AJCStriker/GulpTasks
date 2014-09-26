var gulp = require('gulp')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')

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
            .pipe(rename(function (path) {
                if(path.extname === '.js') {
                    path.basename += '.min'
                }
            }))
            .pipe(gulp.dest(buildDirectory))
    }
}

module.exports = generateTask