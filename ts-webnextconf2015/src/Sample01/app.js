var server = require("./server.js");
var utils = require("./utilities.js");

server.StartHttpServer();

// call the external service
utils.getRecords(function (people) {

});

// call the library
/*
var person = utils.filter(people, function(p) {
	return p.name === 'alessandro';	
});
*/
// the result!
//console.log(person);