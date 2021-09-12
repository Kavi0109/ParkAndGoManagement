
import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Getbooking from './Getbooking';



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
    return this.state.bookings.map((res, i) => {
      return <Getbooking obj={res} key={i} />;
    });
  }


  




  render() {
    return (<div className="table-wrapper">
      <br/>
      <h3>All Booking Details</h3>
      

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>First name</th>
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

          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
    </div>);
  }
}