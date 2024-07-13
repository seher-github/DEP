const express = require('express')
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogController } = require('../controllers/blogController')

//router object
const router = express.Router()

//routes
//Get || all blogs
router.get('/all-blog',getAllBlogsController)

//POST || create blog
router.post('/create-blog', createBlogController)

//PUT || update blog
router.put('/update-blog/:id', updateBlogController)

//Get || single blog details
router.get('/get-blog/:id', getBlogByIdController)

//Delete
router.delete('/delete-blog/:id', deleteBlogController)

//get || user blog
router.get('/user-blog/:id', userBlogController)

module.exports = router