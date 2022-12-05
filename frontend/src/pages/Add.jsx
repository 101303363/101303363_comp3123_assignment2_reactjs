import axios from "axios";
import React from "react";
import background from "./backpp1.jpg"



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () =>{
    const[newEmployee,setNewEmployee] =useState({
        first_name: "",
        last_name : "",
        email_id: ""
    });
    const navigate = useNavigate()
    
    const handleChange=(e)=>{
        setNewEmployee(prev=>({...prev,[e.target.name]:e.target.value}));
    };

    const handleClick = async e =>{
        e.preventDefault()
        try {
            axios.post("http://localhost:3333/api/emp/employee", newEmployee)
            navigate("/add")
            navigate("/")
            
            

        } catch (error) {
            console.log(error)
            
        }
    }    

    console.log(newEmployee)
    return(
        // <div className="form">
        //     <h1>Add Employee</h1>
        //     <input type="" placeholder="first_name"  onChange={handleChange} name="first_name"/>
        //     <input type="" placeholder="last_name"  onChange={handleChange} name="last_name"/>
        //     <input type="" placeholder="email_id"  onChange={handleChange} name="email_id"/>
        //     <button onClick={handleClick}>Add</button>

        // </div>
           
        <div style={{backgroundColor:"#cdeeed",height:500,width:"auto"}}>
        <div  className="w3-container w3-blue" style={{marginLeft:540,marginTop:100}}>
            <form style={{
                        padding:"15px", maxWidth:"400px",alignContent:"center"}}>
                            <h1 style={{marginBottom:"20px",marginTop:"00px",paddingLeft:"60px",fontFamily:"Cochin"}}>Add Employee</h1>
            {/* <input type="" placeholder="first_name"  onChange={handleChange} name="first_name"/>
            <input type="" placeholder="last_name"  onChange={handleChange} name="last_name"/>
            <input type="" placeholder="email_id"  onChange={handleChange} name="email_id"/>
            <button onClick={handleClick}>Add</button> */}

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Firstname</span>
            <input type="text" class="form-control" placeholder="first name" onChange={handleChange} name="first_name" aria-label="First Name" aria-describedby="basic-addon1"/>
            </div>  

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Lastname</span>
            <input type="text" class="form-control" placeholder="last name"  onChange={handleChange} name="last_name" aria-label="First Name" aria-describedby="basic-addon1"/>
            </div> 

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Email ID</span>
            <input type="text" class="form-control" placeholder="email id" onChange={handleChange} name="email_id" aria-label="First Name" aria-describedby="basic-addon1"/>
            </div>

            <div>
            <button className="btn btn-success" style={{padding:"10px",paddingLeft:"150px",paddingRight:"200px",borderRadius:"30px",marginLeft:"1px"}} onClick={handleClick}>ADD </button>
            </div>
            <br></br>
            <div>
            <Link to={"/"} style={{textAlign:"center"}}>
            <button className="btn btn-success text-center" style={{padding:"10px",paddingLeft:"130px",paddingRight:"200px",borderRadius:"30px",marginLeft:"1px"}} onClick={handleClick}>Cancel </button>
            </Link>
            </div>        
            </form>   


                
        </div>
        </div>
    )
}

export default Add