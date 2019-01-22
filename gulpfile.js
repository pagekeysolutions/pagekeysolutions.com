JS_SRC = [
	"app/js/vendor/gsap/TweenMax.min.js",
	"app/js/vendor/jquery/jquery-3.3.1.min.js",
	"app/js/vendor/scrollmagic/jquery.ScrollMagic.min.js",
	"app/js/vendor/scrollmagic/ScrollMagic.min.js",
	"app/js/vendor/scrollmagic/animation.gsap.min.js",
	"app/js/vendor/scrollmagic/debug.addIndicators.min.js",
	"app/js/main.js"
];

const {series, parallel, src, dest, watch} = require('gulp');
var sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

function cleanProject() {
	return src('build', {read:false, allowEmpty: true})
		.pipe(clean());
}
function compileSass() {
	return src('app/scss/*.scss')
		.pipe(sass())
		.pipe(dest('build/css'))
		.pipe(livereload());
}
function compileScripts() {
	return src(JS_SRC)
		.pipe(sourcemaps.init())
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(dest('build/js'));
}
function build() {
	return src(["app/*.html", "app/img/*", "app/fnt/*"], {base: './app'})
		.pipe(dest('build'))
		.pipe(livereload());
}
function watchReload() {
	browserSync.init({
		server: "./build"
	});
	return watch(['app/**/*'], series(exports.build, function(cb){browserSync.reload();cb();}));
}
exports.clean = series(cleanProject);
exports.build = series(
	cleanProject,
	compileSass,
	compileScripts,
	build
);
exports.watch = series(watchReload);
