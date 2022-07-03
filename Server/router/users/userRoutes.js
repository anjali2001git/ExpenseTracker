const express=require('express');
const { registerUser,fetchUsersCtrl,loginUserCtrl } = require('../../controllers/users/usersCtrl');
const userRoute = express.Router();



//routes

userRoute.post('/register',registerUser);
userRoute.get('/',fetchUsersCtrl)
userRoute.post('/login',loginUserCtrl);
module.exports=userRoute;