const mongoose =require("mongoose")

// Create Object -Scnema and row //
const users_db_schema = new mongoose.Schema({
    
    username:{
        type:String,
        require:true,
        maxLength:100},

    email:{type: String,
        unique:true ,
    maxLength:50},

    password:{ 
        type:String,
        require:true,
        maxLength:50
    }


})

// The user comes when we created database "//
const user_schema = mongoose.model("users",users_db_schema)
module.exports=user_schema



/* 

{
"username": "ragnaroq",
"email": "honourkorkmaz@gmail.com",
"password":"kayseri3838"

}

*/