import React from 'react';
import {Link} from 'react-router-dom';
import logo from './backimage1.jpg';

const logosize={
    width:'30%',
    height:'30%'
}

function footer(){

    return(

        <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{marginTop:20}}>
         <Link to="" className="navbar-brand">Park Express</Link>
        </nav><br></br>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <h6>1234 Beautiful St, Colombo, Srilanka.<br></br><br></br>
                (+94) 011-2578587<br></br><br></br>
                Wed, 9 AM - 8 PM <br></br><br></br>
                parkingExpress@gmail.com<br></br><br></br><br></br><br></br><br></br><br></br>
                parkingExpress all rights reserved.
            </h6>
            
        </div>
        <div class="container">
            <h6>Our Services<br></br><br></br>
                Allot Parking<br></br><br></br>
                Manage Bookings<br></br><br></br>
                Shuttle Routes<br></br><br></br>
                GPS Tracker<br></br><br></br>
                Customer Feedback<br></br><br></br>
            </h6>
            
        </div>
        <img src={logo}  style={logosize} alt="Logo"></img>
        </nav>
        
        </div>
    )
}



export default footer;