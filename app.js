const express = require("express")
const path = require("path")
const app = express()


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname , "htmlfile\\index.html"))
})


app.listen(8000,()=>{
    console.log("server is running at Port 8000")
})