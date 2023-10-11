import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

import { SignInProvider } from './context/SignInContext';



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
     <SignInProvider>
      <App />
      </SignInProvider>
    </React.StrictMode>
  </BrowserRouter>
)
