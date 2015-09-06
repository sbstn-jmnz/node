var fs = require('fs');

var content = fs.readFile(process.argv[2], function DoneReading(error,content){

console.log(content.toString().split('\n').length-1);

});
