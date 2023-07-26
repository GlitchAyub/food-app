const express = require('express')
const app = express();
const port =9000;
const mongodb = require('./db')

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.use(express.json());
app.use('/api',require("./Routes/CreateUser"))
mongodb();

app.listen(port,()=>{
    console.log("server started");
})