import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';


export default class UpdateBooking extends Component {

  constructor(props) {
    super(props)

    this.onChangeBookingID = this.onChangeBookingID.bind(this);
    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeContactnumber = this.onChangeContactnumber.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangePlateNumber = this.onChangePlateNumber.bind(this);
    this.onChangeVehicleModel = this.onChangeVehicleModel.bind(this);
    this.onChangeEntryDate = this.onChangeEntryDate.bind(this);
    this.onChangeExitDate = this.onChangeExitDate.bind(this);
    this.onChangeBusNo = this.onChangeBusNo.bind(this);
    this.onChangeBusRoute = this.onChangeBusRoute.bind(this);
    this.onChangeCardNo = this.onChangeCardNo.bind(this);
    this.onChangeCardHolderName = this.onChangeCardHolderName.bind(this);
    this.onChangeExpireDate = this.onChangeExpireDate.bind(this);
    this.onChangeSecurityCode = this.onChangeSecurityCode.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

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

  componentDidMount() {
    axios.get('/booking/edit-booking/' + this.props.match.params.id)
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

  onChangeBookingID(e) {
    this.setState({ BookingID: e.target.value })
  }

  onChangeFirstname(e) {
    this.setState({ Firstname: e.target.value })
  }

  onChangeLastname(e) {
    this.setState({ Lastname: e.target.value })
  }

  onChangeContactnumber(e) {
    this.setState({ Contactnumber: e.target.value })
  }

  onChangeAddress(e) {
    this.setState({ Address: e.target.value })
  }

  onChangePlateNumber(e) {
    this.setState({ PlateNumber: e.target.value })
  }

  onChangeVehicleModel(e) {
    this.setState({ VehicleModel: e.target.value })
  }

  onChangeEntryDate(e) {
    this.setState({ EntryDate: e.target.value })
  }

  onChangeExitDate(e) {
    this.setState({ ExitDate: e.target.value })
  }

  onChangeBusNo(e) {
    this.setState({ BusNo: e.target.value })
  }

  onChangeBusRoute(e) {
    this.setState({ BusRoute: e.target.value })
  }

  onChangeCardNo(e) {
    this.setState({ CardNo: e.target.value })
  }

  onChangeCardHolderName(e) {
    this.setState({ CardHolderName: e.target.value })
  }


  onChangeExpireDate(e) {
    this.setState({ ExpireDate: e.target.value })
  }


  onChangeSecurityCode(e) {
    this.setState({ SecurityCode: e.target.value })
  }









  onSubmit(e) {
    e.preventDefault()

    const BookingObject = {
      
      BookingID:this.state.BookingID,
      Firstname: this.state.Firstname,
      Lastname: this.state.Lastname,
      Contactnumber: this.state.Contactnumber,
      Address: this.state.Address,
      PlateNumber: this.state.PlateNumber,
      VehicleModel: this.state.VehicleModel,
      EntryDate: this.state.EntryDate,
      ExitDate: this.state.ExitDate,
      BusNo: this.state.BusNo,
      BusRoute: this.state.BusRoute,
      CardNo: this.state.CardNo,
      CardHolderName: this.state.CardHolderName,
      ExpireDate: this.state.ExpireDate,
      SecurityCode: this.state.SecurityCode


    };

    axios.put('/booking/update-booking/' + this.props.match.params.id, BookingObject)
      .then((res) => {
        console.log(res.data)
        console.log('Booking successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Student List 
    this.props.history.push('/')
  }


  render() {
    return(
      <div className ="container">

        <Form onSubmit={this.onSubmit}>

          <br/>
          <h2>YOUR PARKING DETAILS</h2>
          <h6>Please fill in your details below for new parking slot booking</h6>

          <br/><br/>


          <div class="row">
            <Form.Group controlId="BookingID">
              <Form.Label>Booking ID</Form.Label>
                <Form.Control type="text" value={this.state.BookingID} onChange={this.onChangeBookingID} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="BookingID"  
                    
                    />
                </div>
            </Form.Group>        
          </div>

          <br/>


          <div class="row">
            <Form.Group controlId="Firstname">
              <Form.Label >First Name</Form.Label>
                <Form.Control type="text" value={this.state.Firstname} onChange={this.onChangeFirstname} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="Firstname" 
                    
                    />
                </div>
                  
            </Form.Group>
          </div>

          <br/>



          <div class="row">
            <Form.Group controlId="Firstname">
              <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={this.state.Lastname} onChange={this.onChangeLastname} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="Lastname" 
                    
                  />
                </div>
            </Form.Group>
          </div>


          <br/>


          <div class="row">
            <Form.Group controlId="Contactnumber">
              <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" value={this.state.Contactnumber} onChange={this.onChangeContactnumber} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="Contactnumber" 
                    
                  />
                </div>
                  
            </Form.Group>
          </div>
          
          <br/>


          <div class="row">
            <Form.Group controlId="Address">
              <Form.Label>Address</Form.Label>
                <Form.Control type="text" value={this.state.Address} onChange={this.onChangeAddress} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="Address" 
                    
                  />
                </div>
                  
            </Form.Group>
          </div>



          <br/><br/><br/>

          <h3>Vehicle Details</h3>
                
          <br/>

          <div class="row">
            <Form.Group controlId="PlateNumber">
              <Form.Label>Licence Plate Number</Form.Label>
                <Form.Control type="text" value={this.state.PlateNumber} onChange={this.onChangePlateNumber} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="PlateNumber" 
                    
                  />
                </div>
                  
            </Form.Group>
          </div>

          <br/>


          <div class="row">
            <Form.Group controlId="VehicleModel">
              <Form.Label>Vehicle Model</Form.Label>
                <Form.Control type="text" value={this.state.VehicleModel} onChange={this.onChangeVehicleModel} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="VehicleModel" 
                    
                  />
                </div>
                    
            </Form.Group>       
          </div>

                
          <br/><br/><br/>

          <h3>Entry/Exit Date Details</h3>
                
          <br/>

          <div class="row">
            <Form.Group controlId="EntryDate">
              <Form.Label>Entry Date</Form.Label>
                <Form.Control type="text" value={this.state.EntryDate} onChange={this.onChangeEntryDate} />
                <div class="col-sm-10">
                  <input 
                    type="date" 
                    className="form-control" 
                    id="EntryDate" 
                    
                  />
                </div>
                    
            </Form.Group>
          </div>
                
                <br/>

          <div class="row">
            <Form.Group controlId="ExitDate">
              <Form.Label>Exit Date</Form.Label>
                <Form.Control type="text" value={this.state.ExitDate} onChange={this.onChangeExitDate} />
                <div class="col-sm-10">
                  <input 
                    type="date" 
                    className="form-control" 
                    id="ExitDate" 
                    
                  />
                </div>
                  
            </Form.Group>
          </div>
                
          <br/>


          <h3>Shuttle Bus Tickets</h3>

          <div class="row">
            <Form.Group controlId="BusNo">
              <Form.Label>Bus Number</Form.Label>
                <Form.Control type="text" value={this.state.BusNo} onChange={this.onChangeBusNo} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="BusNo" 
                    
                  />
                </div>
                  
            </Form.Group>
          </div>


          <br/>

          <div class="row">
            <Form.Group controlId="BusRoute">
              <Form.Label>Bus Route</Form.Label>
                <Form.Control type="text" value={this.state.BusRoute} onChange={this.onChangeBusRoute} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="BusRoute" 
                    
                  />
                </div>
                    
            </Form.Group>
          </div>
                

          <br/><br/>


          <h3>Payment Details</h3>
                
          <br/>

          <div class="row">
            <Form.Group controlId="CardNo">
              <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" value={this.state.CardNo} onChange={this.onChangeCardNo} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="CardNo" 
                    
                  />
                </div>
                    
            </Form.Group>
          </div>

          <br/>
                
          <div class="row">
            <Form.Group controlId="CardHolderName">
              <Form.Label>Card Holder Name</Form.Label>
                <Form.Control type="text" value={this.state.CardHolderName} onChange={this.onChangeCardHolderName} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="CardHolderName" 
                    
                  />
                </div>
                   
            </Form.Group>
          </div>

          <br/>
                
          <div class="row">
            <Form.Group controlId="ExpireDate">
              <Form.Label>Expire Date</Form.Label>
                <Form.Control type="text" value={this.state.ExpireDate} onChange={this.onChangeExpireDate} />
                <div class="col-sm-10">
                  <input 
                    type="date" 
                    className="form-control" 
                    id="ExpireDate" 
                    
                  />
                </div>
                  
            </Form.Group>
          </div>

          <br/>
                
          <div class="row">
            <Form.Group controlId="SecurityCode">
              <Form.Label>Security Code</Form.Label>
                <Form.Control type="text" value={this.state.SecurityCode} onChange={this.onChangeSecurityCode} />
                <div class="col-sm-10">
                  <input 
                    type="text" 
                    lassName="form-control" 
                    id="SecurityCode" 
                    
                    
                  />
                </div>
                  
            </Form.Group>
          </div>
                
          <br/><br/><br/>

                
               

                
                
          <br/>

          
          <Button type="submit" className="btn btn-primary" variant="danger" size="lg" block="block">Update Booking</Button>
          

        </Form>

      </div>

    )
  }
}

/*
return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>);
*/