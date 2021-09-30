import React,{useState} from "react";//importing the useState Hook from React
import axios from "axios"; //pass data between backend and frontend
import DatePicker from 'react-datetime';
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';
import './btn.css'
import park1 from './Images/carpark6.jpg'
import park2 from './Images/carpark8.jpg'
import map from './Images/map.png'






export default function AddBooking(){

    
    const [BookingID,setBookingID] = useState("");
    const [Firstname,setFirstname] = useState("");// a Hook
    const [Lastname,setLastname] = useState("");
    const [Contactnumber,setContactnumber] = useState("");
    const [Address,setAddress] = useState("");
    const [PlateNumber,setPlateNumber] = useState("");
    const [VehicleModel,setVehicleModel] = useState("");
    const [EntryDate,setEntryDate] = useState(moment());
    const [ExitDate,setExitDate] = useState(moment());
    const [BusNo,setBusNo] = useState("");
    const [BusRoute,setBusRoute] = useState("");
    const [CardNo,setCardNo] = useState("");
    const [CardHolderName,setCardHolderName] = useState("");
    const [ExpireDate,setExpireDate] = useState(moment());
    const [SecurityCode,setSecurityCode] = useState("");
    
   


    function sendData(event){
        event.preventDefault();//prevent from refreshing the page, (default action that belongs to the event will not occur.)
        

        



        const newBooking = {
            BookingID,
            Firstname,
            Lastname,
            Contactnumber,
            Address,
            PlateNumber,
            VehicleModel,
            EntryDate,
            ExitDate,
            BusNo,
            BusRoute,
            CardNo,
            CardHolderName,
            ExpireDate,
            SecurityCode
        }


        //send data to the backend using axios

        axios.post("/booking/addRishma",newBooking).then(()=>{
            
            alert("Booking Added")

            //load the page again after inserting the record
            window.setTimeout(function(){
                window.location.href="/addRishma";
            }, 1000);

        }).catch((err)=>{
            alert(err)
        })


    }


    



    //Disable past dates
    const yesterday = moment().subtract(1, 'day');
    const disablePastDt = current => {
    return current.isAfter(yesterday);
    };


    return(

        <>
        <br />
            <div className="rishmaDescription">
                
                
                
                <h1>
                    Economy Parking
                </h1><br />

                <div className="rishmaDescriptionpara">
                    <p>
                        Start and finish your trip relaxed knowing your car is safe, sound and parked nearby. 
                        The perfect option for travellers wanting the convenience of parking at the airport at a reasonable price.

                        Economy Parking is low cost parking at its best. 
                        All the parks are secure and if you choose to Park & Ride there are shuttles every 20 minutes 
                        to and from the domestic terminal making it a great choice for short or long trips away.
                    </p>
                </div>
             
            </div>
            

            <br/><br/>

            <div className="rishdecor">
                <h2>
                Parking with ease
                </h2>

                <div style={{float:"right"}}>
	
                <div class ="Lcard">
                        
                        <img src={park1} class="d-block" width="100%" height="200" alt="..."></img>
                        
                            <div class="Lcard-text">
                                <h4 style={{color:"#ff869a"}}>Secure and monitored</h4>
                                <p>
                                <br/>
                                Whilst many of our car parks have a number of accessible spaces available for mobility card holders, 
                                unfortunately you are unable to reserve any specific space via the online booking system.
                                
                                </p>
                                    
                            </div>
                    </div>
                </div>

                <div style={{float:"left"}}>
	
                <div class ="Lcard">
                    <img src={park2} class="d-block" width="100%" height="200" alt="..."></img>
                    <div class="Lcard-text">
                            <h4 style={{color:"#ff869a"}}>Economical convenience</h4>
                            <p>
                            <br/>
                                If you arrive at your nominated car park and the full sign is out, 
                                this sign is in place for customers who have not made an online booking, 
                                all customers who have an online booking and are at their chosen car park will be able 
                                to enter using there nominated credit card.
                            </p>
                            
                        </div>


	            </div></div>
                <br/>
                <div style={{float:"left"}}>
                
                    <div>
                    <img src={map} class="d-block" width="115%" height="595" alt="..."></img>
                    </div>
                
                
                </div>
                
                

            </div>
            

            



            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br />








            

                <div className="container">



                    <form onSubmit={sendData} id="form">

                        <br />
                        <h2>YOUR PARKING DETAILS</h2>
                        <h6>Please fill in your details below for new parking slot booking</h6>

                        <br /><br />


                        <div class="row">
                            <label htmlFor="BookingID" class="col-sm-2 col-form-label" for="BookingID">Booking ID</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="BookingID"
                                    pattern="B[0-9]{3}"
                                    placeholder="B001"
                                    onChange={(event) => {
                                        setBookingID(event.target.value);
                                    } }
                                    required />
                            </div>

                        </div>

                        <br />


                        <div class="row">
                            <label htmlFor="Firstname" class="col-sm-2 col-form-label" for="Firstname">First Name</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Firstname"
                                    placeholder="Ann"
                                    onChange={(event) => {
                                        setFirstname(event.target.value);
                                    } }
                                    required />

                                
                            </div>
                           

                        </div>

                        <br />

                        

                        <div class="row">
                            <label htmlFor="Lastname" class="col-sm-2 col-form-label" for="Lastname">Last Name</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Lastname"
                                    placeholder="Mary"
                                    onChange={(event) => {
                                        setLastname(event.target.value);
                                    } }
                                    required />

                            </div>


                            
                        </div>


                        <br />


                        <div class="row">
                            <label htmlFor="Contactnumber" class="col-sm-2 col-form-label" for="Contactnumber">Contact Number</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Contactnumber"
                                    pattern="[0-9]{10}"
                                    placeholder="0123456789"
                                    onChange={(event) => {
                                        setContactnumber(event.target.value);
                                    } }
                                    required maxLength="10"/>


                                
                            </div>
                        </div>


                        <br />


                        <div class="row">
                            <label htmlFor="Address" class="col-sm-2 col-form-label" for="Address">Address</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Address"
                                    placeholder="Temple rd, Colombo 04"
                                    onChange={(event) => {
                                        setAddress(event.target.value);
                                    } }
                                    required />
                            </div>
                        </div>



                        <br /><br /><br />

                        <h3>Vehicle Details</h3>

                        <br />

                        <div class="row">
                            <label htmlFor="PlateNumber" class="col-sm-2 col-form-label" for="PlateNumber">Licence Plate Number</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="PlateNumber"
                                    pattern="[A-Z]-[0-9]{4}"
                                    placeholder="DSA-1122"
                                    onChange={(event) => {
                                        setPlateNumber(event.target.value);
                                    } }
                                    required />
                            </div>
                        </div>

                        <br />


                        <div class="row">
                            <label htmlFor="VehicleModel" class="col-sm-2 col-form-label" for="VehicleModel">Vehicle Model</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="VehicleModel"
                                    placeholder="Toyota"
                                    onChange={(event) => {
                                        setVehicleModel(event.target.value);
                                    } }
                                    required />
                            </div>
                        </div>


                        <br /><br /><br />

                        <h3>Entry/Exit Date and Time Details</h3>

                        <br />

                        <div class="row">
                            <label htmlFor="EntryDate" class="col-sm-2 col-form-label" for="EntryDate">Entry Date/Time</label>

                            <div class="col-sm-10">
                                <DatePicker
                                    isValidDate={disablePastDt}
                                    value={EntryDate}
                                    onChange={val => setEntryDate(val)} />
                            </div>
                        </div>

                        <br />

                        <div class="row">
                            <label htmlFor="ExitDate" class="col-sm-2 col-form-label" for="ExitDate">Exit Date</label>

                            <div class="col-sm-10">
                                <DatePicker
                                    isValidDate={disablePastDt}
                                    value={ExitDate}
                                    onChange={val => setExitDate(val)} />
                            </div>
                        </div>

                        <br /><br />



                        <h3>Shuttle Bus Tickets</h3>
                        <br />

                        <div class="row">
                            <label htmlFor="BusNo" class="col-sm-2 col-form-label" for="BusNo">Bus Number</label>

                            <div class="col-sm-10">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="BusNo"
                                    pattern="[0-9]{3}"
                                    placeholder="190"
                                    onChange={(event) => {
                                        setBusNo(event.target.value);
                                    } }
                                    required maxlength="3"/>
                            </div>
                        </div>


                        <br />

                        <div class="row">
                            <label htmlFor="BusRoute" class="col-sm-2 col-form-label" for="BusRoute">Bus Route</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="BusRoute"
                                    placeholder="Colombo - Horana"
                                    onChange={(event) => {
                                        setBusRoute(event.target.value);
                                    } }
                                    required
                                    maxValue={250}
                                    minValue={0} />
                            </div>
                        </div>


                        <br /><br />


                        <h3>Payment Details</h3>

                        <br />

                        <div class="row">
                            <label htmlFor="CardNo" class="col-sm-2 col-form-label" for="CardNo">Card Number</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="CardNo"
                                    pattern="[0-9]{10}"
                                    placeholder="0123456789"
                                    onChange={(event) => {
                                        setCardNo(event.target.value);
                                    } }
                                    required maxlength="10" />

                                
                            </div>
                        </div>

                        <br />

                        <div class="row">
                            <label htmlFor="CardHolderName" class="col-sm-2 col-form-label" for="CardHolderName">Card Holder Name</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="CardHolderName"
                                    placeholder="Ann Mary"
                                    onChange={(event) => {
                                        setCardHolderName(event.target.value);
                                    } }
                                    required />
                            </div>
                        </div>

                        <br />

                        <div class="row">
                            <label htmlFor="ExpireDate" class="col-sm-2 col-form-label" for="ExpireDate">Expire Date</label>

                            <div class="col-sm-10">
                                <DatePicker
                                    isValidDate={disablePastDt}
                                    value={ExpireDate}
                                    onChange={val => setExpireDate(val)} />

                            </div>
                        </div>

                        <br />

                        <div class="row">
                            <label htmlFor="SecurityCode" class="col-sm-2 col-form-label" for="SecurityCode">Security Code</label>

                            <div class="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="SecurityCode"
                                    pattern="[0-9]{4}"
                                    placeholder="1234"
                                    onChange={(event) => {
                                        setSecurityCode(event.target.value);
                                    }}
                                    required/>
                            </div>
                        </div>



                        <br /><br /><br />






                        <br />

                        <div className="Submitbtndiv">
                            <a href="/PaymentForm">
                                <button type="submit" className="Submitbtn">Submit</button>
                            </a>
                        </div>

                    </form>

                    <div className="GoBackdiv">
                        <a href="/homeRishma"><button type="" className="GoBack">Go Back</button></a>
                    </div>
                    <br /> <br /> <br />

                </div>
        </>


    )

}

