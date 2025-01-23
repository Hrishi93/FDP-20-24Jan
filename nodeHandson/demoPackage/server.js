const http = require('http');
const express = require('express');
const port= 5004;

const server=http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>Hello</h1>")
    res.write("<p>Hello in p</p>")
    res.end('Hello World\n');
})

server.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
    console.log('Hello');
    console.log("Hello 2");
})

