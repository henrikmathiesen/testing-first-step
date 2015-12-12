/*

	We specified out test function inline here
	There is currently no good way to get to source code functions
	from revealing module pattern. We need to find a better system. 

*/

var helloworld = function(){
	return "Hello World";
};

describe("Hello World", function(){
	
	it("should return the string hello world", function(){
		expect(helloworld()).toEqual("Hello World");
	});
	
});