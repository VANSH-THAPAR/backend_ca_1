const express = require('express')
const PORT = 3000;
const app = express();

app.get('/',(req,res)=>{
    res.send("Task 1: creating an express server")
})

app.listen(PORT,()=>{
    console.log(`http://localhost:3000`)
})