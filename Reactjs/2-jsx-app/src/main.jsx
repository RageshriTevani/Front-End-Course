import React from "react";
import ReactDOM from 'react-dom/client'
const root=ReactDOM.createRoot(document.getElementById("demo"));
root.render(
    <div style={{backgroundColor:"#FDB0FF",margin:"0%", padding:"30px"}}>
        <h1 style={{color:"#5D0460", marginTop:"10%", marginLeft:"15%", wordSpacing:"2px", fontSize:"80px"}}>React Fundamentals</h1>
        <p style={{fontSize:"40px",wordSpacing:"2px", fontWeight:"500", color:"#5D0460", marginLeft:"15%"}}>JSX</p>
        <p style={{fontSize:"40px",wordSpacing:"2px", fontWeight:"500", color:"#5D0460", marginLeft:"15%"}}>Components</p>
        <p style={{fontSize:"40px",wordSpacing:"2px", fontWeight:"500", color:"#5D0460", marginLeft:"15%"}}>And Props</p>
        <img src="\src\assets\img.jpg" alt="" style={{width:"400px",height:"350px", marginLeft:"55%", marginTop:"-20%"}}/>
    </div>
)
