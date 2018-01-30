const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();

const readStream = fs.createReadStream('./ex2/bigfile.txt');
const writeStream = fs.createWriteStream('./ex2/writeme.txt.gz');

readStream.pipe(gzip).pipe(writeStream);