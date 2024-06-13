import React from "react";
import { Container } from "react-bootstrap";
function ContainerApp()
{
    return(
        <>
        {/* <Container className="bg-info p-5">

            <h1 className="text-center p-4 text-danger">Hey</h1>

        </Container>

        <Container fluid className="bg-primary p-5 mt-4">

            <h1 className="text-center p-4 text-white">How are you all</h1>
            
        </Container> */}


        <Container className="p-5 mt-5 shadow w-50 mx-auto">
            <button type="button" className="btn btn-sm btn-primary text-white" data-bs-toggle="modal" data-bs-target="#login">Login here</button>
        </Container>

        <div className="modal fade" id="login" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content p-5 mt-5 bg-dark border-none border-radius">
                    <input className="p-1 mt-2 w-50" type="text" placeholder="Enter Your FullName Here:"></input>
                    <input className="p-1 mt-2 w-50" type="date" placeholder="Your DOB:"></input>
                    <input className="p-1 mt-2 w-50" type="email" placeholder="Enter Your Email Here:"></input>
                    <input className="p-1 mt-2 w-50" type="password" placeholder="Enter Your Password Here:"></input>
                    <button type="button" className="btn w-100 p-2 mt-5 btn-sm btn-success text-white">Login</button>
                    <button type="button" className="btn w-100 p-2 mt-2 btn-sm btn-secondary text-white d-inline">Register here</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default ContainerApp