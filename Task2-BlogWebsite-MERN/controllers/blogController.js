const  mongoose  = require('mongoose')
const blogModel = require('../models/blogModel')
const userModel = require('../models/userModel')

//get all blogs
exports .getAllBlogsController= async(req,res)=>{
    try{
        const blogs = await blogModel.find({})
            if(!blogs){
                return res.status(200).send({
                    success:false,
                    message:'No blogs found'
                })
            }
            return res.status(200).send({
                success:true,
                BlogCount : blogs.length,
                message:'All blogs lists',
                blogs,
            })

        
    }
    catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:'Error while getting blogs',
            error
        })
    }
}

//create blog
exports.createBlogController= async(req,res)=>{
    try{
        const {title,description,image, user} = req.body 
        if(!title || !description || !image ||!user){
            return res.status(400).send({
                success:false,
                message:'please provide all fields',

            })

        }
        const exisitingUser = await userModel.findById(user)
        //validation
        if(!exisitingUser){
            return res.status(404).send({
                success:false,
                message:"unable to find user",
                
            })

        }
        const newBlog = new blogModel({title,description,image,user})
        const session = await mongoose.startSession()
        session.startTransaction()
        await newBlog.save({session})
        exisitingUser.blogs.push(newBlog)
        await exisitingUser.save({session})
        await session.commitTransaction()
        await  newBlog.save()
        return res.status(201).send({
            success:true,
            message:"blog created",
            newBlog
        })
    }
    catch(error){
        console.log(error)
        return res.status(400).send({
            success:false,
            message:'Error while creating blogs',
            error
        })
    }
}

//update blog
exports.updateBlogController=async(req,res)=>{
    try{
        const {id} = req.params 
        const {title,description,image} = req.body 
        const blog = await blogModel.findByIdAndUpdate(id,{...req.body},{new:true})
        return res.status(200).send({
            success:true,
            message:"blog updated",
            blog
        })
    
    }
    catch(error){
    console.log(error)
        return res.status(400).send({
            success:false,
            message:'Error while updating blogs',
            error
        })
    }
}

//single blog detail
exports.getBlogByIdController=async(req,res)=>{
    try{
        const {id}= req.params 
        const blog = await blogModel.findById(id)
        if(!blog){
            return res.status(404).send({
                success:false,
                message:'blog not found',

            })

        }
        return res.status(200).send({
            success:true,
            message:'fetch single blog',
            blog
        })

    }
    catch(error){
        console.log(error)
            return res.status(400).send({
                success:false,
                message:'Error single blogs',
                error
            })
        }
}

//delete blog 
exports.deleteBlogController = async (req, res) => {
    try {
        // Using findByIdAndDelete instead of findOneAndDelete to find by ID and delete the document
        const blog = await blogModel.findByIdAndDelete(req.params.id).populate('user');
        
        if (!blog) {
            return res.status(404).send({
                success: false,
                message: 'Blog not found'
            });
        }

        // Check if blog.user exists before accessing its properties
        if (blog.user) {
            await blog.user.blogs.pull(blog._id); // Assuming blog.user.blogs is an array of ObjectIds
            await blog.user.save();
        }

        return res.status(200).send({
            success: true,
            message: 'Blog deleted successfully!'
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            success: false,
            message: 'Error while deleting blog',
            error
        });
    }
};


//get user blog
exports.userBlogController = async(req,res)=>{
    try{
        const userBlog = await userModel.findById(req.params.id).populate("blogs")
        if(!userBlog){
            return res.status(404).send({
                success:false,
                message:"blogs not found"
            })
        }
        return res.status(200).send({
            success:true,
            message:'user blogs',
            userBlog
        })
    }
    catch(error){
        console.log(error)
            return res.status(400).send({
                success:false,
                message:'Error in user blogs',
                error
            })
        }
}
