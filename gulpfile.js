const gulp = require("gulp");
const dwebp = require("gulp-dwebp");

gulp.task("default", async function () {
  gulp.src("./fixtures/*").pipe(dwebp()).pipe(gulp.dest("./dest/"));
});
