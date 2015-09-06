/*
The challenge is to make the same es previous, but with modules

We have to write a module that export a sinlge function that takes three arguments:
the directory name, the filename extention and a callback. The filename extension must be the same as in the proccess.argv

The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's
an error, the first argument passed to the callback will be null, and the second will be you data. In this example, the data will be your filtered list
of files, as an Array.

If you recive an Error, the callbacl must be called with the error, and only the error, as the first argument.
*/

var lib = require('./lib.js');

var directory = process.argv[2];
var extension = process.argv[3];

lib(directory, extension, function(error, files){
	if (error) {
		console.log(error);
	}

	for (var i = 0; i < files.length; i++){
		console.log(files[i]);
	}
})
