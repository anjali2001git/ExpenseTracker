const jwt=require("jsonwebtoken");


const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_kEY,{expiresIn:"30d"});
};
module.exports=generateToken;