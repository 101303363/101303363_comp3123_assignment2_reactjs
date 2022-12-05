const mongoose =require("mongoose")

// Create Object -Scnema and row //
const employee_db_schema = new mongoose.Schema({
    
    first_name:{
        type:String,
        require:true,
        maxLength:100
    },
    
    last_name:{
        type:String,
        require:true,
        maxLength:50
    },
    email_id:{
        type:String,
        require:true,
        unique:true,
        maxLength:50
    
    }
    

})

// The user comes when we created database "//
const employee_schema = mongoose.model("employee",employee_db_schema)
module.exports=employee_schema