const { readFileSync, writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/First.txt', 'utf-8')
const second = readFileSync('./content/Second.txt', 'utf-8')

console.log(first,second);

writeFileSync('./content/result-sync.text',`Here is the result: ${first}, ${second}`,{flag: 'a'})

console.log("done with the task");
console.log("Starting the new one");