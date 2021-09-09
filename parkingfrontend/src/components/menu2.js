import React from 'react';
import {Link} from 'react-router-dom';

function menu2(){

    return(

        <div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <Link to="/show" className="navbar-brand">Allot Parking</Link>
        </div>
        <div className="container">
        <Link to="" className="navbar-brand">Bookings</Link>
        </div>
        <div className="container">
        <Link to="" className="navbar-brand">Shuttle Routes</Link>
        </div>
        <div className="container">
        <Link to="" className="navbar-brand">GPS Tracker</Link>
        </div>
        <div className="container">
        <Link to="" className="navbar-brand">Customer Feedbacks</Link>
        </div>
        <div className="container">
        <Link to="" className="navbar-brand">Suggestions</Link>
        </div>
        </nav>
        </div>
    )
}



export default menu2;