import React from 'react';
import { Link } from 'react-router-dom';
import "./sayuru.css";

function Bus() {
    return (
      <div>
       
        <div className="container">
        <nav class="navbar navbar-light bg-light justify-content-between">
  <Link to="/addnewbus">
  <a class="add-new-text">Add New Bus  <i class="far fa-plus-square"></i></a>
  </Link>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    
  </form>
</nav>
</div>

    
    

       <form method="POST">
       <div class="limiter">
           
		<div class="container-table100">
            
			<div class="wrap-table100">
				<div class="table100">
					<table>
						<thead>
							<tr class="table100-head">
								<th class="column1">Bus ID</th>
								<th class="column2">Bus Name</th>
								<th class="column3">No Plate</th>
								<th class="column4">Owner's Name</th>
								<th class="column5">Date Rented</th>
								<th class="column6">Rental Remaining</th>
                                <th class="column6">Action</th>
							</tr>
						</thead>
						<tbody>
								<tr>
									<td class="column1">2017-09-29 01:22</td>
									<td class="column2">200398</td>
									<td class="column3">iPhone X 64Gb Grey</td>
									<td class="column4">$999.00</td>
									<td class="column5">1</td>
									<td class="column6">$999.00</td>
                                   <div className="actions-slack">
                                    <td>
                                        <a href="#" className="btn-border-shadow update">
                                        <span className="text-gradient"><i className="fas fa-pencil-alt"/></span>
                                    </a>
                                    <a href="#" className="btn-border-shadow delete">
                                        <span className="text-gradient"><i className="fas fa-times"/></span>
                                    </a>
                                    </td>
                                    </div>
								</tr>
								
								
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
    </form>
      </div>
    );
  }
  
  export default Bus;