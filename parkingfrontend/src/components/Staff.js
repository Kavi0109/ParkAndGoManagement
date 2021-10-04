import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios  from 'axios';
import { useHistory } from "react-router-dom";

function Staff() {
    const history = useHistory();
    const [staffs, setStaffs] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(()=>{
      axios.get('http://localhost:8070/staff/get')
        .then(res =>{
            console.log(res)
          setStaffs(res.data)
        })
        .catch(err =>{
          console.log(err)
        })
    }, [])

    //Deleting
        const deleteClick = (id) =>{
          if(window.confirm('Are you sure?')){
            //console.log(id)
            fetch('http://localhost:8070/staff/delete/' + id,{
              method: 'DELETE'
            }).then(()=>{
              history.go('/viewstaff')
            })
          }
        }

    return (
        <div>
        <div>
        <h2 className="titleview">
            Recently Added Staff
        </h2>
       
      
      <div className="topbartrans">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="addnewbus">
  <a class="navbar-brand" href="#">Staff</a>
  </div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <div className="addbuttonbus">
        <Link to="/addnewstaffs">
      <button  id="staffbtn" type="button" class="btn btn-primary">Add New Member</button>
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
    <tr id="headrowstaff">
      <th scope="col">Staff Member ID</th>
      <th scope="col">Name</th>
      <th scope="col">Type</th>
      <th scope="col">Phone No.</th>
      <th scope="col">Registered Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {staffs.filter((val)=> {
      if (searchTerm== ""){
        return val;
      } else if  (val.stm_Id.toLowerCase().includes(searchTerm.toLowerCase())){

        return val;

      } else if  (val.name.toLowerCase().includes(searchTerm.toLowerCase())){

        return val;

      }else if  (val.date_Reg.toLowerCase().includes(searchTerm.toLowerCase())){

        return val;

      } 
    }).map(staffs=>(
    <tr>
      <th id="td-type1">{staffs.stm_Id}</th>
      <td >{staffs.name}</td>
      <td>{staffs.type}</td>
      <td>{staffs.phone}</td>
      <td>{staffs.date_Reg}</td>
      <td >

          <div className="icon-table">
          <Link to={"updatestaff/"+staffs.stm_Id}>
          <i class="fas fa-pen-alt"></i>
          </Link>
          
    
          <a onClick={()=> deleteClick(staffs.stm_Id)}>
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
  
  export default Staff;