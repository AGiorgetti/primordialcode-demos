var server = require("./server.js");
var utils = require("./utilities.js");

// start the external mockup service that provide us test data
server.StartHttpServer();

// call the external service

// getRecords( callback(array) )

// filter( array, selector(item) ) returns the filtered array!

utils.getRecords(function (people) {
	 console.log(people);
	
     var result = utils.filter(people, function(person) {
		return person.name === "alessanro";
	 });	
	 
	 console.log(result);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*
	var result = utils.filter(function (item) {
		return item.name === "alessandro";
	});

	console.log(result);
*/

});

























// call the library
/*
var person = utils.filter(people, function(p) {
	return p.name === 'alessandro';	
});
*/
// the result!
//console.log(person);