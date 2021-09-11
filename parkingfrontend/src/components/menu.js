import React from 'react';
import {Link} from 'react-router-dom';
import logo from './B&W.png';

const logosize={
    width:'20%',
    height:'20%'
}


function menu(){

    return(

        <div>

            
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">   
            <div className="container">
            <img src={logo} style={logosize}></img>
            <div className="container">    
             <h3 class="text-white">Park And Go Management System<br></br><h6 class="text-white">A complete solution for managing car parking slots and parking areas.</h6></h3><br></br>     
             </div> 
              
             </div>      
            </nav>
            
            

            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div className="container">
                <Link to="" className="navbar-brand">Home</Link>
                </div>
                <div className="container">
                <Link to="/aboutus" className="navbar-brand">About Us</Link>
                </div>
                <div className="container">
                <Link to="/contactus" className="navbar-brand">Contact Us</Link>
                </div>
                <div className="container">
                <Link to="/gallery" className="navbar-brand">Gallery</Link>
                </div>
                <div className="container">
                <Link to="/projects" className="navbar-brand">Our Projects</Link>
                </div>
                <div className="container">
                <Link to="/login" className="navbar-brand">Login</Link>
                </div>
            </nav>
        </div>
        </div>
    )
}

export default menu;