const os = require('os')

//info about the user
const user = os.userInfo()
console.log(user);

//method returns the system uptime in secs
console.log(`the system uptime is ${os.uptime()} secs`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);