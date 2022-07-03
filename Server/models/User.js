const mongoose=require('mongoose');
const bcrypt=require("bcryptjs");
//Schema
const userSchema=mongoose.Schema({
    firstname:{
        required:true,
        type:String,
    },
    lastname:{
        required:true,
        type:String,
    },
    email:{
        required:true,
        type:String,
    },
     password:{
        required:true,
        type:String,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    
},{ 
    timestamp:true,
});


//Hash Password
userSchema.pre('save', async function(next){
    // if(this.isModified('password')){
    //   next();   //if already modified then go to next middleware 
    //             //other wise hash it.
    // }
    const salt=await bcrypt.genSalt(10);
     this.password= await bcrypt.hash(this.password,salt);
     
     
});

//verify password
userSchema.methods.isPasswordMatch=async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}

//compile schema into model
const User=mongoose.model("User",userSchema);
module.exports=User;