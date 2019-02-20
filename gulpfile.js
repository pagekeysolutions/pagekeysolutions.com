JS_SRC = [
	"app/js/vendor/jquery-3.3.1.js",
	"app/js/vendor/scrollmagic/velocity.js",
	"app/js/vendor/scrollmagic/TweenMax.min.js",
	"app/js/vendor/scrollmagic/ScrollMagic.js",
	"app/js/vendor/scrollmagic/animation.gsap.js",
	"app/js/vendor/scrollmagic/animation.velocity.js",
	"app/js/vendor/scrollmagic/debug.addIndicators.js",
	"app/js/main.js"
];

const {series, parallel, src, dest, watch} = require('gulp');
var sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
		uglifycss = require('gulp-uglifycss'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create(),
		deploy = require('gulp-gh-pages');

function cleanProject() {
	return src('build', {read:false, allowEmpty: true})
		.pipe(clean());
}
function compileSass() {
	return src(['app/scss/main.scss','app/scss/mobile.scss'])
		.pipe(sass())
		.pipe(uglifycss({
			uglyComments: true
		}))
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
function compileScriptsDebug() {
	return src(JS_SRC)
		// .pipe(sourcemaps.init())
		.pipe(concat('app.min.js'))
		// .pipe(uglify())
		// .pipe(sourcemaps.write())
		.pipe(dest('build/js'));
}
function build() {
	return src(["app/*.html", "app/blog/index.html", "app/img/**/*", "app/fnt/*", "app/*.ico", "app/CNAME"], {base: './app'})
		.pipe(dest('build'))
		.pipe(livereload());
}
function watchReload() {
	browserSync.init({
		server: "./build"
	});
	return watch(['app/**/*', 'gulpfile.js'], series(exports.build_debug, function(cb){browserSync.reload();cb();}));
}
function deployToGithub() {
	return src('./build/**/*')
		.pipe(deploy());
}
exports.clean = series(cleanProject);
exports.build_debug = series(
	cleanProject,
	compileSass,
	compileScriptsDebug,
	build
);
exports.build = series(
	cleanProject,
	compileSass,
	compileScripts,
	build
);
exports.watch = series(exports.build_debug, watchReload);
exports.deploy = series(exports.build, deployToGithub);
