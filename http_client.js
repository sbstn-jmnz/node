/*
-write a program that performs an HTTP GET request to a url provides as the first command-line arg
-write the String contents of each "data" event from the response to a ne line on the console
*/

var request = require('http');
var url = process.argv[2];

request.get(url,function(response){
	response.setEncoding('utf8');
	//The response object returned by the get() method is a Node Stream Object, which emits events.
	//The three events more used are : "data", "error" and "end" 
	response.on("data", function(data){
		//the data event is emitted when a chunk of data is available and can be processed.  
		console.log(data);
	})
})

// the response Object from the get() has a setEncoding() method. When used like here, the "data" event will
// emit Strings rather than the standar node Bufer Object, avoiding casting de Bufer Object to String