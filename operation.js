const employees=require("./employees");

const createemployee=async(title,details,salary)=>{
console.log("Employee created.");
let employee=new employees();
employee.title=title;
employee.details=details;
employee.salary=salary;
  await employee.save();
  return employee;
}
const getAll=async()=>{
    console.log("getall");
    let employeeList=await employees.find();
    return employeeList;

}
const deleteEmployee=async(id)=>{
    console.log("getall");
    let employeeList=await employees.findByIdAndDelete(id);
    return employeeList;
    }
    const updateemployee=async(id,title,details,salary)=>{
        
        let employee=await employees.findByIdAndUpdate(id);
        employee.title=title;
        employee.details=details;
        employee.salary=salary;
          await employee.save();
          return employee;
        }
module.exports.createemployee=createemployee;
module.exports.getAll=getAll;
module.exports.deleteEmployee=deleteEmployee;
module.exports.updateemployee=updateemployee;