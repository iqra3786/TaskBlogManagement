const express=require('express')
const { asyncWrapper } = require('../helpers/helper')
const { adminLogin, adminRegistered, getBlogsByAdmin, updateBlogsByAdmin, deleteBlogsByAdmin } = require('../controller/adminController')

const router=express.Router()

router.post('/admin-register',asyncWrapper(adminRegistered))
router.post('/admin-login',asyncWrapper(adminLogin))
//router.post('/create-blog',asyncWrapper(blogCreate))
router.get('/admin-get-blog',asyncWrapper(getBlogsByAdmin))
router.put('/admin-update-blog',asyncWrapper(updateBlogsByAdmin))
router.delete('/admin-delete-blog',asyncWrapper(deleteBlogsByAdmin))

module.exports=router