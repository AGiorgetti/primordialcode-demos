// TypeScript has all the basic JavaScript Types (number, string, etc...)
// plus:

// any [disable the type checking]

var a: any;
a = 1;
a = '1';

// void [no type at all, used a return value of a function]

function test() : void {
	// I only have side effects!
}
// this is meaningless! 
var result = test();

// also note that a function it's actually just a function!
// it cannot act like an object anymore (try to define fields and properties inside it)