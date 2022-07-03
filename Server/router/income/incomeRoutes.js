const express=require('express');
const { createIncCtrl, 
        fetchAllIncCtrl,
        fetchIncDetailsCtrl,
        updateIncCtrl,
        deleteIncCtrl
     } = require('../../controllers/income/incomeCtrl');

     const authMiddleware = require('../../middleware/authMiddleware');

     const incomeRoute = express.Router();



//routes
incomeRoute.post("/",authMiddleware,createIncCtrl);
incomeRoute.get("/",authMiddleware, fetchAllIncCtrl);
incomeRoute.get("/:id",authMiddleware,fetchIncDetailsCtrl);
incomeRoute.delete("/:id",authMiddleware,deleteIncCtrl);
incomeRoute.put("/:id",authMiddleware,updateIncCtrl);


module.exports=incomeRoute;