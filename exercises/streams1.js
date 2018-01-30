const fs = require('fs');

const readStream = fs.createReadStream('./ex2/bigfile.txt');
const writeStream = fs.createWriteStream('./ex2/writeme.txt');

readStream.on('data', function(chunk) {
    console.log('chunk received');
    console.log(chunk.toString('ascii'));
    writeStream.write(chunk);
});

readStream.on('end', function() {
    console.log('stream ended');
});