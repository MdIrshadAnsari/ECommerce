require("dotenv").config()
require("./connection/connection")
const express = require("express");
const app = express();



app.use("/", (req, res)=>{
    res.send("hello world")
})

app.listen(process.env.PORT, ()=>{
    console.log(`server started ${process.env.PORT}`)
})