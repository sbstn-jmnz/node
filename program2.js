
/* 
 fs module from the core Node library to preform filesystem operation.
 The entire fs module is available in the fs variable.
*/

var fs = require('fs');

/*
 All synchronous filesystem methos in the fs module end with 'Sync'. 
 To read a file you'll need to use fs.readFileSync('/path/to/file').
 This method will return a Buffer object containing the complete content of the file.
 Buffer.

 Buffer objects are a way of efficienly representing arbitrary arrats of data on differents formats.
 buffer objects can be casted to string by simply calling toString 
*/


var path = process.argv[2]; //Get the path provided when the file is runed or tested
var content = fs.readFileSync(path); //Content of the file
console.log(content.toString().split('\n').length-1); // Prints the munber of lines

	// note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

