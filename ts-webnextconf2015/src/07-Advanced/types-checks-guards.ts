// typeof
var x1: any; //string|number = 0;

if(typeof x1 === 'string')
{
	// x1 is a string here! (no need to cast)
}
else 
{
	// and here? (try using a Union type)
}

// instanceof

class Dog { woof() { } }

class Cat { meow() { } }

var pet: Dog | Cat;

if(pet instanceof Dog) {
	// pet is a Dog
	pet.woof(); // OK
} else {
	// pet is a Cat
	//pet.meow(); // <- WARNING troubles with the compiler?
	//(<Cat>pet).meow(); // Error
}