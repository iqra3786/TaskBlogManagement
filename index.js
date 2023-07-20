const express=require('express');
const mongoose=require('mongoose')
const app=express()
const userRouter=require('./src/route/user')
const adminRouter=require('./src/route/admin')
const blogRouter=require('./src/route/blog')
const likeRouter=require('./src/route/likes')
require('dotenv').config()

app.use(express.json())
mongoose.connect(process.env.dbUrl,{
    useNewUrlParser:true
})
.then(()=>console.log("database is connected"))
.catch(err=>console.log(err))


app.use('/',userRouter)
//app.use('/',adminRouter)
app.use('/',blogRouter)
app.use('/',likeRouter)
app.listen((process.env.PORT),function(){
    console.log("running on port",process.env.PORT) 
})
