const express = require("express")
const path = require("path")
const app = express()


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname , "htmlfile\\index.html"))
})

app.get("/images/:file",(req,res)=>{
    res.sendFile(path.join(__dirname , "images\\"+req.params.file))
})

app.get("/style/:file",(req,res)=>{
    res.sendFile(path.join(__dirname , "style\\"+req.params.file))
})

app.get("/scripts/:file",(req,res)=>{
    res.sendFile(path.join(__dirname , "scripts\\"+req.params.file))
})

var PORT = process.env.PORT? process.env.PORT : 8000;

app.listen(PORT, function(err){
	if (err) console.log("Error in server setup")
	console.log("Server listening on Port", PORT);
})