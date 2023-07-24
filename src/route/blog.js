const express=require('express')
const { asyncWrapper } = require('../helpers/helper')
const { blogCreate ,getBlogs,updateBlogs, deleteBlogs} = require('../controller/blogController')
const {authentication}=require('../middleware/userAuthMiddleware')
const{upload}=require('../../src/middleware/imageUpload')
const {validate}=require('../middleware/userMiddleware')

const router=express.Router()

router.post('/create-blog',authentication,upload.single('image'),validate,asyncWrapper(blogCreate))
router.get('/get-blog',asyncWrapper(getBlogs))
router.put('/update-blog',authentication,validate,asyncWrapper(updateBlogs))
router.delete('/delete-blog',authentication,validate,asyncWrapper(deleteBlogs))
module.exports=router