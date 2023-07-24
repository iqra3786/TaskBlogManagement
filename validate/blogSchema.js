const joi=require('joi')
exports.blogCreateSchema=joi.object({
    title:joi.string().required()
})
exports.updateBlogChema=joi.object({
    blogId:joi.string().required()
})

exports.deleteBlogShema=joi.object({
    blogId:joi.string().required()
})