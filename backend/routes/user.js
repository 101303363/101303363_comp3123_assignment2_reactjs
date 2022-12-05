const express =require("express")
const { find } = require("../models/user_db")
// const { model } = require("mongoose")
// Comes From Model of the user_db //
const userModel = require("../models/user_db")
const routes = express.Router()
 
routes.post("/user/signup",async(req,res)=>{
    // res.send("Welcome To SignUp Page")
    const new_user =new userModel(req.body)
    const {user_name,email,password}=req.body
    try {
       const save_user= await new_user.save()
        // we sending response
        res.status(201).json({message:"Succesfully Sign up"}).send(save_user)
    } catch (error) {
        res.status(500).send({message:"Ups something wrong please try again"})
    }
})

routes.post("/user/login",async(req,res)=>{
    
    const {user_name ,password}=req.body
    const find_user = await userModel.findOne({})
    try {
       
        if(user_name===find_user.user_name){
                res.status(200).json({message:"Succesfully login in"})
        }
    } catch (error) {
        res.status(500).send({message: "Please Check password or username"},error)
    
    }
        
        
   
})



module.exports=routes

