const { isValidObjectId } = require('mongoose')
const blogModel=require('../models/blogModel')


exports.blogsCreate=async(title,image,userId,tags,category,subcategory,isPublished)=>{
    console.log(title)
    const data=await blogModel.create({title,image,userId,tags,category,subcategory,isPublished})
    console.log(data)
    return data
}

exports.getBlogs=async(userId)=>{
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

exports.update=async(blogId,title,image,isPublished,tags,subcategory,userId)=>{
    
    if (blogId.split('').length<24){
        return{status:false,message:"please provide valid id."}

       
    }

    const blogDetails=await blogModel.findOne({_id:blogId})
    console.log(blogDetails)
    if(blogDetails){

        if(blogDetails.userId==userId)
        {const updateBlog=await blogModel.findOneAndUpdate({_id:blogId},{$set:{title:title,image:image,isPublished:isPublished},
            $push:{tags:tags,subcategory:subcategory}},
    
        {new:true})
        return {status:true,message:"update blog successfully.",updateBlog}
    }
    else {
        return {status:false,message:"you are not able to authorise to edit this profile."}
    }
    }
    else if(!isValidObjectId(blogId)){
return {status:false,message:"this blogId does not exist."}
    }


}
exports.delete=async(blogId,userId)=>{
    if (blogId.split('').length<24){
        return{status:false,message:"please provide valid id."}

       
    }

    const blogDetails=await blogModel.findOne({_id:blogId})
    
    if(blogDetails){

        if(blogDetails.userId==userId)
        { 
            if(blogDetails.isDeleted==true) {
                return {status:true,message:"this blog is  already deleted."}
            }
                const deleteBlog=await blogModel.updateOne({_id:blogId},{$set:{isDeleted:true,deleteAt:new Date()}},{new:true})
        return {status:true,message:"blog deleted successfully."}
    }
    else {
        return {status:false,message:"you are not able to authorise to delete this profile."}
    }
    }
    else if(!isValidObjectId(blogId)||blogDetails==null){
return {status:false,message:"this blogId does not exist."}
    }
    
}