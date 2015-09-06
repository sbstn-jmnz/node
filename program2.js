var fs = require('fs');
var path = process.argv[2];
var content = fs.readFile(path);

console.log(content.toString().split('\n').length-1);


