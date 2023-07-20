const express=require('express')
const { asyncWrapper } = require('../helpers/helper')
const { blogCreate ,getBlogs,updateBlogs, deleteBlogs} = require('../controller/blogController')
const {authentication}=require('../middleware/userAuthMiddleware')

const router=express.Router()

router.post('/create-blog',authentication,asyncWrapper(blogCreate))
router.get('/get-blog',asyncWrapper(getBlogs))
router.put('/update-blog',asyncWrapper(updateBlogs))
router.delete('/delete-blog',asyncWrapper(deleteBlogs))
module.exports=router