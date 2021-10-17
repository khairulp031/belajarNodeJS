const Fs = require('fs');
const CsvReadableStream = require('csv-reader');
const module1 = require('./test/module1.js')

let inputStream = Fs.createReadStream('test.csv', 'utf8');

inputStream
	.pipe(new CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
	.on('data', function (row) {
        module1.read(row)
	    //console.log('A row arrived: ', row);
	})
	.on('end', function () {
	    console.log('No more rows!');
	});