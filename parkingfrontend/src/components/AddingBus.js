import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

import bus_vec from "../assets/bus.png"



function AddingBus() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    var ren_day = (yyyy+5) + '-' + mm + '-' + dd;
    //document.write(today)

    const history = useHistory();
    const allx = document.getElementsByTagName
     

    const [bus_Id,  setBusId] = useState(" ");
    const [name, setName] = useState(" ");
    const [no_Plate, setNoPlate] = useState(" ");
    const [owner_Name, setOwnerName] = useState(" ");
    const [date_Rented, setDateRented] = useState(" ");
    const [rental_Rem, setRentalRem] = useState(" ");
    const [phone_No, setPhoneNo] = useState(" ");

    const busid = document.getElementById('busid')
    const busname = document.getElementById('busname')
    const noplate = document.getElementById('noplate')
    const ownername = document.getElementById('ownername')
    const daterented = document.getElementById('daterented')
    const rentalrem = document.getElementById("rentalrem")
    const phoneno = document.getElementById('phoneno')
    const errorElement = document.getElementById('error')

    function sendBus(e){

        


        
        e.preventDefault();
        
        var newBus = {
            bus_Id, 
            name,
            no_Plate,
            owner_Name,
            date_Rented,
            rental_Rem,
            phone_No
        }
        
        // Adding
        axios.post("http://localhost:8070/bus/add", newBus).then(()=>{
            alert("Bus Added")
            
            history.push("/viewbusses")
            
            
        }).catch((err)=>{
            alert(err);
        })


    }


    return (
      <div>
          <div className="transportation-form">
          <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src={bus_vec} alt=""/>
                        <h3>Busses</h3>
                        <p>The shuttles we use to transport our employees</p>
                       
                    </div>
                    
                    <div class="col-md-9 register-right">
                    <form className="form-shape" type='submit' onSubmit={sendBus}>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Adding a new bus</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="validationCustom01" class="form-label">Bus ID</label>
                                            <input id="busid" type="text" class="form-control" placeholder="Bus ID" onChange={(e)=>{
                                                
                                                setBusId(e.target.value);
                                                e.target.setCustomValidity('');
                                               

                                            }} required onInvalid={(e) => { 
                                                
                                                    e.target.setCustomValidity('Please enter a unique valid Bus ID')

                                              
                                                
                                             }}/>
                                            
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Bus Name</label>
                                            <input id="busname" type="text" class="form-control" placeholder="Bus Name" onChange={(e)=>{
                                                
                                                setName(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Bus Name cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">No. Plate</label>
                                            <input required id="noplate"  type="text" class="form-control" placeholder="Number Plate" onChange={(e)=>{
                                                
                                                setNoPlate(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('No Plate cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Owner's Name</label>
                                            <input required id="ownername"  type="text" class="form-control"  placeholder="Owner's Name" onChange={(e)=>{
                                                
                                                setOwnerName(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity("Owner's name cannot be empty")

                                          
                                            
                                         }}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label class="form-label">Date Rented</label>
                                            <input required id="daterented"  min={today}  type="date" class="form-control" onChange={(e)=>{
                                                
                                                setDateRented(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Please Enter a Valid Date')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Rental Remaining</label>
                                            <input required id="rentalrem" min={ren_day}  type="date" class="form-control" onChange={(e)=>{
                                                
                                                setRentalRem(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Rental Remaining should not be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Contact Number</label>
                                            <input required id="phoneno" type="number" maxlength="10" class="form-control" placeholder="Ex: 773675637" onChange={(e)=>{
                                                
                                                setPhoneNo(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('The number your entered is not valid')

                                          
                                            
                                         }}
                                         
                                         />
                                        </div>
        
                                       <input type="submit" class="btnRegister"  value="Add"/>

                                       
                                    </div>
                                    
                                </div>
                            </div>
                           
                        </div>
                        </form>
                    </div>
                   
                </div>
                

            </div>
</div>

      </div>
    )
    }
  
  export default AddingBus;