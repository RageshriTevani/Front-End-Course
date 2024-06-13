import React from "react";
import { MDBBtn, MDBContainer} from "mdb-react-ui-kit";
function Container()
{
    return(
        <MDBContainer>
            <h1 style={{marginTop:"10%", textAlign:"center"}}>Add New Task</h1>

            <form style={{marginTop:"3%", textAlign:"center"}}>

                <input style={{padding:"10px", width:"380px", backgroundColor:"lightgray"}}  type="text" placeholder="Add New task*" /> <br/>

                <input style={{padding:"10px",marginTop:"15px", marginBottom:"25px", width:"380px", backgroundColor:"lightgray"}} type="date" placeholder="dd/mm/yy" /> <br/>

                <MDBBtn type="btn" style={{padding:"10px", backgroundColor:"orange"}} >ADD TASK</MDBBtn>
                <MDBBtn type="btn" style={{padding:"10px",marginLeft:"15px", backgroundColor:"orange"}} >RESET TASK</MDBBtn>
            </form>
        </MDBContainer>
    )
}
export default Container