/// <reference path="../../typings/tsd.d.ts" />
import * as http from "http";

export interface IRecord {
	id: number;
	name: string;
	surname: string;
	
	// TypeScript 1.6 requires strict matching between the properties of object literals,
	// we can use this syntax to allow the objects to have unknown properties.
	// If the target type accepts additional properties, add an indexer:
	//[x:string]: any; // typescript 1.6 tsc --suppressExcessPropertyErrors (look in tasks.json)
}



export function getRecords(callback: (records: IRecord[]) => void): void {

	var options = {
		host: "127.0.0.1",
		port: 8010,
		path: "/",
		method: "GET"
	}

	http.get(options, (res) => {
		var body = '';
		res.on('data', (chunk: any) => {
			body += chunk;
		});
		res.on('end', function() {
			var result = <IRecord[]>JSON.parse(body);
			//console.log(result);
			callback(result);
		});
	}).on("error", (error: any) => {
		console.log(error);
	});	
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
