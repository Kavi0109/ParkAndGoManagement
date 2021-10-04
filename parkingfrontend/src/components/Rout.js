import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import { useHistory } from "react-router-dom";

function Rout() {
    const history = useHistory();
    const [routes, setRoute] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:8070/route/get')
        .then(res =>{
          setRoute(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
    }, [])

        //Deleting
        const deleteClick = (id) =>{
          if(window.confirm('Are you sure?')){
            //console.log(id)
            fetch('http://localhost:8070/route/delete/' + id,{
              method: 'DELETE'
            }).then(()=>{
              history.go('/viewroutes')
            })
          }
        }
    

    return (
      <div>

        <div>
        <h2 className="titleview">
            Recently Added Routes
        </h2>
       
      
      <div className="topbartrans">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="addnewbus">
  <a class="navbar-brand" href="#">Routes</a>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <div className="addbuttonbus">
        <Link to="/addnewroutes">
      <button  id="routebtn" type="button" class="btn btn-primary">Add New Route</button>
      </Link>
      </div>
      </li>

    </ul>
    <div className="searchbartrans">
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={
          event => {setSearchTerm(event.target.value)}

      }/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
  </div>
</nav>

      </div>
      <div className="transportables">
        <table class="table">

  <thead>
    <tr  id="headrowroute">
      <th scope="col">Route ID</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Departure Time</th>
      <th scope="col">Bus ID</th>
      <th scope="col">Driver ID</th>
      <th scope="col">Conductor ID</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {routes.filter((val)=> {
      if (searchTerm== ""){
        return val;
      } else if  (val.route_Id.toLowerCase().includes(searchTerm.toLowerCase())){

        return val;

      } else if (val.from.toLowerCase().includes(searchTerm.toLowerCase())){

        return val;

      } else if (val.to.toLowerCase().includes(searchTerm.toLowerCase())){

        return val;

      } else if (val.bus_Id.toLowerCase().includes(searchTerm.toLowerCase())){

        return val;

      } else if (val.driver_Id.toLowerCase().includes(searchTerm.toLowerCase())){

        return val;

      } else if (val.conductor_Id.toLowerCase().includes(searchTerm.toLowerCase())){

        return val;

      }
    }).map(routes=>(
    <tr>
      <th  id="td-type1">{routes.route_Id}</th>
      <td>{routes.from}</td>
      <td>{routes.to}</td>
      <td>{routes.dep_time}</td>
      <td>{routes.bus_Id}</td>
      <td>{routes.driver_Id}</td>
      <td>{routes.conductor_Id}</td>
      <td >
      
      <div className="icon-table">
          <Link to={"updateroute/"+routes.route_Id}>
          <i class="fas fa-pen-alt"></i>
          </Link>
          
    
          <a onClick={()=> deleteClick(routes.route_Id)}>
          <i class="fas fa-trash-alt"></i>
          </a>
          </div>
      
      </td>
    </tr>
    ))}
  </tbody>
</table>

</div>
       </div>
      </div>
    );
  }
  
  export default Rout;