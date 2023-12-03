const express =require("express");
const mongoose=require("mongoose");
const {createemployee,getAll,deleteEmployee,updateemployee}=require("./operation");
const app =express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/EmployeeList")
.then(async ()=>{
    console.log('Database Created.');

    // create 
    // let employee=await createemployee("student","Haleem",50000);
    // console.log(employee);

    // update 
    // let employee=await getAll();
    // console.log(employee);
     
    // Delete
    //  let deleteItem =await deleteEmployee("656c84fe6d76ddfe1f0aa5e1");
    //  console.log(deleteItem);

    // Update
    let updatedData= await updateemployee("656c854507218b025cab0105","Haleem","Charming and Alluring",100);
    console.log(updatedData);

}).catch((error)=>{
    console.log(could not connect ${error});
})
console.log("kasnknslkd");
app.listen(3000);