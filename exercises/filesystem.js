const fs = require('fs');

fs.readdir('./tmp', function(err, files) {
    for(let i = 0; i < files.length; i++) {
        fs.readFile('./tmp/' + files[i], function(err, content) {
            console.log(content.toString('ascii'));
        });
    }
});

fs.readdir('./tmp', function(err, files) {
    for(let i = 0; i < files.length; i++) {
        fs.readFile('./tmp/' + files[i], function(err, content) {
            console.log(content.toString('ascii'));
        });
    }
});
