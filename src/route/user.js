const express=require('express')
const { asyncWrapper } = require('../helpers/helper')
const { userRegistered, userLogin, sample } = require('../controller/userController')
const router=express.Router()
const {validate}=require('../middleware/userMiddleware')
router.post('/user-register',validate,asyncWrapper(userRegistered))
router.post('/user-login',validate,asyncWrapper(userLogin))
router.post('/sign-in-with-google',validate,asyncWrapper(sample))

module.exports=router