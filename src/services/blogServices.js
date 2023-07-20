const blogModel=require('../models/blogModel')


exports.blogsCreate=async(title,image,userId,tags,category,subcategory,isPublished)=>{
    console.log(title)
    const data=await blogModel.create({title,image,userId,tags,category,subcategory,isPublished})
    console.log(data)
    return data
}

exports.getBlogs=async(userId)=>{
    if(authorId)
   { const data=await blogModel.findById({userId:userId})
   return data
}
   
   else{
    const data=await blogModel.find()
    return data
   }
}

exports.update=async(blogId,title,image,isPublished,tags,subcategory)=>{
    const blogDetails=await blogModel.findById(blogId)
    const updateBlog=await blogModel.findByIdAndUpdate({_id:blogId},{$set:{title:title,image:image,isPublished:isPublished},
        $push:{tags:tags,subcategory:subcategory}},

    {new:true})
}
exports.delete=async(blogId)=>{
    const deleteBlog=await blogModel.updateOne({_id:blogId},{$set:{isDeleted:true,deleteAt:new Date()}},{new:true})
    return deleteBlog
}