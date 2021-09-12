import React from 'react';
import axios from 'axios';
import TableRow from './TableRow.js';
import {Link} from 'react-router-dom';
import logo from './reportimg.jpg';

function ReportKaveesha(){

    const logosize={
        width:'100%',
        height:'100%'
    }


return(
        <div className="container">
            
                <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                <Link to="/show" className="navbar-brand">Allot Parking Spaces</Link>
                </div>
                <div className="container">
                <Link to="/addp" className="navbar-brand">Add New Slot</Link>
                </div>
                <div className="container">
                <Link to="/retrieve" className="navbar-brand">Reports</Link>
                </div>
                </nav>
                </div>


                <div class="row" style={{marginTop:50}}>


<div class="col-md-6 mb-4">


  <div class="card gradient-card">

      <div class="card-image" >
          <img style={logosize} src={logo}/> 

      </div>
      <div>
        <h4 class="text-uppercase font-weight-bold my-4"><center>Details</center></h4>
        <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
      </div>

  </div>


</div>


<div class="col-md-6 mb-4">


<div class="card gradient-card">

<div class="card-image" >
    <img style={logosize} src={logo}/> 

</div>
<div>
  <h4 class="text-uppercase font-weight-bold my-4">Details</h4>
  <p class="text-muted" align="justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam vel dolores qui, necessitatibus aut eaque magni mollitia tenetur molestiae sit quae quos quaerat amet exercitationem atque animi odio.</p>
</div>

</div>

  </div>


</div>
 

  </div>



              

)         

}

export default ReportKaveesha;