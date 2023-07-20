const express=require('express')
const { asyncWrapper } = require('../helpers/helper')
const { userRegistered, userLogin } = require('../controller/userController')
const router=express.Router()

router.post('/user-register',asyncWrapper(userRegistered))
router.post('/user-login',asyncWrapper(userLogin))

module.exports=router