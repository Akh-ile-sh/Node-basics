const { readFile } = require('fs')

console.log('started a first task');
// check File path!!!
readFile('./content/First.txt', 'utf8', (err,result) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(`The result is : ${result}`);
    console.log('completed first task');
})

sec();


function sec() {
	readFile('./content/Second.txt', 'utf8', (err,result) => {
	    if (err) {
	        console.log(err);
	        return
	    }
	    console.log(`The result is : ${result}`);
	    console.log('completed second task');
	})
}
console.log('starting next task');