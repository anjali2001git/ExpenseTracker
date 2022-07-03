const dotenv=require('dotenv');
const express=require('express');
const { errorhandler, notFound } = require('./middleware/errorMiddleware');

const expenseRoute = require('./router/expense/expenseRoutes');
const incomeRoute = require('./router/income/incomeRoutes');
const userRoute = require('./router/users/userRoutes');

const app=express();
app.use(express.json());  //middleware to pass data to server


 
dotenv.config({path:'./config.env'});
require('./db/conn');



//we link the router files to make route easier

//users Route 
app.use("/api/users",userRoute);  //app.use needs a middleware function
//income routes
app.use("/api/income",incomeRoute);
//expense Route
app.use("/api/expense",expenseRoute);
//error routes
 app.use(notFound);
 app.use(errorhandler);
 


const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running at port no.${PORT} `);
})