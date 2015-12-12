module.exports = function(config) {
	
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine-jquery', 'jasmine'],
    files: [
      './bower_components/jquery/dist/jquery.js',
      './js/src/**/*.js',
      './js/tst/**/*.js'
    ]
  });
  
};