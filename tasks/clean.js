var gulp = require('gulp')
var del = require('del')

var generateTask = function (scriptDirectories) {
    return function (cb) {
        del(scriptDirectories, cb)
    }
}

module.exports = generateTask