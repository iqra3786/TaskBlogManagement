const { responseOk } = require('../helpers/helper')
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
    console.log(data);
    return helper.responseOk(req, res, "user registered successfully", data)


}

exports.userLogin = async (req, res,) => {
    const { email, password } = req.body
    const data = await userServices.login(email, password)
    if(data.status==false){
       return helper.responseError(req,res, data.message,data.token)
    }
   return helper.responseOk(req, res, data.message,data)
}

