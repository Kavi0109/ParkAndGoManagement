import React from 'react';
import logo from './abus.jpg';

const logosize={
    width:'50%',
    height:'50%'
}

function aboutus(){

    return(
    <div class="container">



<section>

<h2 class="my-5 h3 text-center" style={{marginTop:150}}> Park And Go Management System<br></br><h6 style={{marginTop:20}}>A complete solution for managing car parking slots and parking areas.</h6></h2>


<div class="row features-small mb-5 mt-3 wow fadeIn">

  <div class="col-md-4">

    <div class="row">
      <div class="col-2">
        <i class="fas fa-check-circle fa-2x indigo-text"></i>
      </div>
      <div class="col-10">
        <h6 class="feature-title">Who are we?</h6>
        <p class="grey-text">With Dedication, Integrity and an Uncompromising Commitment to Service, Parking Company of America (PCA) is recognized as a leader and innovator in the Parking, Transportation, Fleet Maintenance, Customer Service and Hospitality Industries.Based in Los Angeles, California, PCA is a privately held company founded in 1964. Today, PCA has employees primarily centered in California, with additional operations in other states such as Kansas, Wisconsin, and Georgia. PCA is one of the largest minority certified parking companies in America and successfully provides superior service to Hotels, Healthcare Facilities, Restaurants, Airports, Retail Establishments, the Entertainment Industry, Private Events, and Independent Property Management Companies.</p>

      </div>
    </div>
 
 
  </div>
 
  <div class="col-md-4 flex-center">
    <img src={logo} alt="MDB Magazine Template displayed on iPhone" class="z-depth-0 img-fluid"/>
  </div>

  <div class="col-md-4 mt-2">

    <div class="row">
      <div class="col-2">
        <i class="fas fa-check-circle fa-2x indigo-text"></i>
      </div>
      <div class="col-10">
      <h6 class="feature-title">Our Mission</h6>
        <p class="grey-text">PCA strives to be an extension of the clients we serve and to provide innovative solutions and services that make a positive difference.</p>
    
      </div>
    </div>
   
    <div class="row">
      <div class="col-2">
        <i class="fas fa-check-circle fa-2x indigo-text"></i>
      </div>
      <div class="col-10">
      <h6 class="feature-title">Our Vision</h6>
        <p class="grey-text">To partner with clients, provide quality customer focused service, and to add value to the lives of the people we serve through our core values; integrity, safety, sustainability, technology, leadership and community service.</p>
        
      </div>
    </div>
   
    <div class="row">
      <div class="col-2">
        <i class="fas fa-check-circle fa-2x indigo-text"></i>
      </div>
      <div class="col-10">
        <h6 class="feature-title">Easy installation</h6>
        <p class="grey-text">5 minutes, a few clicks and... done. You will be surprised at how easy it is.
        </p>
      </div>
    </div>

  </div>


</div>


</section>

    </div>
    )
}


export default aboutus;