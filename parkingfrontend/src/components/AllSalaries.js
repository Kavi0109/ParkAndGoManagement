import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import GetSalary from './GetSalary';
import {Link} from 'react-router-dom';
import jsPDF from 'jspdf';
import "jspdf-autotable";
import logo from './B&W.png';
import blue from './Images/Blue.jpg';




export default class AllSalaries extends Component {

  constructor(props) {
    super(props)
    this.state = {
      salaries: []
    };
  }

  exportPDF = () => {



    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape


    const marginLeft = 150;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);


    const title = "Salary Report";
    const title2="Monthly Salary Report for Month of October 2021"
    const headers = [["Emaployee No", "Salary Month", "Working Days", "Basic Pay" , "Allowance", "Total Deductions","Net Pay"]];

    const data = this.state.salaries.map(elt=> [elt.employeeNo, elt.salaryMonth, elt.workingDays, elt.basicPay, elt.allowance, elt.totDeduction, elt.netPay]);

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
    doc.save("Monthy Salary Report.pdf")

  }



  componentDidMount() {
    axios.get("/salary/")
      .then(res => {
        this.setState({
          salaries: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.salaries.map((res, i) => {
      return <GetSalary obj={res} key={i} />;
    });
  }


  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
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
    const mystyle={
      backgroundColor:"white"
    };
    return (
      <div id="rep1">

        <div className="table-wrapper"> 
       
   
           <center><h5 style={{color:"#1b7ced"}}> Salary Report</h5></center><hr/>
           
        <div class="SearchPaddng">  
				<form action="" class="searchForm">
				<input class="searchTxt" type="text" id="myInput" onKeyUp={this.myFunction} placeholder="Search.." name="search" />
				<button type="submit" class="searchBT">Search</button>
    
				</form>
			</div><br/><br/> 
          
          <Table striped bordered hover id="myTable">
            <thead>
              <tr>
                <th>Emaployee No</th>
                <th>Salary Month</th>
                <th>Working Days</th>
                <th>Basic Pay</th>
                <th>Allowance</th>
                <th>Total Deductions</th>
                <th>Net Pay</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
              {this.DataTable()}
            </tbody>
          </Table>
          <br/><br/><br/>
          <button onClick={() => this.exportPDF()} className="Btn7" style={{marginRight:"20px"}}>Download Report</button>
          <Link className="Btn7" to="/home">
                        Cancel
                    </Link><br/><br/>
        </div>
        </div>
       
        );
  }
}