import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class GetLeave extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.obj.employeeNo}</td>
                <td>{this.props.obj.fromDate}</td>
                <td>{this.props.obj.noOfDays}</td>
                <td>{this.props.obj.reason}</td>
                <td><center>New</center></td>
                {/* <td>
                    <Link className="edit-link" to={"/get/" + this.props.obj._id}>
                        Edit
                    </Link>
                   
                </td> */}
            </tr>
        );
    }
}
