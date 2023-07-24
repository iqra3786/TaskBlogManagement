const mongoose=require('mongoose')
const adminSchema=new mongoose.Schema({
    "firstName":{
        type:String,
        required:true,
        trim:true
    },
    "lastName":{
        type:String,
        required:true,
        trim:true
    },
    "title":{
        type:String,
        required:true,

    },
    "email":{
        type:String,
        required:true,
        unique:true
    },
    "password":{
        type:String,
        required:true,
    
    },
    "isDeleted":{
        type:Boolean,
        default:false
    },
},{
    timestamps:true
})

module.exports=mongoose.model('admin',adminSchema)