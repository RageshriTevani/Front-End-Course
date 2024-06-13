import React from "react";
import { MDBRow, MDBBtn, MDBContainer, } from "mdb-react-ui-kit";
function ContainerApp()
{
    return(
        <MDBContainer fluid style={{backgroundColor:"darkblue", color:"white", padding:"15px" }}>
            <MDBRow>
                <div className="col-md-8" style={{display:"inline-block"}}>
                    <h1 className="ps-4 pt-3"> 
                    <b className="bi bi-grid fs-2 text-white"></b> Task Manager</h1>
                </div>

                <div className="col-md-4" style={{display:"inline-block", marginLeft:"60%"}}>

                    <MDBBtn color="info" style={{padding:"10px", width:"120px" }}>
                        <b className="bi bi-menu-button-wide-fill" style={{fontSize:"22px"}}> Task</b>
                    </MDBBtn>

                    <MDBBtn color="info"style={{padding:"10px",marginLeft:"10px", width:"200px" }}>
                        <b className="bi bi-menu-button-wide-fill" style={{fontSize:"22px"}}> Deleted Task</b>
                    </MDBBtn>
                </div>
            </MDBRow>
        </MDBContainer>
    )
}
export default ContainerApp