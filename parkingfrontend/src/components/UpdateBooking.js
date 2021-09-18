import React, { Component } from "react";
import axios from 'axios';


export default class UpdateBooking extends Component {

  constructor(props) {
    super(props);

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
      .catch(function(error) {
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
        alert('Booking successfully updated')
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to all bookings
    this.props.history.push('/allBooking')
  }


  render() {
    return(
      <div className ="container">

        <form onSubmit={this.onSubmit} style={{marginTop:100}}>

          <div className="form-group">
            <label htmlFor="BookingID">BookingID:</label><br/>
            <input type="text" className="form-control" value={this.state.BookingID} onChange={this.onChangeBookingID} />
          </div>
          
          <br/>

          <div className="form-group">
            <label htmlFor="Firstname">First Name:</label>
            <input type="text"  className="form-control" value={this.state.Firstname} onChange={this.onChangeFirstname} />
          </div>

          <br/>

          <div className="form-group">
            <label htmlFor="Lastname">Last Name: (in inches):</label>
            <input type="text" className="form-control" value={this.state.Lastname} onChange={this.onChangeLastname} />
          </div>

          <br/>

          <div className="form-group">
            <label htmlFor="Address">Address:</label>
            <input type="text" className="form-control" value={this.state.Address} onChange={this.onChangeAddress} />
          </div>

          <br/>

          <div className="form-group">
            <label htmlFor="PlateNumber">Licence Plate Number:</label>
            <input type="text" className="form-control" value={this.state.PlateNumber} onChange={this.onChangePlateNumber} />
          </div>

          <br/>

          <div className="form-group">
            <label htmlFor="VehicleModel">Vehicle Model:</label>
            <input type="text" className="form-control" value={this.state.VehicleModel} onChange={this.onChangeVehicleModel} />
          </div>

          <br/>

          <div className="form-group">
            <label htmlFor="EntryDate">Entry Date/Time:</label>
            <input type="text" className="form-control" value={this.state.EntryDate} onChange={this.onChangeEntryDate} />
          </div>
              
          <br/>

          <div className="form-group">
            <label htmlFor="ExitDate">Exit Date/Time:</label>
            <input type="text" className="form-control" value={this.state.ExitDate} onChange={this.onChangeExitDate} />
          </div>
              
          <br/>

          <div className="form-group">
            <label htmlFor="BusNo">Bus Number:</label>
            <input type="text" className="form-control" value={this.state.BusNo} onChange={this.onChangeBusNo} />
          </div>
              
          <br/>

          <div className="form-group">
            <label htmlFor="BusRoute">Bus Route:</label>
            <input type="text" className="form-control" value={this.state.BusRoute} onChange={this.onChangeBusRoute} />
          </div>
              
          <br/>

          <div className="form-group">
            <label htmlFor="CardNo">Card Number:</label>
            <input type="text" className="form-control" value={this.state.CardNo} onChange={this.onChangeCardNo} />
          </div>
              
          <br/>

          <div className="form-group">
            <label htmlFor="CardHolderName">Card Holder Name:</label>
            <input type="text" className="form-control" value={this.state.CardHolderName} onChange={this.onChangeCardHolderName} />
          </div>
              
          <br/>

          <div className="form-group">
            <label htmlFor="ExpireDate">Expire Date:</label>
            <input type="text" className="form-control" value={this.state.ExpireDate} onChange={this.onChangeExpireDate} />
          </div>
              
          <br/>

          <div className="form-group">
            <label htmlFor="SecurityCode">Security Code:</label>
            <input type="text" className="form-control" value={this.state.SecurityCode} onChange={this.onChangeSecurityCode} />
          </div>
              
          <br/>
          




          <button type="submit" className="btn btn-primary">
            Update Booking
          </button>
          

           
          

        </form>

      </div>

    )
  }
}

