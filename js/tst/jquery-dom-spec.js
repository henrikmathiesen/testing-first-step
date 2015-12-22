/*

	We want to be able to test DOM manipulation with jQuery
	- Installed 'karma-jasmine-jquery'
	- Installed 'jasmine-jquery'
	- Updated karma.conf.js

*/

describe("We should be able to query DOM", function(){
	
	var elem;
    var elem02;
	
	beforeEach(function(){
		elem = $('<div id="container"><p>Hello World!</p><span>1</span><span>2</span></div>');
        elem02 = $('<div><span style="display:none;">Adam</span><span>Bertil</span></div>')
	});
	
	it("allows us to search with css selectors", function(){
		expect(elem.length).toEqual(1);
		expect(elem.is("#container")).toBeTruthy();
		expect(elem.find('p').length).toEqual(1);
	});
    
    it("should find first span with different syntaxes", function(){
        var firstSpan01 = elem.find('span').first();
        var firstSpan02 = elem.find('span').eq(0);
        var firstSpan03 = elem.find('span:eq(0)');
        //var firstSpan04 = elem.find('span').is('eq(0)'); , wont work
        
        expect(firstSpan01.length).toEqual(1);
        expect(firstSpan01.text()).toEqual("1");
        
        expect(firstSpan02.length).toEqual(1);
        expect(firstSpan02.text()).toEqual("1");
        
        expect(firstSpan03.length).toEqual(1);
        expect(firstSpan03.text()).toEqual("1");
    });
    
    it("should find the last span with different syntaxes", function(){
        var lastSpan01 = elem.find('span').last();                                  // best really ...
        var lastSpan02 = elem.find('span').eq((elem.find('span').length - 1));      // cumbersume
        var lastSpan03 = elem.find('span').eq(-1);                                  // better
        
        expect(lastSpan01.length).toEqual(1);
        expect(lastSpan01.text()).toEqual("2");
        
        expect(lastSpan02.length).toEqual(1);
        expect(lastSpan02.text()).toEqual("2");
        
        expect(lastSpan03.length).toEqual(1);
        expect(lastSpan03.text()).toEqual("2");
    });
	
    it("should find the first element IF it is a p tag", function(){
        var firstP01 = elem.find('p').eq(0);
        
        expect(firstP01.length).toEqual(1);
        expect(firstP01.is(':first-child')).toEqual(true);                           // REMEMBER, .is() RETURNS A BOOLEAN
    });
    
    it("should find the last element IF it is a span tag", function(){
        var lastSpan01 = elem02.find('span').eq(-1);
        
        expect(lastSpan01.length).toEqual(1);
        expect(lastSpan01.is(':last-child')).toEqual(true);
    });
    
    it("should find spans that is not last child", function(){
        var notLastSpans01 = elem02.find('span').not(':last-child');                // REMEMBER .not() IS A SELECTOR FILTER
        
        expect(notLastSpans01.length).toEqual(1);
        expect(notLastSpans01.text()).toEqual("Adam");
    });
    
});