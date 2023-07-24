const { blogCreateSchema, updateBlogChema, deleteBlogShema } = require("../../validate/blogSchema")
const { userSchema, userLoginSchema, googleSampleSchema } = require("../../validate/userSchema")

const joiValidationSchema=async(req,res,next,schema)=>{
    const{error,value}=await schema.unknown(true).validate(req.body)
    if(error){
        let errorMessage=error.message.replace('"',"")
        errorMessage=errorMessage.replace('"',"")
        return res.status(400).json({success:false,message:errorMessage,data:null})
    }
    return next()
}

exports.validate=async(req,res,next)=>{
    const input=req.body
    const path=req.path
    switch(path){
        case "/user-register":
            {joiValidationSchema(req,res,next,userSchema)
            break;}

            case "/user-login":
                {
                    joiValidationSchema(req,res,next,userLoginSchema)
                    break;
                }
                case"/sign-in-with-google":{
                    joiValidationSchema(req,res,next,googleSampleSchema)
                    break;
                }
                case '/create-blog':{
                    joiValidationSchema(req,res,next,blogCreateSchema)
                    break;
                }
                case '/update-blog':{
                    joiValidationSchema(req,res,next,updateBlogChema)
                    break;
                }
                case '/delete-blog':{
                    joiValidationSchema(req,res,next,deleteBlogShema)
                    break;
                }
    }
}