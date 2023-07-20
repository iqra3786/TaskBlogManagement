const express=require('express')
const { asyncWrapper } = require('../helpers/helper')
const{blogliked}=require('../controller/likeController')


const router=express.Router()

router.post('/add-likes',asyncWrapper(blogliked)
)
module.exports=router