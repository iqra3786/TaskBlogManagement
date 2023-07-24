const express=require('express');
const mongoose=require('mongoose')
const app=express()
const userRouter=require('./src/route/user')
const adminRouter=require('./src/route/admin')
const blogRouter=require('./src/route/blog')
const likeRouter=require('./src/route/likes')
const multer=require('multer')
const bodyParser = require('body-parser');
require('dotenv').config()
const upload = multer();
//app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(process.env.dbUrl,{
    useNewUrlParser:true
})
.then(()=>console.log("database is connected"))

.catch(err=>console.log(err))
// Parse application/x-www-form-urlencoded
app.use(express.json())
//app.use(bodyParser.urlencoded({ extended: false }));

// Parse multipart/form-data (for file uploads and form data)
app.use(express.static('storage'))
// app.use(upload.any());

app.use('/',userRouter)
app.use('/',adminRouter)
app.use('/',blogRouter)
app.use('/',likeRouter)

//app.use(multer().any())



app.listen((process.env.PORT),function(){
    console.log("running on port",process.env.PORT) 
})
