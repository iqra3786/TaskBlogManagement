const jwt = require('jsonwebtoken');
const { verifyJWTToken } = require('../helpers/helper');
const userModel = require('../models/userModel');


exports.authentication = async function (req, res, next) {
    let token = req.headers["authorization"];
    console.log(token)
    try {
        if (!token) {
             res.status(401).send({ status: false, message: "token must be present in headers", data: null }
            )}
            token=token.replace("Bearer ", "")
            
       
            const decodeToken =jwt.verify(token,"SECRET_KEY", function(err,tokenVerify){
                if(err){
                    
                    return res.status(401).send({status:false,message:"Token is invalid or expired"})
                }
                else {
    
                    req.token = tokenVerify
                    console.log(req.token)
                    // req.token.id = decodeToken
                    //const user = await userModel.findById(req.token.id)
                    // if (user) {
                    //     if (user.token == token) {
                            next()
                    //     }
                    //     else {
                    //         return helper.responseError(req, res, "token has expired or invalid", null, 400)
                    //     }
                    // }
                    // else {
                    //     return res.status(401).send({ status: false, message: "your account has been logged into another device,please login again", data: null }
                    //     )
                    // }
                }
            })
        }

    
    catch(error){
return res.status(500).send({status:false,message:error.message})
    }
    }
