import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import GetLeave from './GetLeave';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import logo from './B&W.png';
import blue from './Images/Blue.jpg';


export default class AllLeaves extends Component {

  constructor(props) {
    super(props)
    this.state = {
      leaves: []
    };
  }

  exportPDF = () => {



    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape


    const marginLeft = 150;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);


    const title = "Leaves Report";
    const title2="Monthly Leaves Report for Month of October 2021"
    const headers = [["Emaployee No", "From Date", "No Of Days", "Reason"]];

    const data = this.state.leaves.map(elt=> [elt.employeeNo, elt.fromDate, elt.noOfDays, elt.reason]);

    let content = {

      startY: 260,
      head: headers,
      body: data

    };


    doc.addImage(blue,'PNG',230,60,120,100)
    doc.setTextColor(100);
    doc.setFontSize(13);
    doc.text(title, 250,200);
    doc.setTextColor(150);
    doc.setFontSize(13);
    doc.text(title2, marginLeft, 220);
    doc.autoTable(content);
    doc.save("Monthy Leaves Report.pdf")

  }
  
  componentDidMount() {
    axios.get("/leave/l")
      .then(res => {
        this.setState({
          leaves: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.leaves.map((res, i) => {
      return <GetLeave obj={res} key={i} />;
    });
  }

  myFunction() {
    var input, filter, table, tr, td, i, txtValue,td2;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable2");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }         
    }
  }

  render() {
    return (
      <div>
       <div id="home">  
    <div className="table-wrapper">
    
     <center> <h5 style={{color:"#1b7ced"}}> Leave Report</h5></center><hr/>
     <div class="SearchPadding" style={{marginLeft:"100px"}}> 
				<form action="" class="searchForm">
				<input class="searchTxt" type="text" id="myInput2" onKeyUp={this.myFunction} placeholder="Search.." name="search" />
				<button type="submit" class="searchBT">Search</button> 
				</form> <br/> <br/>
			</div>
      <Table striped bordered hover id="myTable2">
        <thead>
          <tr>
            <th>Employee No</th>
            <th>From Date</th>
            <th>No Of Days</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      </div>
      <br/><br/><br/>
          <button onClick={() => this.exportPDF()} className="Btn7" style={{marginRight:"20px", marginLeft:"120px"}}>Download Report</button>
          <Link className="Btn7" to="/home">
                        Cancel
                    </Link><br/><br/>
    </div>
    
    </div>
    
    );
  }
}