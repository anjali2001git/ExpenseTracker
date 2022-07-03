const express=require('express');
const { createExpCtrl, fetchAllExpCtrl, fetchExpDetailsCtrl, deleteExpCtrl, updateExpCtrl } = require('../../controllers/expense/expenseCtrl');
const authMiddleware = require('../../middleware/authMiddleware');

const expenseRoute = express.Router();


//routes
expenseRoute.post("/",authMiddleware,createExpCtrl);
expenseRoute.get("/",authMiddleware,fetchAllExpCtrl);
expenseRoute.get("/:id",authMiddleware,fetchExpDetailsCtrl);
expenseRoute.delete("/:id",authMiddleware,deleteExpCtrl);
expenseRoute.put("/:id",authMiddleware,updateExpCtrl);


module.exports=expenseRoute;