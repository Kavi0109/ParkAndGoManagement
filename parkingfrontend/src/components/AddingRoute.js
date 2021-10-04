import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

import route_vec from "../assets/route.png"

function AddingRoute() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    const history = useHistory();
    const allx = document.getElementsByTagName
     

    const [route_Id,  setRouteId] = useState(" ");
    const [from, setFrom] = useState(" ");
    const [to, setTo] = useState(" ");
    const [dep_time, setDepTime] = useState(" ");
    const [bus_Id, setBusId] = useState(" ");
    const [driver_Id, setDriverId] = useState(" ");
    const [conductor_Id, setConductorId] = useState(" ");

    const routeid = document.getElementById('routeid')
    const _from = document.getElementById('from')
    const _to = document.getElementById('to')
    const deptime = document.getElementById('deptime')
    const bid = document.getElementById('bid')
    const did = document.getElementById("did")
    const cid = document.getElementById('cid')
    const errorElement = document.getElementById('error')

    function sendRoute(e){

    


        
        e.preventDefault();
        
        var newRoute = {
            route_Id,
            from,
            to,
            dep_time,
            bus_Id,
            driver_Id,
            conductor_Id
        }
        
        // Adding
        axios.post("http://localhost:8070/route/add", newRoute).then(()=>{
            alert("Route Added")
            
            history.push("/viewroutes")
            
            
        }).catch((err)=>{
            alert(err);
        })


    }


    return (
      <div className="transportation-form">
          
          <div class="container register">
                <div class="row">
                    <div class="col-md-3 register-left-green">
                        <img src={route_vec} alt=""/>
                        <h3>Routes</h3>
                        <p>The way we use to transport our customers</p>
                       
                    </div>
                    
                    <div class="col-md-9 register-right-green">
                    <form className="form-shape" type='submit' onSubmit={sendRoute}>
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Adding a new route</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="validationCustom01" class="form-label">Route ID</label>
                                            <input id="routeid" type="text" class="form-control" placeholder="rou-xxx" onChange={(e)=>{
                                                
                                                setRouteId(e.target.value);
                                                e.target.setCustomValidity('');
                                               

                                            }} required onInvalid={(e) => { 
                                                
                                                    e.target.setCustomValidity('Please enter a unique, valid Route ID')

                                              
                                                
                                             }}/>
                                            
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">From</label>
                                            <input id="from" type="text" class="form-control" placeholder="City Name" onChange={(e)=>{
                                                
                                                setFrom(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('From cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                        <div class="form-group">
                                        <label class="form-label">To</label>
                                            <input required id="to"  type="text" class="form-control" placeholder="City Name" onChange={(e)=>{
                                                
                                                setTo(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('To cannot be empty')

                                          
                                            
                                         }} />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                        <label class="form-label">Departure Time</label>
                                            <input required id="deptime"  type="time" class="form-control" onChange={(e)=>{
                                                
                                                setDepTime(e.target.value);
                                                e.target.setCustomValidity('');

                                            }} onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Please Enter a Valid Time')

                                          
                                            
                                         }} />
                                       </div>
                                         
                                       <div class="form-group">
                                        <label class="form-label">Bus ID</label>
                                            <input id="bid" type="text" class="form-control" placeholder="bid-xxx" onChange={(e)=>{
                                                
                                                setBusId(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Bus ID cannot be empty')

                                          
                                            
                                         }} />
                                        </div>

                                        <div class="form-group">
                                        <label class="form-label">Driver ID</label>
                                            <input id="did" type="text" class="form-control" placeholder="did-xxx" onChange={(e)=>{
                                                
                                                setDriverId(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Driver ID cannot be empty')

                                          
                                            
                                         }} />
                                        </div>

                                        <div class="form-group">
                                        <label class="form-label">Conductor ID</label>
                                            <input id="cid" type="text" class="form-control" placeholder="cid-xxx" onChange={(e)=>{
                                                
                                                setConductorId(e.target.value);
                                                e.target.setCustomValidity('');

                                            }}  required onInvalid={(e) => { 
                                                
                                                e.target.setCustomValidity('Conductor ID cannot be empty')

                                          
                                            
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
  
  export default AddingRoute;