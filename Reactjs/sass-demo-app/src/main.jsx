import React from "react";
import ReactDOM from 'react-dom/client';
const root=ReactDOM.createRoot(document.getElementById('demo'));
root.render
(
    <>
    <div className="box">
        <h1>Hey welcome to my website</h1>
        <h2>You can visit here anytime</h2>
        <img src="https://terminosycondiciones.es/wp-content/uploads/2022/03/terminos_condiciones_dark_web.jpg" id="img"></img>
        <form className="textarea">
            <input type="text" className="name" placeholder="Name"></input>
            <input type="text" className="Surname" placeholder="Surname"></input>
            <input type="text" className="phone" placeholder="Contact Details"></input>
            <input type="text" className="Email" placeholder="Email Id"></input>
            <button type="button" className="btn" value="Submit">Submit</button>
        </form>
    </div>
    <div className="box2">
    </div>
    </>
)