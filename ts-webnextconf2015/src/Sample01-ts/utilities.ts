export function filter<T>(collection: T[], predicate: (item: T) => Boolean): T[] {
	var result = new Array<T>();

	for (var j = 0; j < collection.length; j++) {
		if (predicate(collection[j]) === true) {
			result.push(collection[j]);
		}
	}

	return result;
}

export function getRecords() {
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