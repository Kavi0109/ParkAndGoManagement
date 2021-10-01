import React from 'react';
import capacity from './capacity.jpg'
import reserve from './reserve.jpg'
import qna from './qna.jpg'

const logosize={
    width:'380px',
    height:'250px'
}



export default function Tablefirst(){

    return(
        
<main class="grid">

<center><h2 style={{marginTop:30}}>Welcome to First Floor Parking Area<br></br>Introduction<br/></h2></center>

        
    <div class="container my-4">
        
    <div class="row">


    <div class="col-lg-4 col-md-12 mb-4">

    <div className="card">
  <img
    src={capacity}
    style={logosize}
    alt="..."
  />
  <div class="card-body">
  <center><h5 class="card-title">Capacity </h5></center>
    <p class="card-text">
      Our parking system is consits of a continue procedure in order book a slot. Any outside user cannot book our parking Spaces
      .Since that is an added advantage for our users.

     Note : Please note that this booking will be availbale only for one month period. And after the month the slot will be available again. 
     <br></br>
     We only can accompany <b>350 Regular Customers.</b>
     
     We can only facilitate limited regular customers in this area. Therefore please be aware of your availability for our system.
     <br></br>
    </p>
    <center><a href="/homeRishma" class="btn btn-primary">Booking Page</a></center>
  </div>
  </div>

    </div>
    
    <div class="col-lg-4 col-md-6 mb-4">

    <div className="card">
  <img
    src={reserve}
    style={logosize}
    alt="..."
  />
  <div class="card-body">
  <center><h5 class="card-title">Reserve My Slot</h5></center>
    <p class="card-text">
     In our parking system users must go through with some rules and regulations.
     <br>
     </br><br/>
     Note : Please note that this booking will be availbale only for one month period. And after the month the slot will be available again. 
     <br></br>
     <br>
     </br><br/>
     <b>This area is reserved for only our regular customers. If you are not a regular customer you will be inform and we are requiring you to change your slot. 
     </b><br></br>
    </p>
    <center><a href="/addp" class="btn btn-primary">Pick My Slot</a></center>
  </div>
  </div>
    </div>
    <div class="col-lg-4 col-md-6 mb-4">

    <div className="card">
  <img
    src={qna}
    style={logosize}
    alt="..."
  />
  <div class="card-body">
  <center><h5 class="card-title">Any Questions?</h5></center>
    <p class="card-text">
      We value our customer feedbacks. I f you have any issues regarding us contact us via our mail or phone. We will be answering all your question through our mails.
    </p>
    <br>
     </br><br/>
     If you have any questions read about us.
     <br></br>
     <br>
     </br><br/>
    Who are we?
     <br></br>
     Why us?
     <br></br>
     Refer our aboutus and contactus pages for more details.
    <center><a href="/aboutus" class="btn btn-primary">View More</a></center>
  </div>
  </div>
    </div>
  


    </div>

</div>
    </main>
    )
}



