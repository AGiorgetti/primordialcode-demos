var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var typescript = require("typescript");
var tslint = require("gulp-tslint");

// define some compiler options
var tsOptions = {
  //typescript: typescript, // use the local copy of the compiler
  noImplicitAny: true,
  target: "ES5",
  out: null,
  noExternalResolve: true, // we provide all the file by ourselves, no <reference> is needed
  module: "commonjs"
};

var source = gulp.src("src/**/*.ts");

gulp.task("tslint", function() {
  return source
    .pipe(tslint())
    .pipe(tslint.report("verbose"));
});

// build with sourcemaps support
gulp.task("build-ts", function () {
  var tsResult = source
    .pipe(sourcemaps.init())
    .pipe(ts(tsOptions));
  return tsResult.js
    .pipe(sourcemaps.write(".", {includeContent: true})) // sourcemaps will be generated on an external file
    .pipe(gulp.dest("."));
});

gulp.task("watch", function() {
  gulp.watch("*.ts", ['build-ts']);  
});
