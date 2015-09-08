import { getRecords, filter } from "./utilities"

// do something!
var people = getRecords();

var person = filter(people, function(p) {
	return p.name === 'alessandro';
})

console.log(person);