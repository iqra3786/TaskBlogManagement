const joi=require('joi')
exports.userSchema=joi.object(
{
    firstName:joi.string().required(),
    lastName:joi.string().required(),
    email:joi.string().required(),
    password:joi.string().required()
})


exports.userLoginSchema=joi.object({
    email:joi.string().required(),
    password:joi.string().required()
})
exports.googleSampleSchema=joi.object({
    googleId:joi.string().required()
})