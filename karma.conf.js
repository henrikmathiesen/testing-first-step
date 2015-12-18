module.exports = function(config) {
	
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine-jquery', 'jasmine'],
    files: [
      './bower_components/jquery/dist/jquery.js',
      './js/src/**/*.js',
      './js/tst/fixtures/**/*.html',
      './js/tst/**/*.js',
      
      // Koans
      './js/tst-koans/AboutExpects.js',
      './js/tst-koans/AboutArrays.js',
      './js/tst-koans/AboutFunctions.js',
      // We skip AboutHigherOrderFunctions.js, since it depends on _underscore
      './js/tst-koans/AboutInheritance.js'
    ]
  });
  
};