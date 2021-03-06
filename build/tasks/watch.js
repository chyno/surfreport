var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync').create();

// outputs changes to files to the console
function reportChange(event){
  console.log('File  ' + event.path + ' was ' + event.type + ', running tasks...');
}


// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serverNode'], function() {

	// Serve files from the root of this project
   gulp.watch(paths.source, ['build-system', browserSync.reload]).on('change', reportChange);
   gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
   gulp.watch(paths.style, ['build-html', browserSync.reload]).on('change', reportChange);
  // gulp.watch(paths.serversource, ['serve', browserSync.reload]).on('change', reportChange);

 // gulp.watch("client/src/styles/*.css").on("change", browserSync.reload);
  //gulp.watch("client/src/styles/*.css", browserSync.reload).on('change', reportChange);
  //gulp.watch('server', browserSync.reload).on('change', reportChange);
});
