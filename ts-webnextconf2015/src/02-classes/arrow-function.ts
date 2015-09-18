// ES6 - arrow function

// support for arrow function syntax
var f: () => boolean;

f = () => {
	return true;
}

// 'arguments' is not supported

var f2 = () => {
	// return arguments.length > 0; // Error!
}

// workaround: is use named rest parameters
var f3 = (...args: any[]) => {
	return args.length > 0;
}

// workaround: use function expression
var f4 = function() {
	return arguments.length > 0;
}



// managing the 'this' correctly using arrow functions in classes
class A {
	
	constructor(public prop1: string) {}
	
	// WARNING: what is 'this' ?
	setTimer() {
		this.prop1 = "test";
		
		window.setTimeout(function() {
			console.log(this.prop1); // <- undefined!!
		}, 500);
		
		window.setTimeout(() => {
			console.log(this.prop1); // <- this is good!
		}, 1000)
	}
}

var instance = new A("test");
instance.setTimer();