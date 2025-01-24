const express = require('express');

const port = 5006;

// express as middleware
const app = express();

app.get('/', (req, res)=>{
    res.send("Welcome on Landing Page")
})


// read the data
//localhost/portnum/
//localhost/5006/home
app.get('/home' , (req, res)=>{
    res.send("Welcome on Home Page");
})

// write the or post the data 
//localhost/5006/home
app.post('/home' , (req, res)=>{
        res.send("Data inserted succesfully on Home Page");
});

app.put('/home', (req,res)=>{
    res.send("Data updated succesfully on Home Page");
});

app.delete('/home', (req,res)=>{
    res.send("Data deleted succesfully on Home Page");
})

app.get('/about' , (req, res)=>{
    res.send("Welcome on About Page");
})

app.post('/about' , (req, res)=>{
    res.send("Data inserted succesfully on About Page");
})

app.put('/about', (req, res)=>{
    res.send("Data updated succesfully on About Page")
})

app.delete('/about' , (req, res)=>{
    res.send("Data deleted succesfully on about Page");
})




app.listen(port, ()=>{
    console.log(`Server is Running on URL : http://localhost:${port}/`)
    console.log(`Home Page is Running on URL : http://localhost:${port}/home`)
    console.log(`About Page is Running on URL : http://localhost:${port}/about`)
})