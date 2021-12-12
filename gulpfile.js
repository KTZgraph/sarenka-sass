const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('index.css') // wejsciowy plik
        .pipe(sass())
        .pipe(dest('css')) // wyjsociwy foldrer
}

function watchTask(){
    watch(['index.scss'], buildStyles) // nasluchiwanie zmain - odpallenie co modyfikacja
}

exports.default = series(buildStyles, watchTask) // kompilacja w kolejnosci