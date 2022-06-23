const express = require('express');

const app = express()
const port = 3000;

app.get('/apiOne',(req,res)=>{
    console.log(req);
    res.send("Hello world!");
});

app.listen(port,()=>{
    console.log(`listening on port : ${port}`);
});