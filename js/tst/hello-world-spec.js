/*

	We specified out test function inline here
	There is currently no good way to get to source code functions
	from revealing module pattern. We need to find a better system.
	
	
	Jasmine, Karma and Karma Browsers with Gulp
	
	- Jasmine is a framework for running tests
		* It can work with javascript files through the require system
		* It has hower no access to the web browser and a web applications referenced javascript files
		
	- Karma is a framework for running tests, such as jasmine tests, in a browser environment
		* It has a built in web server
		* We specify what browser to use, what testing framework to use and which files to include in the test (tests and their dependecies) in karma.conf.js
		* We run the tests with Gulp
	
	http://stackoverflow.com/questions/26032124/karma-vs-testing-framework-jasmine-mocha-qunit

*/

var helloworld = function(){
	return "Hello World";
};

describe("Hello World", function(){
	
	it("should return the string hello world", function(){
		expect(helloworld()).toEqual("Hello World");
	});
	
});