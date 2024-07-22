import express from 'express'
import {registerController, loginController, testController, forgotPasswordController, updateProfileController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
//router object
const router = express.Router()

//routing
//Register ||method post
router.post('/register',registerController)

//login || post
router.post('/login',loginController)

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test rotes
router.get('/test',requireSignIn,isAdmin, testController)

//protected route
router.get('/user-auth', requireSignIn, (req,res)=>{
    res.status(200).send({ok : true})
})

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
  });

  //update profile
router.put("/profile", requireSignIn, updateProfileController);
  


export default router