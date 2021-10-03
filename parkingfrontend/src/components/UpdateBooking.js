import React,{Component} from 'react';
import axios from 'axios';
import './btn.css'


export default class updateBooking extends Component{

    constructor(props){
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
        this.onSubmit = this.onSubmit.bind(this);


        //the variables that needs to be changed
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
            BusRoute:''
        }
    }


    //get a single value and edit
    componentDidMount(){
        axios.get('/booking/edit-booking/' + this.props.match.params.id)
        .then(response=>{
            this.setState({
                BookingID: response.data.BookingID,
                Firstname: response.data.Firstname,
                Lastname: response.data.Lastname,
                Contactnumber: response.data.Contactnumber,
                Address: response.data.Address,
                PlateNumber: response.data.PlateNumber,
                VehicleModel: response.data.VehicleModel,
                EntryDate: response.data.EntryDate,
                ExitDate: response.data.ExitDate,
                BusNo: response.data.BusNo,
                BusRoute: response.data.BusRoute

            });
        })
        .catch(function (error){
            console.log(error);
        })
    }

    onChangeBookingID(e){
        this.setState({
            BookingID:e.target.value
        });
    }

    onChangeFirstname(e){
        this.setState({
            Firstname:e.target.value
        });
    }

    onChangeLastname(e){
        this.setState({
            Lastname:e.target.value
        });
    }

    onChangeContactnumber(e){
        this.setState({
            Contactnumber:e.target.value
        });
    }
    
    onChangeAddress(e){
        this.setState({
            Address:e.target.value
        });
    }

    onChangePlateNumber(e){
        this.setState({
            PlateNumber:e.target.value
        });
    }

    onChangeVehicleModel(e){
        this.setState({
            VehicleModel:e.target.value
        });
    }

    onChangeEntryDate(e){
        this.setState({
            EntryDate:e.target.value
        });
    }

    onChangeExitDate(e){
        this.setState({
            ExitDate:e.target.value
        });
    }

    onChangeBusNo(e){
        this.setState({
            BusNo:e.target.value
        });
    }

    onChangeBusRoute(e){
        this.setState({
            BusRoute:e.target.value
        });
    }



    onSubmit(e){
        e.preventDefault();
        const obj={
            BookingID:this.state.BookingID,
            Firstname:this.state.Firstname,
            Lastname:this.state.Lastname,
            Contactnumber:this.state.Contactnumber,
            Address:this.state.Address,
            PlateNumber:this.state.PlateNumber,
            VehicleModel:this.state.VehicleModel,
            EntryDate:this.state.EntryDate,
            ExitDate:this.state.ExitDate,
            BusNo:this.state.BusNo,
            BusRoute:this.state.BusRoute
            
        };

        axios.put('/booking/update-booking/' + this.props.match.params.id, obj)
        .then((response)=>{
            alert("Booking Successfully Updated!!")
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
        })

        this.props.history.push("/allBooking");
    }

    render() {
        return (
     <center>
        <div className="rishmaupdateform">
        <div className="container">
          <form onSubmit={this.onSubmit} style={{marginTop:100}}>
            <h3>Update Booking</h3>
            <div className="form-group">
                <label htmlFor="BookingID">BookingID:</label><br/>
                <input type="text" className="form-control" value={this.state.BookingID} onChange={this.onChangeBookingID} readonly/>
                </div>
                <br/>
            <div className="form-group">
                <label htmlFor="Firstname">Firstname:</label>
              <input type="text"  className="form-control" value={this.state.Firstname} onChange={this.onChangeFirstname} readonly/>
            </div>
            <br/>
            <div className="form-group">
                <label htmlFor="Lastname">Lastname:</label>
              <input type="text" className="form-control" value={this.state.Lastname} onChange={this.onChangeLastname} />
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="Contactnumber">Contactnumber:</label>
              <input type="text" className="form-control" value={this.state.Contactnumber} onChange={this.onChangeContactnumber} />
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="Address">Address:</label>
              <input type="text" className="form-control" value={this.state.Address} onChange={this.onChangeAddress} />
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="PlateNumber">PlateNumber:</label>
                    <input type="text" className="form-control" value={this.state.PlateNumber} onChange={this.onChangePlateNumber} />
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="VehicleModel">VehicleModel:</label>
                    <input type="text" className="form-control" value={this.state.VehicleModel} onChange={this.onChangeVehicleModel} />
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="EntryDate">EntryDate:</label>
                    <input type="text" className="form-control" value={this.state.EntryDate} onChange={this.onChangeEntryDate} />
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="ExitDate">ExitDate:</label>
                    <input type="text" className="form-control" value={this.state.ExitDate} onChange={this.onChangeExitDate} />
            </div>
            <br/>

            <div className="form-group">
                    <label htmlFor="BusNo">BusNo:</label>
                    <input type="number" className="form-control" value={this.state.BusNo} onChange={this.onChangeBusNo} />
            </div>
            <br/>
            <div className="form-group">
                    <label htmlFor="BusRoute">BusRoute:</label>
                    <input type="text" className="form-control" value={this.state.BusRoute} onChange={this.onChangeBusRoute} />
            </div>
            <br/>
           
            <button type="Submit" className="Updatepagebtn">
              Update Booking
            </button>
          </form>
          <br/>
          <br/>
        </div>
        </div></center>
        );
      }
}