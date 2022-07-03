 const e = require("express");
const User = require("../../models/User");
const expressAsyncHandler=require('express-async-handler');
const generateToken = require("../../middleware/generateToken");

//Register
const registerUser=expressAsyncHandler(async(req,res)=>{
    
    const {email,firstname,lastname,password}=req?.body;
    
    //check if user exist
   const userExist=await User.findOne({email});
   if(userExist) throw new Error('User already Exist')
    try{
        const user=await User.create({email,firstname,lastname,password});
         res.status(200).json(user);

    }catch(err){
       res.json(err);
    }
});


//fetch all users
const fetchUsersCtrl=expressAsyncHandler(
    async(req,res)=>{
        try{
          const users=await User.find ({});
          res.json(users);
        }catch(error){
             res.json(error);
        }
});


//login

const loginUserCtrl=expressAsyncHandler(
    async(req,res)=>{
        const {email,password}=req?.body;
        //find the user in db
        const userFound=await User.findOne({email});
        //check if user password match
        if(userFound && (await userFound?.isPasswordMatch(password))){
            res.json({
             _id:userFound?._id,
             firstname:userFound?.firstname,
             lastname:userFound?.lastname,
             email:userFound?.email,
             isAdmin:userFound?.isAdmin,
             token:generateToken(userFound?._id)
            });
        }else{
          res.status(401);
          throw new Error("Invalid login credentials");
        }
                
    }
)
module.exports={registerUser,fetchUsersCtrl,loginUserCtrl};