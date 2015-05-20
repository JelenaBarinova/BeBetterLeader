var gulp = require("gulp");
var plug = require("gulp-load-plugins")();

gulp.task('publish', function() {
  return gulp.src(['./**/*'])
    .pipe(plug.ghPages());
});

gulp.task('open', function(){
  return gulp.src('./index.html')
    .pipe(plug.open('', {app: 'google chrome', url: 'http://jelenabarinova.github.io/BeBetterLeader/'}));
});

gulp.task('deploy', function(cb) {
  plug.runSequence('publish', 'open', cb);
});