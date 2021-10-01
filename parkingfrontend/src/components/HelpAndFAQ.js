import React from 'react';
import gal5 from './gal5.jpg';
import gal6 from './gal6.jpg';
import im1 from './Images/carpark2.jpg'
import im2 from './Images/carPark4.jpg'
import im3 from './Images/carPark5.jpg'
import im4 from './gal1.jpg'
import im5 from './Images/carpark10.jpg'


function FAQ(){

    return(

    <main class="grid">

    <center><h1 style={{marginTop:20}}><br></br><br></br> Help and FAQ<br></br><br></br><br></br></h1></center>



        <div class="container my-4">
        <div class="row">


        <div class="col-lg-4 col-md-12 mb-4">

            <img src={im1} class="img-fluid mb-4" alt=""/>

            <h4 style={{color:"#FF5370"}}>Where should I park once i have entered the car park</h4>
            <p>
            You may park in any vacant space in that car park.  A valid permit must be displayed if using a mobility car park space.
            </p>

            

            <img src={im2} class="img-fluid mb-4" alt=""/>

            <h4 style={{color:"#FF5370"}}>How do I book parking?</h4>
            <p>
            There are 5 simple steps to a successful booking:
            
            Select your date, time and terminal details via the parking booking form
            Select the parking option that best suits you 
            Complete your personal details 
            
            </p>

            <img src={im5} class="img-fluid mb-4" alt=""/>

            <h4 style={{color:"#FF5370"}}>How do I provide feedback?</h4>
            <p>
            We are committed to the highest standards of customer care. 
            If you would like to provide us with 
            feedback on any aspect of the service you receive please contact us at
            ParknGO@gmail.com
            
            </p>

        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">

            <img src={im3} class="img-fluid mb-4" alt=""
            data-wow-delay="0.1s"/>

            <h4 style={{color:"#FF5370"}}>What do I do when I get to the car park?</h4>
            <p>
                At the entry to your booked car park, tap or insert your nominated credit card or debit card  
                to gain access. Do not take a ticket.The confirmation email you will receive gives comprehensive 
                instructions on what to do when you arrive at the car park.
            </p>

            <img src={im4} class="img-fluid mb-4" alt=""
            data-wow-delay="0.1s"/>

            <h4 style={{color:"#FF5370"}}>Can I book at short notice?</h4>
            <p>
                You may only book 4 hours prior to arrival time for 
                our short term car parks and 24 hours in advance for our long term car parks.
            </p>

        </div>
        
        <div class="col-lg-4 col-md-6 mb-4">

            <img src={gal5} class="img-fluid mb-4" alt=""
            data-wow-delay="0.2s"/>
            <h4 style={{color:"#FF5370"}}>How are parking charges calculated?</h4>
            <p>
                The number of days charged for when you pre-book is calculated on the basis of the 
                times and dates you select when making your booking. Charges for certain promotions may 
                be calculated on the number of calendar days booked. 
                See special promotion Terms and Conditions for further information.
            </p>

            <img src={gal6} class="img-fluid mb-4" alt=""
            data-wow-delay="0.5s"/>
            <h4 style={{color:"#FF5370"}}>What is Manage my booking?</h4>
            <p>
            This service enables you to amend or cancel your online booking. 
            You can change your entry/exit dates and times and your nominated credit card.
            You cannot amend your booking four hours prior to your car park entry time or after 
            you have entered the car park.
            </p>

        </div>


        </div>

    </div>
    </main>
    )
}

export default FAQ;
