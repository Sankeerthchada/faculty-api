const express = require ("express");
const app = express();
const PORT = 5000;
const API_KEY = 15;
function checkApiKey(req,res,next){
    const key1 = parseInt(req.headers["x-api-key"]);
    const key2 = parseInt(req.headers["y-api-key"]);
    const key3 = parseInt(req.headers["z-api-key"]);
    console.log(key1+key2+key3);
    if(!key1||key2||key3){
        return res.status(401).json({message: "Api key missing"});
    }
    if(key1+key2+key3!==API_KEY){
        return res.status(401).json({message: "Invalid API key"});
    }
    next();
}
app.get("/",(req,res)=>{
    res.send("Welcome to API key project");
});
app.get("/students",checkApiKey,(req,res)=>{
    res.json([
        {id:1,name:"Sankeerth"}
    ]);
});
app.listen(PORT,()=>console.log('Server running on ${PORT}'));