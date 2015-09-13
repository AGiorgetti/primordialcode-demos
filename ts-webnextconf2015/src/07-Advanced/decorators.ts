// ES7 proposal

// A decorator is:
// - an expression
// - that evaluates to a function
// - that takes the target, name, and property descriptor as arguments
// - and optionally returns a property descriptor to install on the target object

// decorators are added to class methods (and class constructor) declaration using the '@' sign

// specific types for decorators:
// - ClassDecorator 
// - PropertyDecorator 
// - MethodDecorator 
// - ParameterDecorator 

var methodDecorator: MethodDecorator;

import { ILogger, ConsoleLogger } from "../04-modules/LoggerModule";

var logger: ILogger = new ConsoleLogger("decorator sample");

function log<T>(
	target: Object, // the object on whcih the decorator is acting on
	propertyKey: string, // the property that is getting decorated
	descriptor: TypedPropertyDescriptor<T>): T {

	logger.log("decorating: " + propertyKey);
	return descriptor.value;
}

class Actor {
	constructor(private name: string) { }

	//@log
	performSomething() {
		console.log("[" + this.name + "] I am awesome on the stage!");
	}
}

var a = new Actor("Alessandro");
a.performSomething();




 

