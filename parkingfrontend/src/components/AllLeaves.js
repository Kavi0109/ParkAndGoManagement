import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';

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
    
    <div className="table-wrapper">
     <div id="home">
     <center> <h5> Leave Report</h5></center><hr/>
     <div class="SearchPadding">  
				<form action="" class="searchForm">
				<input class="searchTxt" type="text" placeholder="Search.." name="search" />
				<button type="submit" class="searchBT">Search</button>
				</form>
			</div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.DataTable()}
        </tbody>
      </Table>
      </div>
    </div>
    
    );
  }
}