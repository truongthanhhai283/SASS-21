"use strict";

var gulp = require("gulp");

var browserSync = require("browser-sync").create();

var sass = require("gulp-sass"); // complie sass


gulp.task("sass", function () {
  return gulp.src(["src/scss/*.scss"]).pipe(sass()).pipe(gulp.dest("src/css")).pipe(browserSync.stream());
}); // watch & serve

gulp.task("serve", ["sass"], function () {
  browserSync.init({
    server: "./src"
  });
  gulp.watch(["src/scss/*.scss"], ["sass"]);
  gulp.watch("src/*.html").on("change", browserSync.reload);
}); // Default

gulp.task("default", ["serve"]);