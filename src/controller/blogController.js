const helper = require('../helpers/helper')
const blogModel = require('../models/blogModel')
const blogServices=require('../services/blogServices')

exports.blogCreate=async(req,res)=>{
    
const {title,tags,category,subcategory,isPublished,isDeleted}=req.body

let image=req.file
const userId=req.token.userId
if(!image){
   return helper.responseError(req,res,"image is required",null)
}

 image = `${process.env.url}/image/${req.file.filename}`

const data=await blogServices.blogsCreate(title,image,userId,tags,category,subcategory,isPublished,isDeleted)
return helper.responseOk(req,res, "blog create successfully.",data)
}

exports.getBlogs=async(req,res)=>{
    const{userId}=req.body
    const blogs=await blogServices.getBlogs(userId)
    if(blogs.status==false){
        return helper.responseError(req,res,blogs.message,null)

    }
    return helper.responseOk(req,res,blogs.message,blogs.data)
}


exports.updateBlogs=async(req,res)=>{

    const {blogId,title,image,isPublished,tags,subcategory}=req.body
    const userId=req.token.userId
   
    const update=await blogServices.update(blogId,title,image,isPublished,tags,subcategory,userId)
    if(update.status==false){
        return helper.responseError(req,res,update.message, null)
    }
    return helper.responseOk(req,res,update.message,update.updateBlog)
}
exports.deleteBlogs=async(req,res)=>{

    const {blogId}=req.body
    const userId=req.token.userId
    console.log(userId)
    const blog=await blogServices.delete(blogId,userId)
    if(blog.status==false){
        return helper.responseError(req,res,blog.message,null)
    }
    return helper.responseOk(req,res,blog.message,blog)

}