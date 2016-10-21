var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('hello', function() {
  console.log('Hello Zell');
});
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: '/'
    },
  })
});
gulp.task('watch', ['browserSync'], function (){
//  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Other watchers
})