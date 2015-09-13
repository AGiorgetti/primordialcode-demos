// ES6 - arrow function

// support for arrow function definition
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