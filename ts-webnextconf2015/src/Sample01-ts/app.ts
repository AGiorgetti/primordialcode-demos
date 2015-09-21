//// <reference path="./utilities.ts" />
import * as utils from "./utilities"
import * as server from "./server"

server.StartHttpServer(); 

// call the external service
utils.getRecords(function(people) {
	// do something
	
	var result = utils.filter(people, function(person) {
		return person.name === "alessandro";
	});
	
	console.log(result);
	/*
	var person = utils.filter(people, function(p) {
		
		return p.name === "alessandro";
	});
	
	console.log(person);
	*/
});




