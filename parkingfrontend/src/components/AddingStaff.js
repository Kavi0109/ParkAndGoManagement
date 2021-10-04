import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

import stm_vec from "../assets/stm.png"

function AddingStaff() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    const history = useHistory();
    const allx = document.getElementsByTagName
     

    const [stm_Id, setStmId] = useState(" ");
    const [name, setName] = useState(" ");
    const [type, setType] = useState(" ");
    const [phone, setPhone] = useState(" ");
    const [date_Reg, setDateReg] = useState(" ");

    const busid = document.getElementById('busid')
    const busname = document.getElementById('busname')
    const noplate = document.getElementById('noplate')
    const ownername = document.getElementById('ownername')
    const daterented = document.getElementById('daterented')
    const rentalrem = document.getElementById("rentalrem")
    const phoneno = document.getElementById('phoneno')
    const errorElement = document.getElementById('error')

    function sendStaff(e){

    


        
        e.preventDefault();
        
        var newStaff = {
            stm_Id,
            name,
            type,
            phone,
            date_Reg
        }
        
        // Adding
        axios.post("http://localhost:8070/staff/add", newStaff).then((res)=>{
            console.log(res.data.error)
            if(res.data.error==undefined){
                alert("Staff Added")
                history.push("/viewstaff")
            }
            else{
                alert(res.data.error)
            }
            
            
            //
       
            
            
            
        }).catch((err)=>{
            alert(err);
        })


    }


    return (
      <div className="transportation-form">
          
          <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left-yellow">
                        <img src={stm_vec} alt=""/>
                        <h3>Staff</h3>
                        <p>Our staff, who engage with customers with safe</p>
                       
                    </div>
                    
                    <div class="col-md-9 register-right-yellow">
                    <form className="form-shape" type='submit' onSubmit={sendStaff}>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Adding a new staff member</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="validationCustom01" class="form-label">Staff Member ID</label>
                                            <input id="stmid" type="text" class="form-control" placeholder="STM ID" onChange={(e)=>{
                                                
                                                setStmId(e.target.value);
                                                e.target.setCustomValidity('');
                                               

                                            }} required onInvalid={(e) => { 
                                                
                                                    e.target.setCustomValidity('Please enter a unique valid Stm ID')

                                              
                                                
                                             }}/>
                                            
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Member Name</label>
                                            <input id="name" type="text" class="form-control" placeholder="Member Name" onChange={(e)=>{
                                                
                                                setName(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Name cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Type</label>
                                            <input required id="type"  type="text" class="form-control" placeholder="Driver or Conductor" onChange={(e)=>{
                                                
                                                setType(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('No Plate cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">Phone No:</label>
                                            <input required id="phone"  type="text" class="form-control"  placeholder="Eg: 773675637" onChange={(e)=>{
                                                
                                                setPhone(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity("Owner's name cannot be empty")

                                          
                                            
                                         }}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label class="form-label">Registering Date</label>
                                            <input required id="datereg" min={today}  type="date" class="form-control" onChange={(e)=>{
                                                
                                                setDateReg(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Please Enter a Valid Date')

                                          
                                            
                                         }} />
                                       
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
    )
    }
  
  export default AddingStaff;