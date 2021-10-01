import React,{Component, useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import gal2 from './gal2.jpg';
import gal3 from './backcar.jpg';
import {Link} from 'react-router-dom';

function ChooseReport(){


    return(

        <div className="container">

<div className="p-3 mb-2 bg-light text-dark " ><center>
            <h4 style={{marginTop:20}}><b><center>All Parking Reports</center></b></h4></center>
            </div>
<center>          
<table>
<tr>
  <td>
  <div className="card card-cascade">


<div className="view view-cascade overlay">
  <a href="retrieve"><img className="card-img-top" src={gal2} alt="Card image cap"/></a>
  <a >
    <div className="mask rgba-white-slight"></div>
  </a>
</div>


<div className="card-body card-body-cascade text-center">

  
  <h4 className="card-title"><strong>All Vehicles Parking Report</strong></h4>

  <h6 className="font-weight-bold indigo-text py-2">Parking details</h6>
 
  <p className="card-text">This report is consists with all parking data and you can download a pdf with that data.Although This report is isuued monthly and you can a clear idea regarding the cost.
  </p>


</div>

</div>

</td>

</tr>
</table>
</center>



        </div>



    )
}

export default ChooseReport;


/*<td>
<div className="card card-cascade">


  <div className="view view-cascade overlay">
    <a href="/calculate"><img className="card-img-top" src={gal3} alt="Card image cap"/></a>
    <a>
      <div className="mask rgba-white-slight"></div>
    </a>
  </div>

  
  <div className="card-body card-body-cascade text-center">

    
    <h4 className="card-title"><strong>Allocated And Remaining Slots Report</strong></h4>
  
    <h6 className="font-weight-bold indigo-text py-2">Web developer</h6>
   
    <p className="card-text">This report is consists with all parking data and you can download a pdf with that data .Although This report is isuued monthly and you can a clear idea regarding the cost.
  </p>

  </div>

</div></td>*/