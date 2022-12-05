const express =require("express");
const routes = express.Router();
//const { find } = require("../models/employee_db")

const emplooyeModel = require("../models/employee_db");
 const { json } = require("express");

// const bodyParser = require('body-parser');
// routes.use(bodyParser.json());
// routes.use(bodyParser.urlencoded({extended:true}))

   

 // Display all employee Information // 
routes.get("/emp/employees",async(req,res)=>{
    try {
        const get_all_employee =await emplooyeModel.find()
        // res.status(201).json({message:"we got some records"}).send(get_all_employee)
         res.status(201).json(get_all_employee)


    } catch (error) {
        res.status(500).send({message: "No Employee recorded", error})

    }
})






routes.post('/emp/employee/',async(req,res)=>{
    const create_emp = new emplooyeModel({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email_id: req.body.email_id
    })
    try {
        const new_emp = await create_emp.save()
        res.status(201).json(new_emp)
        
    } catch (error) {
        res.status(400).json(error)
    }
})

// Get by id //
routes.get("/emp/employees/:eid",async(req,res)=>{
    const id =req.params.eid ;
    const get_id_employee =await emplooyeModel.findById(req.params.eid)
    try {
        res.status(200).json(get_id_employee)
    } catch (error) {
        res.status(500).send({message:"Update  issue please try again"})

    }

    // res.send("Welcome Employees - GET - eid")
})

// Update
// routes.put("/emp/employees/:eid",async(req,res)=>{
//     const id =req.params.eid ;
    
//     const get_id_employee =await emplooyeModel.findById(id)
//         first_name: req.body.first_name
//         last_name: req.body.last_name
//         email_id: req.body.email_id
    
   
//     try {
       
//         const save_employee= await get_id_employee.save()
//         res.status(200).json(save_employee)

//     } catch (error) {
//         res.status(500).send({message:"inserting issue please try again"})

//     }

// })
routes.put("/emp/employees/:eid",async(req,res)=>{
    const id =req.params.eid ;
    
    const get_id_employee =await emplooyeModel.findById(req.params.eid)
    get_id_employee.first_name =req.body.first_name
    get_id_employee.last_name =req.body.last_name
    get_id_employee.email_id =req.body.email_id
 
    
    
   
    try {
       
        const save_employee= await get_id_employee.save()
        res.status(200).json(save_employee)

    } catch (error) {
        res.status(500).send({message:"inserting issue please try again"})

    }

})


// Delete //

routes.delete("/emp/employees/:eid",async(req,res)=>{
    const id =req.params.eid ;
    const get_id_employee =await emplooyeModel.findByIdAndDelete(id)
    try {
        res.status(200).json(get_id_employee)
    } catch (error) {
        res.status(500).send({message:"Update  issue please try again"})

    
}})


module.exports=routes