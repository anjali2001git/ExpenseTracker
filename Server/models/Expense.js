 const mongoose=require('mongoose');
 const mongoosePaginate=require('mongoose-paginate-v2'); 
//Schema
const expenseSchema=mongoose.Schema({
    title:{
        required:[true,"Title is required"],
        type:String,
    },
    description:{
        required:[true,"Description is required"],
        type:String,
    },
    type:{
        type:String,
        default:"expense"
    },
     amount:{
        required:[true,"Amount is required"],
        type:String,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId, //must be mongodb id
        ref:"User",
        required:[true,"User id is required"]
    } 
},{ 
    timestamp:true,
    toJSON:{
        virtuals:true,
    },
    toObject:{
        virtuals:true,
    }, 
    
});



//pagination //plugin is used to add new functionality to db
expenseSchema.plugin(mongoosePaginate);

const Expense=mongoose.model("Expense",expenseSchema);
module.exports=Expense;
