var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	jekyll = require('gulp-jekyll');

//目标目录
var dist = '../../dist/docs/';

//监控
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch('./**', ['jekyll']);
});

gulp.task('jekyll', function(){
	gulp.src(['./index.html', './_layouts/*.html', './_posts/*.{markdown,md}'])
		.pipe(jekyll({
			source: './',
			destination: dist,
			bundleExec: true
		}))
		.pipe(gulp.dest(dist)).pipe(livereload());
});

