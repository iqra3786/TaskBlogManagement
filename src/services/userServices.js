const { userRegistered } = require('../controller/userController')
const googleSampleModel = require('../models/googleSampleModel')
const userModel = require('../models/userModel')
const jwt=require('jsonwebtoken')
exports.register = async (
    firstName,
    lastName,
    title,
    email,
    password) => {
        const data=await userModel.findOne({email:email})
        if(data){
            return {status:false,message:"this email is already exist please try another email"}
        }
    const createData = await userModel.create({
        firstName,
        lastName,
        title,
        email,
        password
    })

    return {status:true,message:"user registered successfully",data:createData}
}

exports.login = async (email, password) => {
    const userLogin = await userModel.findOne({ email: email, password: password })
    if (userLogin) {
        const token=jwt.sign({userId:userLogin._id.toString()},"SECRET_KEY")
        const updateBlog=await userModel.findOneAndUpdate({_id:userLogin._id},{$set:{token:token}},{new:true})
        return { status: true, message: "user logged in successfully" ,token}
    }
    else {
        return { status: false, message: "user not found" }
    }
}

exports.loginWithGoogle=async(googleId)=>{
   const data=await googleSampleModel.findOne({
    googleId:googleId})
  const detail=await userModel.findOne({
    googleId:googleId
  })
  if(detail){
  
    return detail
  }
  else{
      const createData = await userModel.create({
          firstName:data.firstName,
          lastName:data.lastName,
          email:data.email,
          password:data.password,
          googleId:googleId,
          
      })
      const exist=await userModel.findOne({googleId:googleId})
      if(exist){
        const token=jwt.sign({userId:exist._id.toString()},"SECRET_KEY")
        const updateBlog=await userModel.findOneAndUpdate({_id:exist._id},{$set:{token:token}},{new:true})

        return updateBlog
      }
      return createData
  
  }
    }
