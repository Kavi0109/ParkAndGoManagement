import React,{Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow.js';
import {Link} from 'react-router-dom';

export default class showparking extends Component{
    constructor(props){
        super(props);
        this.state = {parking : []};
    }


    componentDidMount(){
        axios.get("/parking/").then(response=>{
            this.setState({parking : response.data});
        })
        .catch(function(error){
            console.log(error);
        })
    }

    tabRow(){
        return this.state.parking.map(
            function (object,i){
                return <TableRow obj={object} key={i}/>;
            });
    }    

    render(){
        return(
            <div className="container">
                <br></br>
                <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                <Link to="/show" className="navbar-brand">Allot Parking Spaces</Link>
                </div>
                <div className="container">
                <Link to="/add" className="navbar-brand">Add New Slot</Link>
                </div>
                <div className="container">
                <Link to="/reportKaveesha" className="navbar-brand">Reports</Link>
                </div>
                </nav>
                </div>
                <h3 style={{marginTop:20}} align="center">Car Parking Report</h3>
                <table className="table table-striped table-bordered table-hover table-condensed" style={{marginTop:20}}>
                    <thead class="table-primary">
                        <tr>
                        <th><center>Type</center></th>
                        <th><center>Slot No</center></th>
                        <th><center>Slot Size</center></th>
                        <th><center>Plate No</center></th>
                        <th><center>Customer Reg ID</center></th>
                        <th><center>Entry Date and Time</center></th>
                        <th><center>Description</center></th>
                        <th colSpan="2"><center>Action</center></th>                     
                       </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>

                </table>
            </div>
        );
    }

}
    