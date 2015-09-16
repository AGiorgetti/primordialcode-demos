//// <reference path="./utilities.ts" />
import { getRecords, filter } from "./utilities"
import * as server from "./server"

server.StartHttpServer(); 

// call the external service
getRecords(function(people) {
	// do something
	
	
	// call the library
	/*
	var person = filter(people, function(p) {
		return p.name === 'alessandro';
	})
	console.log(person);
	*/
});




