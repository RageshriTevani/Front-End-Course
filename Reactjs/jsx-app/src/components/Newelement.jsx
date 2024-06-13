import React from "react";
import img from '../components/Blog-1-Cover--2-.png'
function Newelement()
{
    return(
        <>
        <h1>React Fundamentals</h1>
        <P>JSX<br></br>Components<br></br>And Props</P>
        <img src={img} alt="img" width="50px" height="50px" style={{borderRadius:"50%"}} ></img>
        </>
    )
}
export default Newelement