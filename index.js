const express = require("express");
const app = express();

app.get("/",(req, res)=>{
res.json([
    {
        id:1,
        name:"yamini",
        age:21
    }
])    
});
app.listen(5500,()=>{
    console.log("app is running")
})