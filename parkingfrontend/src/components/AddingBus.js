import React, { useState } from 'react';

import bus_vec from "../assets/bus.png"
import "./sayuru.css";

function AddingBus() {
    const [bus_Id,  setBusId] = useState(" ");
    const [name, setName] = useState(" ");
    const [no_Plate, setNoPlate] = useState(" ");
    const [owner_Name, setOwnerName] = useState(" ");
    const [date_Rented, setDateRented] = useState(" ");
    const [rental_Rem, setRentalRem] = useState(" ");
    const [phone_No, setPhoneNo] = useState(" ");

    return (
      <div>
          
          <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src={bus_vec} alt=""/>
                        <h3>Busses</h3>
                        <p>The shuttles we use to transport our employees</p>
                       
                    </div>
                    
                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Adding a new bus</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label class="form-label">Bus ID</label>
                                            <input type="text" class="form-control" placeholder="Bus ID" onChange={(e)=>{
                                                
                                            }}  required />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Bus Name</label>
                                            <input type="text" class="form-control" placeholder="Bus Name" defaultvalue="" />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">No. Plate</label>
                                            <input type="text" class="form-control" placeholder="Number Plate" defaultvalue="" />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Owner's Name</label>
                                            <input type="text" class="form-control"  placeholder="Owner's Name" defaultvalue="" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label class="form-label">Date Rented</label>
                                            <input type="date" class="form-control" defaultvalue="" />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Rental Remaining</label>
                                            <input type="date" class="form-control"  defaultvalue="" />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Contact Number</label>
                                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Contact Number*" defaultValue="" />
                                        </div>
        
                                       <a href="/viewbusses"> <input type="submit" class="btnRegister"  value="Add"/></a>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>

                </div>

            </div>


      </div>
    )
    }
  
  export default AddingBus;