import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteParking = this.deleteParking.bind(this);
    }

    deleteParking() {
        axios.delete('/parking/delete/' + this.props.obj._id)
            .then((res) => {
                alert("Parking Slot Successfully Deleted!!")
                console.log('Parking successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })

        }

    render(){
        return(
        
                <tr>
                    
                    <td>
                        {this.props.obj.Option}
                    </td>
                    
                    <td>
                        {this.props.obj.sno}
                    </td>
                    
                    <td>
                        {this.props.obj.ssize}
                    </td>
                    
                    <td>
                        {this.props.obj.cno}
                    </td>
                    
                    <td>
                        {this.props.obj.rno}
                    </td>
                    
                    <td>
                        {this.props.obj.dt}
                    </td>
                    
                    <td>
                        {this.props.obj.des}
                    </td>
                    
                    <td>
                        <Link to={"/getp/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                    </td>
                    <td>
                    <button onClick={this.deleteParking} className="btn btn-primary">Delete</button>
                    </td>
                    
                </tr>
            
        );
    }
}

export default TableRow;