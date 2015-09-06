var fs = require('fs');
var path = require('path');

// To define a single function export, you assign function to the module.exports object, overwriting what is already there


// This function accepts 3 parameters: The directory, the estension, and a callback function
module.exports = function(dirname, extension, callback){
	
	fs.readdir(dirname, function(errors, files){
		if(errors){
			callback(errors, null); //in case of error, the callback function is provided with those errors as first arg
		}
		else{
			var result = []; //no error, so for each file en the dirname, it extension is checked against the estension provided
			files.forEach(function(file) {
				if(path.extname(file) == '.'+extension){
					result.push(file); //the pushed to the result array
				}
			})
			callback(null, result)// finally returns the calback with no error and the result array
		}
	})

}