const express=require("express")
const mongoose=require("mongoose")
mongoose.connect(
    "mongodb+srv://bebofid810:Oq5DC0d28sJ20Mmx@backenddatabase.cmy2opo.mongodb.net/?retryWrites=true&w=majority&appName=backenddatabase",
).then(()=>{
    console.log("database connected sucessfully")
}).catch((err)=>{
    console.log("database not connected",err)
})
const app=express()
let x ={
    Name:"honda civic",
    brand:"honda",
    year:2021,
    perhourrate:100,
    seats:4
}
app.listen(3000,()=>{
    console.log("server is running on port 3000 ")
})
app.get("/",(req,res)=>{
    res.send(x)
})