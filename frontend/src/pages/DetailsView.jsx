import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";


// const DetailsView = () =>{
//     const {id} =useParams()
//     const[newEmployee,setNewEmployee] =useState({});
    
    
    
    
//     const viewEmployeeById= async()=>{
//         const result =await axios.get("http://localhost:3333/api/emp/employees/"+{id})
//         setNewEmployee(result.data)           

//     }
function DetailsView(){
    const [employee, setEmployee] = useState({});
    const {id} = useParams();

    useEffect(() => {
    getEmployeeDataByID();
    // eslint-disable-next-line
}, []);

const getEmployeeDataByID = async () => {
const result = await axios.get("http://localhost:3333/api/emp/employees/"+id);

setEmployee(result.data);
}
return(
    <div style={{backgroundColor:"#f7d994"}}>
        <div style={{marginLeft:720,backgroundColor:"#f7d994",fontFamily: "Cochin"}}>
        <h1>Details Page</h1>
        </div>
        <div style={{}}>
            <div style={{marginLeft:720,fontFamily: "Cochin"}}>
        <h1 className="table-primary">Employee ID : {id}</h1>
        </div>
        <table  style={{marginRight:400}}class="table table-sm table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th  className="table-warning" scope="col">First Name</th>
      <th  className="bg-info" scope="col">Last Name</th>
      <th  className="bg-warning" scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">1</th>
      <td>{ employee.first_name}</td>
      <td>{employee.last_name}</td>
      <td>{employee.email_id}</td>
    </tr>
  </tbody>
</table>   

        </div>

       <Link to={"/"} style={{textAlign:"center"}}>
            <button className="btn btn-success text-center" style={{padding:10,paddingLeft:130,paddingRight:130,borderRadius:30,marginLeft:720,marginBottom:600,marginTop:100,marginRight:100,alignContent:"center"}} >Back To Home PAge </button>
            </Link>

    </div>
)

}




export default DetailsView