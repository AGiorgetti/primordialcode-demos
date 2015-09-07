var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require('gulp-sourcemaps');

// just build all the typescript files
gulp.task("build-ts", function () {
  var tsResult = gulp.src("*.ts")
    .pipe(ts({
        noImplicitAny: true,
        out: "final.js"
      }));
  return tsResult.js.pipe(gulp.dest('.'));
});

// watch the files for changes and rebuild everything
gulp.task("watch", function() {
  gulp.watch("*.ts", ['build-ts']);  
});

// a 'better' build pipeline

// define some compiler options
var tsOptions = {
    noImplicitAny: true,
    target: "ES5",
    out: "final.js",
    noExternalResolve: true // we provide all the file by ourselves, no <reference> is needed
};

// build with sourcemaps support
gulp.task("build-ts-2", function () {
  var tsResult = gulp.src("*.ts")
    .pipe(sourcemaps.init())
    .pipe(ts(tsOptions));
  return tsResult.js
    .pipe(sourcemaps.write(".")) // sourcemaps will be generated on an external file
    .pipe(gulp.dest('.'));
});

gulp.task("watch-2", function() {
  gulp.watch("*.ts", ['build-ts-2']);  
});
