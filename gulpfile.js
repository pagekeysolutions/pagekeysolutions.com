const {series, parallel, src, dest, watch} = require('gulp');
var sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    clean = require('gulp-clean');
var browserSync = require('browser-sync').create();

function cleanProject() {
	return src('build', {read:false, allowEmpty: true})
		.pipe(clean());
}
function compileSass() {
	return src('app/scss/*.scss')
		.pipe(sass())
		.pipe(dest('build/css'))
		.pipe(livereload());
};
function build() {
	return src(["app/*.html", "app/js/*", "app/img/*"], {base: './app'})
		.pipe(dest('build'))
		.pipe(livereload());
}
function watchReload() {
	browserSync.init({
		server: "./build"
	});
	return watch(['app/**/*'], series(build, function(cb){browserSync.reload();cb();}));
}
exports.clean = series(cleanProject);
exports.build = series(
	cleanProject,
	compileSass,
	build
);
exports.watch = series(watchReload);
/*
var concat = require('gulp-concat'),
    del = require('del'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass');
var deploy = require('gulp-gh-pages');

gulp.task('compileSass', function() {
	return gulp.src('scss/main.css')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(livereload());
});

gulp.task('build', ['compileSass'], function() {
	return gulp.src(["css/*", "img/*", "js/*"], {base: './'})
		.pipe(gulp.dest('public'))
		.pipe(livereload());
});
*/

//gulp.task('deploy', function() {
//  return gulp.src("./dist/**/*")
//    .pipe(deploy())
//});
/*
gulp.task('browser-sync', function() {
	browserSync.init({
		open: 'external',
	    	//injectChanges: true,
		server: {
			baseDir: './'
		}
	});
});
*/
