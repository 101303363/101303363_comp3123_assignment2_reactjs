import { Button } from "react-bootstrap";

export default function OzDet(props){
    return(
        <>
                                    
                                     <td>{props.emp.first_name}</td>
                                    <td>{[props.emp.last_name]}</td>
                                    <td>{props.emp.email_id}</td>
                                    <td style={{mindWidth:190}}>

                                        
                                       
                    
            </td>

        </>
    )
}