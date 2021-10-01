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
                window.setTimeout(function () {
                    window.location.href = "/";
                  }, 1000);
               
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

                  
                    <Link className="edit-link" to={"/get/" + this.props.obj._id}>
                        Edit
                    </Link>

                    <Button onClick={this.deleteSalary} size="sm" variant="danger">Delete</Button>


                    

                    
                </td>
            </tr>
        );
    }
}
