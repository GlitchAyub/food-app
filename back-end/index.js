const express = require('express')
const app = express();
const port =9000;
const mongodb = require('./db')

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/Display"))
mongodb();

app.listen(port,()=>{
    console.log("server started");
})