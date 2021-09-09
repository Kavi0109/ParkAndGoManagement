import React from 'react';
import {Link} from 'react-router-dom';

function Myheader(){

    return(
        <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <Link to="/show" className="navbar-brand">Allot Parking Spaces</Link>
        </div>
        <div className="container">
        <Link to="/add" className="navbar-brand">Add New Slot</Link>
        </div>
        <div className="container">
        <Link to="/retrieve" className="navbar-brand">Reports</Link>
        </div>
        </nav>
        </div>
    )
}


export default Myheader;