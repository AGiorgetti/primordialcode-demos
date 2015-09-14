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

// woraround: use function expression
var f4 = function() {
	return arguments.length > 0;
}

// arrow functions in classes with correctly manage the 'this'
class A {
	
	private prop1: string;
	
	// WARNING: what is 'this' ?
	setTimer() {
		window.setTimeout(function() {
			this.prop1; // <- undefined!!
		});
		
		window.setTimeout(() => {
			this.prop1; // <- this is good!
		})
	}
}