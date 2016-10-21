var gulp = require('gulp');
var browserSync = require('browser-sync').create();
nodemon = require('nodemon');
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
gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' },
     tasks: ['browserSync']
  })
})