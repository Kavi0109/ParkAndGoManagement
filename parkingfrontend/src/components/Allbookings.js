
import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Getbooking from './Getbooking';
import Button from 'react-bootstrap/Button';
import './btn.css'



export default class Allbookings extends Component {
  
  constructor(props) {

    //retrieve
    super(props)
    this.state = {
      bookings: []
    };
  }


  //retrieve data from database
  componentDidMount() {
    axios.get('/booking/allBooking')
      .then(res => {
        this.setState({
            bookings: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.bookings.map(
      function(object,i) {
        return <Getbooking obj={object} key={i} />;
      });
  }


  




  render() {
    return (
      <div className="table-wrapper">
        <br/><br/><br/><br/>
        <h2>All Booking Details</h2>

        <br/><br/>
        
        <div class="SearchPaddng">  
          <form action="" class="searchForm">
            <input class="searchTxt" type="text" placeholder="Search.." name="search" />
            <button type="submit" className="searchBTN">Search</button>
          </form>
			  </div>

        
        

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>First name</th>
              <th>Lastname</th>
              <th>Contact number</th>
              <th>Address</th>
              <th>Plate Number</th>
              <th>Vehicle Model</th>
              <th>Entry Date</th>
              <th>Exit Date</th>
              <th>BusNo</th>
              <th>BusRoute</th>
              <th>Update</th>
              <th>Delete</th>
              <th>Print Booking Details </th>

            </tr>
          </thead>
          <tbody>
            {this.DataTable()}
          </tbody>
        </Table>

        <a href="/homeRishma">
          <button className="Back">Back</button>
        </a><br/><br/><br/>

      </div>
    );
  }
}

/*
<th>CardNo</th>
<th>CardHolderName</th> 
<th>ExpireDate</th>  
<th>SecurityCode</th>
<th>Update</th>

*/