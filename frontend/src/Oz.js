import axios from "axios";
import { Component } from "react";
import { Button,Table } from "react-bootstrap";
import OzDet from "./OzDet";
import API_DATA from "./API_DATA";

export default class Oz extends Component{

    constructor(props) {
        super(props);
        this.API_DATA = new API_DATA();
        this.state = {
            emp: []
        }
        }
    componentDidMount (){
        this.API_DATA.getEmployees().then((response) => {
            this.setState({emp: response.data});
            console.log(response.data);
        });
    }
    render(){
        return(
            <div>
            
            <div className="row">
                <div className="mt-5 mb-4">
                <Button variant="primary"><i className="fa fa-plu">
                    Add new Employee
                    </i></Button>

                </div>

            </div>


            <div className="=row">
                <div className="table-responsive">
                <Table>

                                        <thead className="">

                                            <tr>

                                                <th style={{textAlign:"center"}} className="big-info" scope="col">#Employee ID</th>

                                                <th style={{textAlign:"center"}} scope="col">First Name</th>

                                                <th style={{textAlign:"center"}} scope="col">Last Name</th>

                                                <th style={{textAlign:"center"}} scope="col">Email Id</th>

                                                <th style={{textAlign:"center"}} scope="col">Actions</th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                    {

                                            this.state.emp.map((emp) => (

                                            <tr key={emp.id} style={{textAlign:"center"}}>

                                                

                                                <OzDet emp={emp} />




                                                   

                                                    


                                                   

                                                   

                                                        


                                             

                                            </tr>

                                        ))

                                    } 

                                        </tbody>

                                    </Table>
                    
                </div>
            </div>
        </div>
    )
        
    }

}

{/* <table className="table table-striped table-hover table-bordered">

<thead>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email ID</th>
    </tr>
</thead>
<tbody>
    <tr> 
        {
            this.state.oz.map((emp)=>{
                <tr key={emp._id}>
                <OzDet emp={emp}></OzDet>
                </tr>
            })
        }
        </tr>

       
    
       

</tbody>
</table> */}
