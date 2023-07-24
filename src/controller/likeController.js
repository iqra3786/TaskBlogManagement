const likeServices=require('../services/likesServices')
const helper = require('../helpers/helper')

exports.blogliked=async(req,res)=>{
    let {blogId,like}=req.body
    let updateLikes=await likeServices.likes(blogId,like)
    return helper.responseOk(req,res,"add like successfully.",updateLikes)

}

exports.commentOnBlog=async(req,res)=>{
    let{blogId,comment}=req.body
    let blogDetail=await likeServices.comment(blogId,comment)
    return helper.responseOk(req,res,"comment on blog successfully.",blogDetail)
}

exports.commentReply=async(req,res)=>{

    const { commentId } = req.params;
    const {text } = req.body;
  

    let data=await likeServices.reply(commentId,text)
    helper.responseOk(req,res, "reply on comment sucessfully.",data)

 
}
  
  
  
  
  