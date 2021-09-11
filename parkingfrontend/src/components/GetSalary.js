
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class GetSalary extends Component {

    constructor(props) {
        super(props);
        this.deleteSalary = this.deleteSalary.bind(this);
    }

    deleteSalary() {
        axios.delete('/salary/delete/' + this.props.obj._id)
            .then((res) => {
                alert('Salary successfully deleted!')
               
            }).catch((error) => {
                console.log(error)
            })

            
    }
    
    render() {
        return (
            <tr>
                <td>{this.props.obj.employeeNo}</td>
                <td>{this.props.obj.salaryMonth}</td>
                <td>{this.props.obj.workingDays}</td>
                <td>{this.props.obj.basicPay}</td>
                <td>{this.props.obj.allowance}</td>
                <td>{this.props.obj.totDeduction}</td>
                <td>{this.props.obj.netPay}</td>
               
                
                <td>
                    
                    <Link className="slip-link" to={"/bet/" + this.props.obj._id}>
                        Payslip
                    </Link>

                    <Button onClick={this.deleteSalary} size="sm" variant="danger">Delete</Button>

                    <Link className="edit-link" to={"/get/" + this.props.obj._id}>
                        Edit
                    </Link>

                    

                    
                </td>
            </tr>
        );
    }
}

