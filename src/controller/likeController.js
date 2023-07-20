const likeServices=require('../services/likesServices')
const helper = require('../helpers/helper')

exports.blogliked=async(req,res)=>{
    let {blogId,like}=req.body
    let updateLikes=await likeServices.likes(blogId,like)
    return helper.responseOk(req,res,"add like successfully.",updateLikes)

}