# postcss-remove-style

一个删除指定 css 属性的插件

# Installation

```js
npm i postcss-remove-style -D
```

# Usage

```js
const gulp = require('gulp')
const postcss = require('gulp-postcss')
const removeStyle = require('postcss-remove-style')({
    '*': ['color'], // 删除所有样式里的color属性
    '.b': '*'       // 删除.b类
    '.c': ['font']  // 删除.c里的font属性
})

gulp.task('test', function() {
    return gulp
        .src('./test.css')
        .pipe(postcss([removeStyle]))
        .pipe(gulp.dest('css'))
})
```
