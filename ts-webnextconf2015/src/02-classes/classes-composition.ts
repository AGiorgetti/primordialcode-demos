// Beware of the 'this' when playing with 'function pointers'!!

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// 
// When a function is called as a method of an object, 
// its 'this' is set to the object the method is called on.
// 
// The same notion holds true for methods defined somewhere on 
// the object's prototype chain. If the method is on an object's 
// prototype chain, this refers to the object the method was called on, 
// as if the method was on the object.

class Tool {
	private name: string = "Hammer";
	
	doSomething(): void {
		// I expect 'this,name' to always have the value 'Hammer' right?
		console.log("[" + this.name + "] Hammering. this is my call context", this);
	}
}

class User {
	private name: string = "user";
	
	private tool: Tool; // let's do some composition
	
	public doSomething: () => void; // and expose to the outside world the functions from our component class
	
	constructor(tool: Tool) {
		this.tool = tool;
		
		this.doSomething = this.tool.doSomething; // WARNING! you are 'messing up' with the 'this'! 
		                                          // it will reference the User class
	}	
}

var u = new User(new Tool());
u.doSomething();
































// you probably would like to do:
// this.doSomething2 = () => { this.tool.doSomething(); } // this is what you really wanna do!
	