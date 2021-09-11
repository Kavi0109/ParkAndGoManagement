import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import GetSalary from './GetSalary';


export default class AllSalaries extends Component {

  constructor(props) {
    super(props)
    this.state = {
      salaries: []
    };
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


  render() {
    return (
    <div id="rep1"><center>
        <div className="table-wrapper"> 
           <h5> Salary Report</h5><hr/>
           <div class="SearchPaddng">  
				<form action="" class="searchForm">
				<input class="searchTxt" type="text" placeholder="Search.." name="search" />
				<button type="submit" class="searchBT">Search</button>
				</form>
			</div>
          
          <Table striped bordered hover>
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
        </div></center>
        </div>);
  }
}