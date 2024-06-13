import React from "react";
import ReactDOM from 'react-dom/client'
import BioData from "./BioData";
import BioDataGet from "./BioDataGet";
const root=ReactDOM.createRoot(document.getElementById("biodemo"));
root.render(
<>
<h1>Hello</h1>
<BioData/>
<BioDataGet/>
</>
)