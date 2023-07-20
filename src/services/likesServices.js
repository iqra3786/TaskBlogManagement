const blogModel=require('../models/blogModel')
exports.likes=async(blogId,like)=>{
    let data=await blogModel.findByIdAndUpdate(
        {_id:blogId,isDeleted:false},{$inc:{like:1}},{new:true}
    )
    return data

}