const { AsyncLocalStorage } = require('async_hooks');
const express   = require('express');
const mongoose = require('mongoose');
const cors= require('cors');

//Pluggings
port = 5001;
db = 'mongodb://localhost:27017/crudemp';

//MW
const app      = express();
app.use(express.json());
app.use(cors());

//teast DB Connectivity
mongoose.connect(db).then(()=>{
    console.log('Connected to MongoDB');
}).catch(
    (error)=>{
        console.log('Error connecting to MongoDB', error);
    }
)

// create a structure (table)
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    mail:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})


const User = mongoose.model("user", userSchema);

//Landing Page
app.get('/', (req, res) => {
    res.send('Welcome on Landing Page')
})

//Create User:
app.post('/createuser', async(req, res) => {
    try {
        const bodyData = req.body;
        const user = new User(bodyData);
        const userData = await user.save();
        res.send(userData);
    }
    catch(error){
        console.log("Occured Error " , error)
    }

})


app.get('/getusers', async(req, res)=>{
    try{
        const userData = await User.find();
        res.send(userData);
    }
    catch(error){
        console.log("Occured Error " , error)
    }
})

app.put("/update/:id", async (req, res) => {
    try{
        const id=req.params.id;
        const userData=await User.findByIdAndUpdate({_id:id}, req.body,{
            new:true,
        });
        res.send(userData);
    }catch(error){
        res.send(error);
    }
});



//Delete User by id
app.delete("/delete/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const userData=await User.findByIdAndDelete({_id:id})
        res.send(userData);
    }catch(error){res.send(error);}
});
app.listen(port, ()=>{
    console.log(`Application is running on : http://localhost:${port}/`);
})