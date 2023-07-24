const adminModel = require('../models/adminModel')
const jwt=require('jsonwebtoken')
const blogModel=require('../models/blogModel')
const { isValidObjectId } = require('mongoose')
exports.adminRegister = async (
    firstName,
    lastName,
    title,
    email,
    password) => {
    const createData = await adminModel.create({
        firstName,
        lastName,
        title,
        email,
        password
    })

    return createData
}

exports.adminLogin = async (email, password) => {
    const adminLogin = await adminModel.findOne({ email: email, password: password })
    if (adminLogin ) {
        const token=jwt.sign({userId:adminLogin._id.toString()},"SECRET_KEY")
        const updateBlog=await adminModel.findOneAndUpdate({_id:adminLogin._id},{$set:{token:token}},{new:true})
        return { status: true, message: "admin logged in successfully" ,token}
    }
    else {
        return { status: false, message: "admin not found" }
    }
}

exports.adminBlogsCreate=async(title,image,userId,tags,category,subcategory,isPublished)=>{
    console.log(title)
    const data=await blogModel.create({title,image,userId,tags,category,subcategory,isPublished})
    console.log(data)
    return data
}


exports.adminGetBlogs=async(userId)=>{
    if(userId)

   { 
   
    const data=await blogModel.findOne({userId:userId})
    if(data){

        return {status:true,message:"get blog successfully.",data:data}

     }
     else{
return{status:false,message:"there is no blog for this user"}
     }
    }
   
   else{
    const data=await blogModel.find()
    return {status:true,message:"get blog successfully.",data:data}
   }
}

exports.adminUpdate=async(blogId,title,image,isPublished,tags,subcategory)=>{
    
    if (blogId.split('').length<24){
        return{status:false,message:"please provide valid id."}

       
    }

    const blogDetails=await blogModel.findOne({_id:blogId})
    console.log(blogDetails)
    if(blogDetails){
        if(blogDetails.isDeleted==true) {
            return {status:true,message:"this blog is deleted."}
        }

        const updateBlog=await blogModel.findOneAndUpdate({_id:blogId},{$set:{title:title,image:image,isPublished:isPublished},
            $push:{tags:tags,subcategory:subcategory}},
    
        {new:true})
        return {status:true,message:"update blog successfully.",updateBlog}
    
   
    }
    else if(!isValidObjectId(blogId)){
return {status:false,message:"this blogId does not exist."}
    }


}
exports.adminDelete=async(blogId,userId)=>{
    if (blogId.split('').length<24){
        return{status:false,message:"please provide valid id."}

       
    }

    const blogDetails=await blogModel.findOne({_id:blogId})
    
    if(blogDetails){
        if(blogDetails.isDeleted==true) {
            return {status:true,message:"this blog is  already deleted."}
        }
       
        const deleteBlog=await blogModel.updateOne({_id:blogId},{$set:{isDeleted:true,deleteAt:new Date()}},{new:true})
        return {status:true,message:"blog deleted successfully."}
  
  
    }
    else if(!isValidObjectId(blogId)||blogDetails==null){
return {status:false,message:"this blogId does not exist."}
    }
    
}