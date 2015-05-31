var gulp = require('gulp');
//var browserSync = require('browser-sync');
var server = require('../../server/app.js');

gulp.task('serverNode', ['build'], function() {
   
  server.StartServer();
   
});