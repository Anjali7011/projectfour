const express = require('express')
const mongoose=require('mongoose')
const route=require('./routes/route')
const app=express()

app.use(express.json())

mongoose.connect("mongodb+srv://anjulika:3456789@grou2.xeiaskq.mongodb.net/test",{
    useNewUrlParser:true
},mongoose.set("strictQuery",false))

.then(()=>console.log("mongodb is connected"))
.catch(err=>console.log(err))

app.use('/',route)

app.listen(process.env.PORT||3000,function(){
    console.log('port is running on '+(process.env.PORT||3000))
})