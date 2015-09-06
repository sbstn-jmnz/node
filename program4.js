var fs = require('fs');
var path = require('path');

var content = fs.readdir(process.argv[2], function (error,content){

	for (var i = 0; i <= content.length; i++){

			if(path.extname(content[i]) === '.'+process.argv[3]	){
				console.log(content[i]);
			}
		}
	});

/*
 Official solution:

fs.readdir(process.argv[2], function(err, list){
 	list.forEach(function(file){
 		if(path.extname(file) === '.'+process.argv[3])
 			console.log(file);
 	})
 })

*/



 