// Node Module / FPM 
const http = require('http');
//const express = require('express'); // TPM - NPM Module

const port= 5003;

const server = http.createServer(
    (request, response) => {
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write("Hello")
        response.end('Hello World\n');
    }
)

server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}/`);
})

//8086*64 
