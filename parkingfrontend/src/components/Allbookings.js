
import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Getbooking from './Getbooking';
import Button from 'react-bootstrap/Button';
import './btn.css'
import jsPDF from 'jspdf';
import logo from './B&W.png';
import "jspdf-autotable"



export default class Allbookings extends Component {
  
  constructor(props) {

    //retrieve
    super(props)
    this.state = {
      bookings: []
    };
  }






  //Report download
  exportPDF = () => {

    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "Parking Slot Booking Report";
    const title2="Monthly Slot Booking Report for Month of October 2021"
    const headers = [["Booking ID", "First name","Contact number" ,"Plate Number", "Vehicle Model" , "Entry Date","BusNo","BusRoute"]];

    const data = this.state.bookings.map(elt=> [elt.BookingID, elt.Firstname, elt.Contactnumber, elt.PlateNumber, elt.VehicleModel, elt.EntryDate, elt.BusNo, elt.BusRoute]);

    let content = {

      startY: 200,
      head: headers,
      body: data

    };

    doc.addImage(logo,'PNG',65,20,100,100)
    doc.text(title, marginLeft,140);
    doc.text(title2, marginLeft, 160);
    doc.autoTable(content);
    doc.save("Monthy Parking Slot Booking Report.pdf")

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

  //data would be retrieve into a table by this datatable function
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

        <button onClick={() => this.exportPDF()} className="DownloadBtn">Download PDF</button>

        <a href="/homeRishma">
          <button className="Back">Back</button>
        </a><br/><br/><br/>

      </div>
    );
  }
}

