module.exports = function(config) {
	
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      './js/src/**/*.js',
      './js/tst/**/*.js'
    ]
  });
  
};