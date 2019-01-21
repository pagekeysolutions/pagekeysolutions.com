var gulp  = require('gulp');
var deploy = require('gulp-gh-pages');
var browserSync = require('browser-sync').create();

gulp.task('deploy', function() {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});

gulp.task('browser-sync', function() {
	browserSync.init({
		open: 'external',
	    	//injectChanges: true,
		server: {
			baseDir: './'
		}
	});
});

