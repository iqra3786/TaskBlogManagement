const helper = require('../helpers/helper')
const adminServices=require('../services/adminServices')




exports.adminRegistered = async (req, res) => {

    const {
        firstName,
        lastName,
        title,
        email,
        password
    } = req.body
    const data = await adminServices.adminRegister(
        firstName,
        lastName,
        title,
        email,
        password)
    console.log(data);
    return helper.responseOk(req, res, "admin registered successfully", data)


}

exports.adminLogin = async (req, res,) => {
    const { email, password } = req.body
    const data = await adminServices.adminLogin(email, password)
    if(data.status==false){
       return helper.responseError(req,res, data.message,data.token)
    }
   return helper.responseOk(req, res, data.message,data)
}

// exports.blogCreate=async(req,res)=>{
//     const {title,image,userId,tags,category,subcategory,isPublished,isDeleted}=req.body
//     console.log()
    
//     const data=await adminServices.blogsCreate(title,image,userId,tags,category,subcategory,isPublished,isDeleted)
//     return helper.responseOk(req,res, "blog create successfully.",data)
//     }
    
    exports.getBlogsByAdmin=async(req,res)=>{
        const{userId}=req.body
        const blogs=await adminServices.adminGetBlogs(userId)
        return helper.responseOk(req,res,"get blogs successfully.",blogs)
    }
    
    exports.updateBlogsByAdmin=async(req,res)=>{
        const {blogId,title,image,isPublished,tags,subcategory}=req.body
        const update=await adminServices.adminUpdate(blogId,title,image,isPublished,tags,subcategory)
        return helper.responseOk(req,res,update.message,update)
    }
    exports.deleteBlogsByAdmin=async(req,res)=>{
    
        const {blogId}=req.body
        const blog=await adminServices.adminDelete(blogId)
        return helper.responseOk(req,res,blog.message,blog)
    
    }
