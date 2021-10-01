import React from "react";

import park2 from './Images/carpark2.jpg'

import park3 from './Images/carpark8.jpg'

import park4 from './Images/carpark9.jpg'

import park5 from './Images/carpark6.jpg'

import park7 from './Images/carpark10.jpg'

import park8 from './Images/carpark11.jpg'

import park9 from './Images/carpark12.jpg'

import park10 from './Images/carpark16.jpg'

import park11 from './Images/carpark16.jpg'

import park12 from './Images/carpark17.jpg'

import './btn.css'

import './ResponsiveImageLayout.css'









function Home(){



    return(



        



        <div className ="container">

            

            <br/><br/><br/>

            <h1>

                Parking

            </h1>



            <p>

            Book parking online to reserve your space at a great rate.

            Start and finish your trip relaxed knowing your car is safe, sound and parked nearby. 

            The perfect option for travellers wanting the convenience of parking at the airport at a reasonable price.

            </p>



            <br/>

            <img src={park7} class="d-block" width="100%" height="500" alt="..."></img>

            <br/><br/><br/>

            



            <br/>

            <h2>Plan before you Park</h2>

            <br/>



            <p>

                Enjoy our safe and reliable parking options, right at the heart of Colombo City. 

                All rates shown are pre booked online rates. You must pre book online in advance to access these rates. 

                Drive up tariffs may be different.

            </p>



            <p>

            When dates are entered, the car parks displayed below are available. If a car park is not presented, 

            it is not available for your desired dates. All rates shown are pre booked online rates. 

            You must pre book online in advance to access these rates. Drive up tariffs may be different.

            </p>

            <br/>



            



            <br/><br/><br/>

            <div class="card bg-dark text-white">

            <img src={park8} class="d-block" opacity="0.7" width="100%" height="500" alt="..."></img>

            <div class="card-img-overlay">

                <br/><br/><br/>

                <div>

                    <a href="/addRishma">

                        <button className="HomeBookingbtn">Booking Slots</button>

                    </a>

                </div>

                <br/>

                <div>

                    <a href="/allBooking">

                        <button className="HomeBookingDetailsbtn">Manage my bookings</button>

                    </a>

                </div>

                <br/>

                <div>

                    <a href="/fandQ">

                        <button className="HomeBookingDetailsbtn">Help and FAQ</button>

                    </a>

                </div>

                <br/>

                <div>

                    <a>

                        <button className="HomeBookingDetailsbtn">Privacy policy</button>

                    </a>

                </div>



                <br/><br/>



                <div>

                    <p>

                        When dates are entered, the car parks displayed below are available. If a car park is not presented, 

                        it is not available for your desired dates. All rates shown are pre booked online rates. 

                        You must pre book online in advance to access these rates. Drive up tariffs may be different.

                    </p>

                </div>





                

            </div>

            </div>



            <br/><br/>

            <div>

                



                <div class="row">

                    <h1>Packages</h1>

                    <br/><br/><br/>

                    <div class="column">



                        <a href="/addRishma">

                            <img src={park9} class="d-block" width="100%" height="200" alt="..."></img>

                        </a>

                        

                        <br/>

                        <h4>Economy Parking</h4>

                        

                        <p>

                        8-10 min to terminal



                        The cost effective way to drive yourself & walk to the terminal.

                        Secure and monitored.

                        <br/> 



                        <a href="/addRishma">

                            <button className="homerishGridbtn">Learn more ...</button>

                        </a> 

                        

                        

                        </p>

                        <br/>




                        <a href="/addRishma">

                            <img src={park12} class="d-block" width="100%" height="200" alt="..."></img>

                        </a>

                        

                        <br/> 

                        <h4>Executive Parking</h4>

                        

                        <p>

                        2-5 min to terminal



                        Covered and uncovered parking building.

                        

                        <br/> 



                        <a href="/addRishma">

                            <button className="homerishGridbtn">Learn more ...</button>

                        </a>   

                        

                        </p>  

                        <br/>

                    </div>

                    <br/> 



                    <div class="column">



                        <a href="/addRishma">

                            <img src={park3} class="d-block" width="100%" height="200" alt="..."></img>

                        </a>

                        <br/>

                        <h4>Standard Parking</h4>

                    

                        <p>

                        5 mins to terminal



                        Short walk to the domestic terminal.

                        Over 100 car parks spaces.

                        Open and easy.

                        Value for money.

                        <br/>  



                        <a href="/addRishma">

                            <button className="homerishGridbtn">Learn more ...</button>

                        </a>  

                        

                        </p> 

                        <br/>

                        <a href="/addRishma">

                            <img src={park11} class="d-block" width="100%" height="200" alt="..."></img>

                        </a>

                        <br/>

                        <h4>Dropoff & Pick up</h4>

                        

                        <p>

                        3-5 min to terminal



                        Plenty of parks within a short walk to the terminal.

                        Open and easy.

                        <br/>



                        <a href="/addRishma">

                            <button className="homerishGridbtn">Learn more ...</button>

                        </a>    

                        

                        </p> 

                        <br/>

                        

                    </div>

                    <br/> 

                    <div class="column">



                        <a href="/addRishma">

                            <img src={park5} class="d-block" width="100%" height="200" alt="..."></img>

                        </a>

                        <br/>

                        <h4>Park & Ride</h4>

                        

                        <p>

                        10-15 min to terminal



                        Domestic terminal.

                        Value for money. 

                        Open and easy.

                        The ultimate for speed and convenienc.

                        <br/>  



                        <a href="/addRishma">

                            <button className="homerishGridbtn">Learn more ...</button>

                        </a>

                        </p> 

                        <br/>



                        <a href="/addRishma">

                            <img src={park10} class="d-block" width="100%" height="200" alt="..."></img>

                        </a>

                        <br/>

                        <h4>Covered VParking</h4>

                        

                        <p>

                        0-1 min to terminal



                        Domestic terminal.

                        The ultimate for speed and convenience.

                        <br/>  



                        <a href="/addRishma">

                            <button className="homerishGridbtn">Learn more ...</button>

                        </a>  

                        

                        </p> 

                        <br/>



                    </div>

                

                </div>

                            

            </div>

            



            








        </div>

    )




}



export default Home;