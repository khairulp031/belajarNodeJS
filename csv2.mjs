//const Fs = require('fs');
//const CsvReadableStream = require('csv-reader');

import Fs from 'fs'
import CsvReadableStream from 'csv-reader'
import { read, write } from './test/module1.mjs'

let inputStream = Fs.createReadStream('test.csv', 'utf8');

inputStream
	.pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
	.on('data', function (row) {
		//console.log('A row arrived: ', row);
		read(row)
	})
	.on('end', function () {
		console.log('No more rows!');
	});