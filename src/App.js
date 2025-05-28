import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Contact from './Contect';
import Signup from './Signup';
import Deshboard from './Deshboard';
import Protected from './Protected';
import AddDevice from './AddDevice';
import Services from "./Services"
import AddValue from './AddValue';

function App() {
  return (
    <BrowserRouter>
      
      
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          
          <Route path ="/dashboard" element ={<Protected>{<Deshboard/>}</Protected> }/>
          <Route path="/add-device" element={<Protected><AddDevice /></Protected>} />
          <Route path ="/addValue" element ={<Protected>{<AddValue/>}</Protected> }/>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
