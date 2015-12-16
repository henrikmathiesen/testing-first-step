/* global loadFixtures */

/*

	- Updated karma.conf.js with path to fixtures
	- Get Karmas server path to static fixture files and give to Jasmine

*/

describe("Test load more selector stability", function(){
	
	beforeEach(function(){
		jasmine.getFixtures().fixturesPath = 'base/js/tst/fixtures';
		loadFixtures('load-more.html');
	});
	
	it("should be one or more load more buttons", function(){
		expect($('[data-load-more-ajax-button]').length).toBeTruthy();
	});
	
	it("should have only one drop area for ajax response each", function(){
		var $buttons = $('[data-load-more-ajax-button]');
		
		$buttons.each(function(index, element){
			var $dropArea = $(element).parent('div').siblings( $(element).attr('data-load-more-ajax-dropselector') );
			expect($dropArea.length).toEqual(1);
		});
	});
	
});