//// <reference path="./utilities.ts" />
import * as utils from "./utilities"
import * as server from "./server"

server.StartHttpServer(); 

// call the external service
utils.getRecords(function(people) {
	// do something
	
	
	/*
	var person = utils.filter(people, function(p) {
		return p.name === "alessandro";
	});
	
	console.log(person);
	*/
});




