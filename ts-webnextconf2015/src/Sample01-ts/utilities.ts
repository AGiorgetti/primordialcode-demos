export interface IRecord {
	id: number;
	name: string;
	surname: string;
	
	// TypeScript 1.6 requires strict matching between the properties of objects,
	// we can use this syntax to allow the objects to have unknown properties
	//[x:string]: any; // typescript 1.6 tsc --suppressExcessPropertyErrors (look in tasks.json)
}



export function getRecords(): IRecord[] {
	return [{
		id: 1,
		name: "alessandro",
		surname: "giorgetti"
	}, {
			id: 2,
			name: "mario",
			surname: "rossi"
		}];
}



export function filter(collection: IRecord[], predicate: (item: IRecord) => Boolean): IRecord[] {
	var result = new Array();

	for (var j = 0; j < collection.length; j++) {
		if (predicate(collection[j]) === true) {
			result.push(collection[j]);
		}
	}

	return result;
}
