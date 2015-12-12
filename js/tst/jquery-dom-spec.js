/*

	We want to be able to test DOM manipulation with jQuery
	- Installed 'karma-jasmine-jquery'
	- Installed 'jasmine-jquery'
	- Updated karma.conf.js

*/

describe("We should be able to query DOM", function(){
	
	var elem;
	
	beforeEach(function(){
		elem = $('<div id="container"><p>Hello World!</p></div>');
	});
	
	it("allows us to search with css selectors", function(){
		expect(elem.length).toEqual(1);
	});
	
});