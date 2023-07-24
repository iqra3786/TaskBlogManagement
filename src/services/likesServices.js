const blogModel=require('../models/blogModel')
const commentModel=require('../models/commentModel')
exports.likes=async(blogId,like)=>{
    let data=await blogModel.findByIdAndUpdate(
        {_id:blogId,isDeleted:false},{$inc:{like:1}},{new:true}
    )
    return data

}

exports.comment=async(blogId,comment)=>{
    // let data=await blogModel.findByIdAndUpdate({_id:blogId,isDeleted:false},{$set:{comment:comment}},{new:true})
    // return data
   

   
      const newComment = (await commentModel.create({blogId:blogId,comment })).populate("blogId");
      return newComment
      
    }

    exports.reply=async(commentId,text)=>{


      
       
          const comment = await commentModel.findById(commentId).populate("blogId");
      
       
          comment.replies.push({ text });
          await comment.save();
      
         return comment
     
      
    }
    
      
      
      
      
      
      