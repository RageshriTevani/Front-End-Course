import React from 'react'
import ReactDOM from 'react-dom/client'
import '@mui/material'
import '@mui/icons-material'
import '@mui/styled-engine-sc'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ButtonApp from '../src/ButtonApp.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ButtonApp />
  </React.StrictMode>,
)
