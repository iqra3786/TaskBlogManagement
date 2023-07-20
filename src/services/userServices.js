const { userRegistered } = require('../controller/userController')
const userModel = require('../models/userModel')
const jwt=require('jsonwebtoken')
exports.register = async (
    firstName,
    lastName,
    title,
    email,
    password) => {
    const createData = await userModel.create({
        firstName,
        lastName,
        title,
        email,
        password
    })

    return createData
}

exports.login = async (email, password) => {
    const userLogin = await userModel.findOne({ email: email, password: password })
    if (userLogin) {
        const token=jwt.sign({userId:userLogin._id.toString()},"SECRET_KEY")
        const updateBlog=await userModel.findOneAndUpdate({_id:userLogin._id},{$set:{token:token}},{new:true})
        return { status: true, message: "user logged in successfully" ,token}
    }
    else {
        return { status: false, message: "user not found" }
    }
}