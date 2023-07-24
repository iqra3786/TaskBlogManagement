
const userServices = require('../services/userServices')
const helper = require('../helpers/helper')



exports.userRegistered = async (req, res) => {

    const {
        firstName,
        lastName,
        title,
        email,
        password
    } = req.body
    const data = await userServices.register(
        firstName,
        lastName,
        title,
        email,
        password)
   if(data.status==false){
    return helper.responseError(req,res,data.message,null)
   }
    return helper.responseOk(req, res, data.message,data.data)


}

exports.userLogin = async (req, res,) => {
    const { email, password } = req.body
    const data = await userServices.login(email, password)
    if(data.status==false){
       return helper.responseError(req,res, data.message,data.token)
    }
   return helper.responseOk(req, res, data.message,data)
}

exports.sample=async(req,res)=>{
    const{googleId}=req.body
    const data=await userServices.loginWithGoogle(googleId)
    return helper.responseOk(req,res, "user logged in successfully",data)
}
