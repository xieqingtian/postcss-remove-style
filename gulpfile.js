const gulp = require('gulp')
const postcss = require('gulp-postcss')
const removeStyle = require('./index.js')({
    '*': ['color'],
    '.b': '*'
})

gulp.task('test', function() {
    return gulp
        .src('./test.css')
        .pipe(postcss([removeStyle]))
        .pipe(gulp.dest('css'))
})
