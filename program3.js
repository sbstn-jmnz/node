/*
	This is almost the same as the previous example, only that this time is asynchronous.
*/

var fs = require('fs');

var content = fs.readFile(process.argv[2], function (error,content){

console.log(content.toString().split('\n').length-1);

});
