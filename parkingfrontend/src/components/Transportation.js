import React from 'react';
import Bus from './Bus';
import AddingBus from './AddingBus';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import "./sayuru.css";


function Transportation() {
    return (
        <Router>
      <div className="Transportation">
         


         
          <div class="container">
    <div class="row">
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Current Shuttles</h6>
                    <h2 class="text-right"><i class="fa fas fa-bus f-left"></i><span className="card-text">10</span></h2>
                    <a href="/viewbusses" className="card-view">View</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Routes</h6>
                    <h2 class="text-right"><i class="fas fa-route f-left"></i><span>20</span></h2>
                    <a href="/viewroute" className="card-view">View</a>
                </div>
            </div>
        </div>
        
        <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
                <div class="card-block">
                    <h6 class="m-b-20">Staff Members</h6>
                    <h2 class="text-right"><i class="fas fa-users f-left"></i><span>100</span></h2>
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

      </div>
      </Router>
    );
  }
  
  export default Transportation;
  