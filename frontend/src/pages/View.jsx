import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const MainDisplay= () =>{
const [getValue,setGetValue] = useState([]);

const navigate = useNavigate()

useEffect(()=>{
    const getAllInfo=async ()=>{
        try {
            // API BURDA VIEW Yapiyoruz
            const res =await axios.get("http://localhost:3333/api/emp/employees")
            //axios.get: api deki url (view)
            // SET VALUE USE STATE'den geliyor , res.data ise = axios.get geliyor
            setGetValue(res.data)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    getAllInfo();
},[])
    const handleDelete = async (id)=>{
        try {
            await axios.delete("http://localhost:3333/api/emp/employees/"+id)
            window.location.reload()
        } catch (error) {
            console.log(error)
            
        }
    }

    const ByGetId = async (id)=>{
        try {
            await axios.get("http://localhost:3333/api/emp/employees/"+id)
            //Bunu ekledim ID URL GOSTERMEK ICIN
            navigate("/detailsView/"+id)
            
        } catch (error) {
            console.log(error)
            
        }
        console.log(id)
    }

  
    

    
    return(
        <div>
            <div className="row" style={{textAlign:"center",backgroundColor:"#198cb8",fontFamily:"Cochin"}}>
                <div className="mt-5 mb-4">
                    <div>
                   <h1>Employee VIEW</h1>
                   </div>
                </div>
            </div>
            
            <dis style={{}}>
                <div className="table-responsive">
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th >ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Update</th>
                                <th>Add</th>
                                <th>Delete</th>
                                <th>View</th>
                                {/* <button><Link to='update'>Update Exists Employee</Link></button> */}
                            </tr>
                            
                        </thead>
                        <tbody>
                        
                {getValue.map(x=><tr>
                    <td>{x._id}</td>
                    <td>{x.first_name}</td>
                    <td>{x.last_name}</td>
                    <td>{x.email_id}</td>
                    <td><button style={{opacity:0.8}} className="btn btn-danger"><Link to={`update/${x._id}`}>Update</Link></button></td>
                    <td><button className="btn btn-outline-success"><Link to='add'>Add</Link></button></td>
                    <td><button className="btn btn-warning" onClick={()=>handleDelete(x._id)}>Delete</button></td>
                    <td><button className="btn btn-info"><Link to={`detailsView/${x._id}`} onClick={()=>ByGetId(x._id)}>View</Link></button></td>
                    

                </tr>)}
           
                        </tbody>
                    </table>
                </div>
            </dis>
           
        </div>
        
        
    )

}

export default MainDisplay;


