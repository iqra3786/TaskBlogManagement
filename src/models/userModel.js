const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    title:{
        type:String,
       

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    token:{
        type:String,
        default:null
    },
    googleId:{
        type:String,
        default:null
    }
},{
    timestamps:true
})

module.exports=mongoose.model('user',userSchema)