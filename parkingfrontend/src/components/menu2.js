import React from "react"

// imgs
import park_vec from "../assets/parking.png"
import parkex_logo from "../assets/B&W.png"


function Header(){

    

    return(
        <div>
    <div class="header-blue">
        <nav class="navbar navbar-light navbar-expand-md navigation-clean-search">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img className="header-logo" src={parkex_logo}/>
                    </a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
                    <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav">
                        <li class="nav-item" role="presentation"><a class="nav-link" href="/homeMain">HOME</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="/aboutus">ABOUTS US</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="/contactus">CONTACT US</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="/gallery">GALLERY</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link" href="/projects">OUR PROJECTS</a></li>
                        <li class="nav-item dropdown">
                            <a class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false" href="#">SERVICES</a>
                            <div class="dropdown-menu" role="menu">
                                <a class="dropdown-item" role="presentation" href="/homeRishma">BOOKING</a>
                                <a class="dropdown-item" role="presentation" href="/show">ALLOT PARKING</a>
                                <a class="dropdown-item" role="presentation" href="/transportation">SHUTTLE ROUTES</a>
                                <a class="dropdown-item" role="presentation" href="/bus">GPS TRACKER</a>
                                <a class="dropdown-item" role="presentation" href="#">TICKETING</a>
                                <a class="dropdown-item" role="presentation" href="/homeKasuni">MANAGE EMPOLYEE</a>
                                <a class="dropdown-item" role="presentation" href="/home">MANAGE SALARY</a>
                                <a class="dropdown-item" role="presentation" href="/ManageShuttles">MANAGE SHUTTLES</a>
                                <a class="dropdown-item" role="presentation" href="#">MANAGE FINANCES</a>
                                </div>
                        </li>
                    </ul>
                    <form class="form-inline mr-auto" target="_self">
                        <div class="form-group"><label for="search-field"><i class="fa fa-search text-white"></i></label><input class="form-control search-field" type="search" id="search-field" name="search"/></div>
                    </form><span class="navbar-text"> <a class="login" href="#">Log In</a></span><a class="btn btn-light action-button" role="button" href="#">Signup</a>
                </div>
            </div>
        </nav>
        <div className="container">
            <div class="row">
                <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                    <h1>Welcome to ParkExpress</h1>
                    <p>To partner with clients, provide quality cusomer focused service. and to add value to the lives of the people we serve thtough our core values; integrity, safety, sustainability, technology, leadership and community service.  <br/></p> <button class="btn btn-light btn-lg action-button" type="button">Learn More<i class="fa fa-long-arrow-right ml-2"></i></button>
                </div>
                <br/><br/>
                <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                <img class="park-vec" src={park_vec}/> 
                    <div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
<div className="navbar-cont">

</div>

</div>
    )
}

export default Header;