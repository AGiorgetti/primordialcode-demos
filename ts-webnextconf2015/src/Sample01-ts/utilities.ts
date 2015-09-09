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

export interface IRecord {
	id: number,
	name: string
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
