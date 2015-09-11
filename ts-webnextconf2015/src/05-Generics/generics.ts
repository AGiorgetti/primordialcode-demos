// keep in mynd our generic function definition:
//function filter<T>(collection: T[], predicate: (item: T) => Boolean): T[] {
	//...
//}
	
// generics can be used in:

// interfaces

interface IFilterGeneric {
	<T>(collection: T[], predicate: (item: T) => Boolean): T[];
}

interface IFilter<T> {
	(collection: T[], predicate: (item: T) => Boolean): T[];
}

// classes

class Person<T> {
	id: T;
	name: string
	// ...
	AddFatherId(id: T): void {
		// store the value
	}
}

// Constraints
// build a function that works on a specific set of types (ot types that expose specific properties)

interface IPerson {
	name: string;
}

function filterPeople<T extends IPerson>(collection: T[], predicate: (item: T) => Boolean): T[] {
	//...
	throw "missing implementation";
	
}