var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

var jsTstSrc = './js/tst/**/*.js';

gulp.task('test', function () {
	return gulp.src(jsTstSrc) 
		.pipe(jasmine());
});