import React,{useState} from "react";//importing the useState Hook from React
import axios from "axios"; //pass data between backend and frontend
import './btn.css'


export default function AddPayment(){

    const [CardNo,setCardNo] = useState("");
    const [CardHolderName,setCardHolderName] = useState("");
    const [ExpireDate,setExpireDate] = useState("");
    const [SecurityCode,setSecurityCode] = useState("");

    function sendData(event){

        event.preventDefault();

        const newPayment = {
            CardNo,
            CardHolderName,
            ExpireDate,
            SecurityCode
        }

        axios.post("/booking/addRishma",newBooking).then(()=>{
            
            alert("Payment Added")

            //load the page again after deleting the record
            window.setTimeout(function(){
                window.location.href="/addRishma";
            }, 1000);

        }).catch((err)=>{
            alert(err)
        })
    }

    return(
        <div className ="container">
            <form onSubmit={sendData}>
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

                    <div className="Submitbtndiv">
                        <button type="submit" className="Submitbtn"> Payment </button>
                    </div>
            </form>
        </div>
    )
    
}