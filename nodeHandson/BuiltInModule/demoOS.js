const os = require('os');

const hostname= os.hostname();
const opsy= os.platform();

console.log(`Hostname : ${hostname}`);
console.log(`O.S. : ${opsy}`)