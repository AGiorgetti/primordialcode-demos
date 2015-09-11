//// <reference path="./utilities.ts" />
import { getRecords, filter } from "./utilities"

// call the external service
var people = getRecords();

// cal the library
var person = filter(people, function(p) {
	return p.name === 'alessandro';
})

console.log(person);
