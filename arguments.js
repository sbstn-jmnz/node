// You can access comand-line arguments via the global process object! The process object has an argv property
// which is an array containing the complete command-line. 
var inputs = [];
var sum = 0; 
 for(var i = 2 ; i < process.argv.length; i++){
 	sum += +process.argv[i]
 };
console.log(sum)

// Oficial Solution

// var result = 0;

// for (var i = 2; i < process.argv.length; i++){
// 		result += Number(process.argv[i])
// }
// console.log(result)