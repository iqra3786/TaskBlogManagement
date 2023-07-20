const helper = require('../helpers/helper')
const blogModel = require('../models/blogModel')
const blogServices=require('../services/blogServices')

exports.blogCreate=async(req,res)=>{
const {title,image,userId,tags,category,subcategory,isPublished,isDeleted}=req.body
console.log()

const data=await blogServices.blogsCreate(title,image,userId,tags,category,subcategory,isPublished,isDeleted)
return helper.responseOk(req,res, "blog create successfully.",data)
}

exports.getBlogs=async(req,res)=>{
    const{userId}=req.body
    const blogs=await blogServices.getBlogs(userId)
    return helper.responseOk(req,res,"get blogs successfully.",blogs)
}

exports.updateBlogs=async(req,res)=>{
    const {blogId,title,image,isPublished,tags,subcategory}=req.body
    const update=await blogServices.update(blogId,title,image,isPublished,tags,subcategory)
    return helper.responseOk(req,res,"update blog successfully.",update)
}
exports.deleteBlogs=async(req,res)=>{

    const {blogId}=req.body
    const blog=await blogServices.delete(blogId)
    return helper.responseOk(req,res,"blog deleted successfully.",blog)

}