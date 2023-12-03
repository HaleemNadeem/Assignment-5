const mongoose=require("mongoose");
const Schema = mongoose.Schema({
   title: String,
   details : String,
   salary:Number
});
const employeeModel=mongoose.model("employeeModel",Schema);
module.exports=employeeModel;