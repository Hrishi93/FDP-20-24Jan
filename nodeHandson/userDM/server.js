const http = require('http');
const greet = require('./greet.js');

const msg= greet("Akshay Kumar");

const port= 5005;

const server=http.createServer(
    (req,res)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(`<p> Hello : ${msg}  </p>`)
        res.end('<h1>Last Line</h1>');
    }
)

server.listen(port, ()=>{
    console.log(`Server is running on URL : http://localhost:${port}/`);
    console.log(`Welcome in COnsole : ${msg}`)
})