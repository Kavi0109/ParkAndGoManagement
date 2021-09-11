import React from "react";

function Header(){
    return(

    <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <a className="navbar-brand"  style={{color:"blue"}}>
            <a className="nav-link" href="/homeRishma" >Parking Slot Booking </a>
        </a>

       

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">


            <li className="nav-item">
                <a className="nav-link" href="/addRishma"  style={{color:"black"}}>Book a car park</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/allBooking"  style={{color:"black"}}>Booking Details</a>
            </li>

            
            
            
        </ul>
        
  </div>
</nav>

)

}

export default Header;