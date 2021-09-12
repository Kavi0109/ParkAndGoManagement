import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './btn.css'



export default class getBooking extends Component {

    //Delete data
    constructor(props) {
        super(props);
        this.deleteBooking = this.deleteBooking.bind(this);
    }

    
    deleteBooking() {
        axios.delete('/booking/delete-booking/' + this.props.obj._id)
            .then((res) => {
                alert('Booking successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }



    render() {
        return (
            <tr>
                <td>{this.props.obj.BookingID}</td>
                <td>{this.props.obj.Firstname}</td>   
                <td>{this.props.obj.Contactnumber}</td>
                <td>{this.props.obj.Address}</td>
                <td>{this.props.obj.PlateNumber}</td>
                <td>{this.props.obj.VehicleModel}</td>
                <td>{this.props.obj.EntryDate}</td>
                <td>{this.props.obj.ExitDate}</td>
                <td>{this.props.obj.BusNo}</td>
                <td>{this.props.obj.BusRoute}</td>
               

                <td>
                    <Link to={"/edit-booking/" + this.props.obj._id}>
                        <button className="Updatebtn">Edit</button>
                    </Link>
                </td>

                
                <td><Button onClick={this.deleteBooking} size="sm" variant="danger" className="Deletebtn" >Delete</Button></td>
            </tr>
        );
    }
}