var gulp = require('gulp')
var browserify = require('browserify')
var source = require('vinyl-source-stream')

var generateTask = function (scriptDirectories, buildDirectory) {
    return function () {
        var bify = browserify({
            extensions: ['.jsx']
        })
        bify.add(scriptDirectories)

        return bify.bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest(buildDirectory));
    }
}

module.exports = generateTask