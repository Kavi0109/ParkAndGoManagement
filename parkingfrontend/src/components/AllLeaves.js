import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom';
import GetLeave from './GetLeave';


export default class AllLeaves extends Component {

  constructor(props) {
    super(props)
    this.state = {
      leaves: []
    };
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


  render() {
    return (
      <div>
       <div id="home">  
    <div className="table-wrapper">
    
     <center> <h5 style={{color:"#1b7ced"}}> Leave Report</h5></center><hr/>
     <div class="SearchPadding" style={{marginLeft:"100px"}}> 
				<form action="" class="searchForm">
				<input class="searchTxt" type="text" placeholder="Search.." name="search" />
				<button type="submit" class="searchBT">Search</button>
				</form> <br/> <br/>
			</div>
      <Table striped bordered hover>
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
    </div>
    
    </div>
    
    );
  }
}