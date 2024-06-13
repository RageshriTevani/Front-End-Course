import React from "react";
const Name=" RageshriTevani";
const DOB=" 16th March 1998";
const Nationality=" Indian";
function BioDataGet()
{
    return(
        <>
        <div style={{width:"50%"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxrp-tIazxS5VAtxLZtFRNIdHxFqPuD7EIKq7_nnwnw&s" alt="ts" style={{borderRadius:"50%", width:"150px", height:"150px"}}></img>
            </div>ś
            <h3>About Me</h3>
            <p><b>Name:{Name}</b></p>
            <p><b>DOB:{DOB}</b></p>
            <p><b>Nationality:{Nationality}</b></p>
            </>
    )
}
export default BioDataGet

