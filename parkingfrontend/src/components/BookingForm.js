import React,{useState} from "react";
import axios from "axios";
import './btn.css'



export default function AddBooking(){

    const [BookingID,setBookingID] = useState("");
    const [Firstname,setFirstname] = useState("");
    const [Lastname,setLastname] = useState("");
    const [Contactnumber,setContactnumber] = useState("");
    const [Address,setAddress] = useState("");
    const [PlateNumber,setPlateNumber] = useState("");
    const [VehicleModel,setVehicleModel] = useState("");
    const [EntryDate,setEntryDate] = useState("");
    const [ExitDate,setExitDate] = useState("");
    const [BusNo,setBusNo] = useState("");
    const [BusRoute,setBusRoute] = useState("");
    const [CardNo,setCardNo] = useState("");
    const [CardHolderName,setCardHolderName] = useState("");
    const [ExpireDate,setExpireDate] = useState("");
    const [SecurityCode,setSecurityCode] = useState("");
    
   



    function sendData(event){
        event.preventDefault();//prevent from refreshing the page
        
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

        axios.post("/booking/addRishma",newBooking).then(()=>{
            
            alert("Booking Added")

        }).catch((err)=>{
            alert(err)
        })


    }


    return(

        <div className ="container">

            

                <form onSubmit={sendData}>

                    <br/>
                    <h2>YOUR PARKING DETAILS</h2>
                    <h6>Please fill in your details below for new parking slot booking</h6>

                    <br/><br/>


                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="BookingID">Booking ID</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="BookingID"  
                            placeholder="B001"
                            onChange={(event)=>{
                                setBookingID(event.target.value);
                            }}
                            required
                        />
                        </div>
                        
                    </div>

                    <br/>


                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="Firstname">First Name</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="Firstname" 
                            placeholder="Ann"
                            onChange={(event)=>{
                                setFirstname(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>

                    <br/>



                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="Lastname">Last Name</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="Lastname" 
                            placeholder="Mary"
                            onChange={(event)=>{
                                setLastname(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>


                    <br/>


                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="Contactnumber">Contact Number</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="Contactnumber" 
                            placeholder="0123456789"
                            onChange={(event)=>{
                                setContactnumber(event.target.value);
                            }}
                            required maxlength="10"
                        />
                        </div>
                    </div>


                    <br/>


                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="Address">Address</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="Address" 
                            placeholder="Temple rd, Colombo 04"
                            onChange={(event)=>{
                                setAddress(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>



                    <br/><br/><br/>

                    <h3>Vehicle Details</h3>
                    
                    <br/>

                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="PlateNumber">Licence Plate Number</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="PlateNumber" 
                            placeholder="DSA-1122"
                            onChange={(event)=>{
                                setPlateNumber(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>

                    <br/>


                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="VehicleModel">Vehicle Model</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="VehicleModel" 
                            placeholder="Toyota"
                            onChange={(event)=>{
                                setVehicleModel(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>

                    
                    <br/><br/><br/>

                    <h3>Entry/Exit Date Details</h3>
                    
                    <br/>

                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="EntryDate">Entry Date</label>

                        <div class="col-sm-10">
                        <input 
                            type="date" 
                            className="form-control" 
                            id="EntryDate" 
                            onChange={(event)=>{
                                setEntryDate(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>
                    
                    <br/>

                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="ExitDate">Exit Date</label>

                        <div class="col-sm-10">
                        <input 
                            type="date" 
                            className="form-control" 
                            id="ExitDate" 
                            onChange={(event)=>{
                                setExitDate(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>
                    
                    <br/><br/>



                    <h3>Shuttle Bus Tickets</h3>
                    <br/>

                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="BusNo">Bus Number</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="BusNo" 
                            placeholder="190"
                            onChange={(event)=>{
                                setBusNo(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>


                    <br/>

                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="BusRoute">Bus Route</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="BusRoute" 
                            placeholder="Colombo - Horana"
                            onChange={(event)=>{
                                setBusRoute(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>
                    

                    <br/><br/>


                    <h3>Payment Details</h3>
                    
                    <br/>

                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="CardNo">Card Number</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="CardNo" 
                            placeholder="0123456789"
                            onChange={(event)=>{
                                setCardNo(event.target.value);
                            }}
                            required maxlength="10"
                        />
                        </div>
                    </div>

                    <br/>
                    
                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="CardHolderName">Card Holder Name</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="CardHolderName" 
                            placeholder="Ann Mary"
                            onChange={(event)=>{
                                setCardHolderName(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>

                    <br/>
                    
                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="ExpireDate">Expire Date</label>

                        <div class="col-sm-10">
                        <input 
                            type="date" 
                            className="form-control" 
                            id="ExpireDate" 
                            onChange={(event)=>{
                                setExpireDate(event.target.value);
                            }}
                            required
                        />
                        </div>
                    </div>

                    <br/>
                    
                    <div class="row">
                        <label htmlFor="Option" class="col-sm-2 col-form-label" for="SecurityCode">Security Code</label>

                        <div class="col-sm-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="SecurityCode" 
                            placeholder="1234"
                            onChange={(event)=>{
                                setSecurityCode(event.target.value);
                            }}
                            required maxlength="4"
                        />
                        </div>
                    </div>

                    
                    
                    <br/><br/><br/>

                    
                

                    
                    
                    <br/>

                    <div className="Submitbtndiv">
                        <button type="submit" className="Submitbtn">Submit</button>
                    </div>
                    
                </form>

                <div className="GoBackdiv">
                        <a href="/homeRishma"><button type="" className="GoBack" >Go Back</button></a>
                </div>
            
        </div>


    )

}

