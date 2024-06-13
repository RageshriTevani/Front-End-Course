import React from "react";
import ReactDOM from 'react-dom/client';
import InlineApp from "./InlineApp";
import InternalApp from "./InternalApp";
import ExternalApp from "./ExternalApp"
const root=ReactDOM.createRoot(document.getElementById('demo'));
root.render
(
    // <InlineApp />
    // <InternalApp/>
    <ExternalApp/>
)