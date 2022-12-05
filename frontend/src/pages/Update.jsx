import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const navigate = useNavigate()

    const [employee, setEmployee] = useState({});
    const {id} = useParams();
   

    useEffect(() => {
        getEmployeeDataByID();
        // eslint-disable-next-line
    }, []);

    const getEmployeeDataByID = async () => {
        const result = await axios.get(`http://localhost:3333/api/emp/employees/${id}`);
        setEmployee(result.data);

    }

    const handleChange = (e) => {
        // setEmployee(prev=>({...prev,[e.target.name]:e.target.value}));
        const { name, value } = e.target;
        setEmployee({ ...employee, [name]: value })
    };
    const handleClick =(e) => {
        e.preventDefault()
        const newEmployee={
            first_name:employee.first_name,
            last_name:employee.last_name,
            email_id:employee.email_id
        }
        
        console.log("ddd")
        axios.put(`http://localhost:3333/api/emp/employees/${id}`,newEmployee).then(res => {
            console.log(res.data)
            navigate("/")
        })
        
       
    }
    return (
        <div className="form">
            
           
            <div>
                <div style={{textAlign:"center",fontFamily:"Cochin",backgroundColor:"#ebbd79"}}>
                <h1>Employee Update</h1>
                </div>
             <div >  
            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Firstname</span>
            <input type="text" class="form-control" placeholder={employee.first_name} onChange={e =>handleChange(e)} name="first_name" aria-label="First Name" aria-describedby="basic-addon1"/>
            </div>  

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Lastname</span>
            <input type="text" class="form-control" placeholder={employee.last_name} onChange={e=>handleChange(e)} name="last_name" aria-label="First Name" aria-describedby="basic-addon1"/>
            </div> 

            <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Email ID</span>
            <input type="text" class="form-control" placeholder={employee.email_id} onChange={e=>handleChange(e)} name="email_id" aria-label="First Name" aria-describedby="basic-addon1"/>
            </div>

            <div>
            <button className="btn btn-success" style={{padding:"10px",paddingLeft:"150px",paddingRight:"200px",borderRadius:"30px",marginLeft:"1px"}} onClick={e =>handleClick(e)}>Update </button>
            </div>
            <br></br>
            <div>
            <Link to={"/"} style={{textAlign:"center"}}>
            <button className="btn btn-success text-center" style={{padding:"10px",paddingLeft:"130px",paddingRight:"200px",borderRadius:"30px",marginLeft:"1px"}} onClick={handleClick}>Cancel </button>
            </Link>
            </div>  
            </div>      

        </div>
        </div>
    )
}

export default Update