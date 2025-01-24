const express = require('express');
const port = 5007;

//midllware expres  
//route 
const app = express();

app.route('/product').get().post().put().delete()

app.route('/home').get(
    (req, res) => {
        res.send("Data inserted succesfully on Home Page");
    }
).post(
    (req, res) => {
        res.send("Data updated succesfully on Home Page");
    }
).put(
    (req, res) => {
        res.send("Data deleted succesfully on Home Page");
    }
).delete(
    (req, res) => {
        res.send("Data deleted succesfully on Home Page");
    }
)

app.listen(port, ()=>{

    console.log(`Home Page is Running on URL : http://localhost:${port}/home`)
    
})