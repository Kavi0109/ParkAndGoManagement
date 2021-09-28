import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class BookingReport extends Component {

    constructor(props) {
      super(props)
    
  
      // State
        this.state = {
        BookingID:'',
        Firstname:'',
        Lastname:'',
        Contactnumber:'',
        Address:'',
        PlateNumber:'',
        VehicleModel:'',
        EntryDate:'',
        ExitDate:'',
        BusNo:'',
        BusRoute:'',
        CardNo:'',
        CardHolderName:'',
        ExpireDate:'',
        SecurityCode:''
      }
    }
  
    
    print(){
      window.print();
    }
  
    componentDidMount() {
      axios.get("/booking/dis-booking/" + this.props.match.params.id)
        .then(res => {
          this.setState({
            BookingID:res.data.BookingID,
            Firstname:res.data.Firstname,
            Lastname:res.data.Lastname,
            Contactnumber:res.data.Contactnumber,
            Address:res.data.Address,
            PlateNumber:res.data.PlateNumber,
            VehicleModel:res.data.VehicleModel,
            EntryDate:res.data.EntryDate,
            ExitDate:res.data.ExitDate,
            BusNo:res.data.BusNo,
            BusRoute:res.data.BusRoute,
            CardNo:res.data.CardNo,
            CardHolderName:res.data.CardHolderName,
            ExpireDate:res.data.ExpireDate,
            SecurityCode:res.data.SecurityCode
          
          });
        })
        .catch((error) => {
          console.log(error);
        })
  
    }




    render(){
        return(
            <div>
            
                <div class="slip1">
                    
                    <center><div class="hd"><h4>PARK AND GO <br/>COLOMBO<br/>WESTERN PROVINCE</h4></div></center>
                    <center><h6 style={{color:"grey"}}>Parking Slot Booking</h6></center>
    
                    <br/>
                    <div class ="slip">    
                            <div class="row">
                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">BookingID</label>
                                </div>


                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>


                                <div style={{width:"36%"}}>
                                    <label for="id" id="Uid">{this.state.BookingID}</label>
                                </div>
                            </div>

                            <br/>

                            <div class="row">
                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">First name</label>
                                </div>


                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>

                                <div style={{width:"16%"}}>
                                    <label for="id" id="Uid">{this.state.Firstname}</label>
                                </div>
                            </div>

                            <br/>
            
                            <div class="row">
                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">Last Name</label>
                                </div>
                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>
                                <div style={{width:"36%"}}>
                                    <label for="id" id="Uid">{this.state.Lastname}</label>
                                </div>

                            </div>

                            <br/>

                            <div class="row">
                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">Contact Number</label>
                                </div>
                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>
                                <div style={{width:"16%"}}>
                                    <label for="id" id="Uid">{this.state.Contactnumber}</label>
                                </div>
                            </div>

                            <br/>
            
                    
                            <div class="row">
                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">Address</label>
                                </div>
                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>
                                <div style={{width:"36%"}}>
                                    <label for="id" id="Uid">{this.state.Address}</label>
                                </div>
                            </div>

                            <br/>

                            <div class="row">

                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">Plate Number</label>
                                </div>
                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>
                                <div style={{width:"36%"}}>
                                    <label for="id" id="Uid">{this.state.PlateNumber}</label>
                                </div>
                            </div>

                            <br/>
            
                            <div class="row">
                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">Vehicle Model</label>
                                </div>
                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>
                                <div style={{width:"36%"}}>
                                    <label for="id" id="Uid">{this.state.VehicleModel}</label>
                                </div>
                            </div>

                            <br/>


                            <div class="row">
                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">Entry Date</label>
                                </div>
                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>
                                <div style={{width:"36%"}}>
                                    <label for="id" id="Uid">{this.state.EntryDate}</label>
                                </div>
                            </div>

                            <br/>

                            <div class="row">
                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">Exit Date</label>
                                </div>
                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>
                                <div style={{width:"36%"}}>
                                    <label for="id" id="Uid">{this.state.ExitDate}</label>
                                </div>
                            </div>

                            <br/>


                            <div class="row">
                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">Bus No</label>
                                </div>
                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>
                                <div style={{width:"36%"}}>
                                    <label for="id" id="Uid">{this.state.BusNo}</label>
                                </div>
                            </div>

                            <br/>

                            <div class="row">
                                <div style={{width:"18%"}}> 
                                    <label for="id" class="m">Bus Route</label>
                                </div>
                                <div style={{width:"6%"}}>
                                    <label>:</label>
                                </div>
                                <div style={{width:"36%"}}>
                                    <label for="id" id="Uid">{this.state.BusRoute}</label>
                                </div>
                            </div>   
                    </div>

    
    
            
                </div>
                
            <center>
                <button onClick={this.print} className="Bookingslipbtn">
                    Print Booking slip
                </button>
            </center>

            <br/><br/><br/>
    
        </div>
        )
    }
  
}