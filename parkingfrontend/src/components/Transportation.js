import React, { useEffect, useState } from 'react';
import Bus from './Bus';
import Rout from './Rout';
import Staff from './Staff';
import AddingBus from './AddingBus';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import AddingRoute from './AddingRoute';
import AddingStaff from './AddingStaff';
import UpdateBus from './UpdateBus';
import UpdateRoute from './UpdateRoute'
import UpdateStaff from './UpdateStaff';

import "./sayuru.css";

function Transportation() {

    
    // Length of the array of busses
    const [buscount, setBuscount] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8070/bus/get')
          .then(res =>{
            setBuscount(res.data.length)
          })
          .catch(err =>{
            console.log(err)
          })
      }, [])

      // Length of the array of routes
    const [routecount, setRoutecount] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8070/route/get')
          .then(res =>{
            setRoutecount(res.data.length)
          })
          .catch(err =>{
            console.log(err)
          })
      }, [])

       // Length of the array of staff
    const [staffcount, setStaffcount] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8070/staff/get')
          .then(res =>{
            setStaffcount(res.data.length)
          })
          .catch(err =>{
            console.log(err)
          })
      }, [])

    return (
        <Router>
      <div className="Transportation">
         


         
          <div class="container">
    <div class="row">
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Current Shuttles</h6>
                    
                    <h2 class="text-right"><i class="fa fas fa-bus f-left"></i><span className="card-text">{buscount}</span></h2>
                    
                    
                    <a href="/viewbusses" className="card-view">View</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Routes</h6>
                    <h2 class="text-right"><i class="fas fa-route f-left"></i><span>{routecount}</span></h2>
                    <a href="/viewroutes" className="card-view">View</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Staff Members</h6>
                    <h2 class="text-right"><i class="fas fa-users f-left"></i><span>{staffcount}</span></h2>
                    <a href="/viewstaff" className="card-view">View</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Daily Revenue</h6>
                    <h2 class="text-right"><i class="fas fa-dollar-sign f-left"></i><span>486</span></h2>
                    <a href="/viewrevenue" className="card-view">View</a>
                </div>
            </div>
        </div>
	</div>
</div>
<br/>
          <Route path="/viewbusses" component={Bus}/>
          <Route path="/addnewbus" component={AddingBus}/>
          <Route path="/updatebus/:id" component={UpdateBus}/>


          <Route path="/viewroutes" component={Rout}/>
          <Route path="/addnewroutes" component={AddingRoute}/>
          <Route path="/updateroute/:id" component={UpdateRoute}/>


          <Route path="/viewstaff" component={Staff}/>
          <Route path="/addnewstaffs" component={AddingStaff}/>
          <Route path="/updatestaff/:id" component={UpdateStaff}/>



      </div>
      </Router>
    );
  }
  
  export default Transportation;
  